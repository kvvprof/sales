import crypto from 'crypto';

export const hashString = (input: string) => {
  return crypto.createHash('sha256').update(input).digest('hex');
};
