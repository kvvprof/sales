import { inject, injectable } from 'inversify';
import { Kafka } from 'kafkajs';

import { IBrokerService } from '@/broker/broker.service.interface';
import { IConfigService } from '@/config/config.service.interface';
import { ILoggerService } from '@/logger/logger.service.interface';
import { TYPES } from '@/types';

@injectable()
export class BrokerService implements IBrokerService {
	private readonly kafka: Kafka;

	constructor(
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
	) {
		this.kafka = new Kafka({
			clientId: this.configService.get('KAFKAJS_CLIENT_ID'),
			brokers: [this.configService.get('KAFKAJS_BROKER')],
			sasl: {
				mechanism: 'plain',
				username: this.configService.get('KAFKAJS_USERNAME'),
				password: this.configService.get('KAFKAJS_PASSWORD'),
			},
		});
	}

	public async publish(topic: string, message: string) {
		try {
			const producer = this.kafka.producer();
			await producer.connect();
			await producer.send({
				topic,
				messages: [{ value: message }],
			});
			await producer.disconnect();
		} catch (error) {
			this.loggerService.error(error);
		}
	}

	public async subscribe(
		groupId: string,
		topic: string,
		cb: (message: string) => Promise<void>,
	) {
		try {
			const consumer = this.kafka.consumer({ groupId });
			await consumer.connect();
			await consumer.subscribe({ topic });
			await consumer.run({
				eachMessage: async ({ message }) => {
					if (message.value) {
						await cb(message.value.toString());
					}
				},
			});
		} catch (error) {
			this.loggerService.error(error);
		}
	}
}
