import type { ZodSchema, z } from 'zod';

type Method = 'get' | 'post' | 'patch' | 'put' | 'delete';

export type QAingRequestObject = {
  method: Method;
  path: (...args: Array<string>) => string;
  prefix: string;
  body?: ZodSchema;
  data?: ZodSchema;
};

export type InstanceResponse<T> = T extends ZodSchema ? z.infer<T> : undefined;
