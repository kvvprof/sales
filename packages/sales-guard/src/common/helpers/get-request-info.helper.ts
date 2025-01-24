import { Request } from 'express';

export const getRequestInfo = (req: Request) => ({
  method: req.method,
  path: req.originalUrl,
  requestId: req.headers['x-request-id'],
  ip: req.ip,
  userAgent: req.headers['user-agent'],
  referer: req.headers['referer'],
  query: req.query,
  body: req.body,
  user: req.user,
});
