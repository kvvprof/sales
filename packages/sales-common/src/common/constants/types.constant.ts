export const TYPES = {
  App: Symbol.for('App'),
  DatabaseService: Symbol.for('DatabaseService'),
  ConfigService: Symbol.for('ConfigService'),
  LoggerService: Symbol.for('LoggerService'),
  BaseSchema: Symbol.for('BaseSchema'),
  ContractorRepository: Symbol.for('ContractorRepository'),
  ContractorService: Symbol.for('ContractorService'),
  ContractorSchema: Symbol.for('ContractorSchema'),
  EntityRepository: Symbol.for('EntityRepository'),
  EntityService: Symbol.for('EntityService'),
  EntitySchema: Symbol.for('EntitySchema'),
} as const;
