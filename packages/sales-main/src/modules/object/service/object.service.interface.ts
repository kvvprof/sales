import { BasicObject, GetObjectInput } from '@/common';

export interface IObjectService {
  getObject(input: GetObjectInput): Promise<BasicObject>;
  getObjects(): Promise<BasicObject[]>;
}
