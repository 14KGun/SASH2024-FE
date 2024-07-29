import { EnvSchema } from '@/utils/schemas';

export const env = EnvSchema.parse({
  backendApiUrl:
    process.env.NEXT_PUBLIC_BACKEND_API_URL ||
    process.env.REACT_APP_BACKEND_API_URL ||
    process.env.PUBLIC_BACKEND_API_URL,
  frontendAppUrl:
    process.env.NEXT_PUBLIC_FRONTEND_URL ||
    process.env.REACT_APP_FRONTEND_URL ||
    process.env.PUBLIC_FRONTEND_URL,
});
