export const TYPES = {
  App: Symbol.for('App'),
  DatabaseService: Symbol.for('DatabaseService'),
  LoggerService: Symbol.for('LoggerService'),
  ConfigService: Symbol.for('ConfigService'),
  BaseSchema: Symbol.for('BaseSchema'),
  ProductRepository: Symbol.for('ProductRepository'),
  ProductService: Symbol.for('ProductService'),
  ProductSchema: Symbol.for('ProductSchema'),
} as const;
