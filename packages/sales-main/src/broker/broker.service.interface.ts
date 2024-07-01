export interface IBrokerService {
	publish(topic: string, message: string): Promise<void>;
	subscribe(
		groupId: string,
		topic: string,
		cb: (message: string) => Promise<void>,
	): Promise<void>;
}
