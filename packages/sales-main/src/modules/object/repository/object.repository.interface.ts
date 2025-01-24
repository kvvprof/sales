import { Object as TObject } from '@/integrations';

export interface IObjectRepository {
  findById(id: number): Promise<TObject | null>;
  findMany(): Promise<TObject[]>;
}
