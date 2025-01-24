export interface ILoggerService {
  info(message: string, meta?: Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  error(error: unknown, meta?: Record<string, unknown>): void;
}
