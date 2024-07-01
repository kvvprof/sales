import { BasicObject, GetObjectInput } from '@/schemas/schema.types';

export interface IObjectService {
	getObject(input: GetObjectInput): Promise<BasicObject>;
	getObjects(): Promise<BasicObject[]>;
}
