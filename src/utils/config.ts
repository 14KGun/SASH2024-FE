import { EnvSchema } from '@/utils/schemas';

const _env = import.meta.env;

export const env = EnvSchema.parse({
  backendApiUrl:
    _env?.NEXT_PUBLIC_BACKEND_API_URL ||
    _env?.REACT_APP_BACKEND_API_URL ||
    _env?.VITE_APP_BACKEND_API_URL ||
    _env?.PUBLIC_BACKEND_API_URL,
  frontendAppUrl:
    _env?.NEXT_PUBLIC_FRONTEND_URL ||
    _env?.REACT_APP_FRONTEND_URL ||
    _env?.VITE_APP_BACKEND_API_URL ||
    _env?.PUBLIC_FRONTEND_URL,
});
