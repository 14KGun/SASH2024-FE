import { z } from 'zod';

const removeLastSlash = (value: string) => value.replace(/\/$/, '');

export const EnvSchema = z.object({
  backendApiUrl: z.string().min(1).transform(removeLastSlash),
  frontendAppUrl: z.string().min(1).transform(removeLastSlash),
  amplitudeKey: z.string().min(1).optional(),
  channeltalkKey: z.string().min(1).optional(),
  portone: z
    .object({
      storeId: z.string(),
      channelKey: z.string(),
    })
    .optional(),
});
