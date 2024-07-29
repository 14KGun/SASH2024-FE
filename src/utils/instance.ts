import axios, { type AxiosResponse } from 'axios';
import { ZodSchema, z } from 'zod';

import { env } from '@/utils/config';

import type { InstanceResponse, QAingRequestObject } from '@/types/instance';

type RequestCallback<T extends QAingRequestObject> =
  (T['body'] extends ZodSchema
    ? {} extends z.infer<T['body']>
      ? { body?: z.infer<T['body']> }
      : { body: z.infer<T['body']> }
    : { body?: {} }) & { args?: Array<string> };

let instanceResponseHandler: ((response: AxiosResponse) => void) | null = null;
let instanceErrorHandler: ((error: any) => void) | null = null;
let swrErrorHandler: ((error: any) => void) | null = null;

const instance = axios.create({
  baseURL: env.backendApiUrl,
  withCredentials: true,
});
export default instance;

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    instanceResponseHandler?.(response);
    return response;
  },
  (error: any) => {
    instanceErrorHandler?.(error);
    return Promise.reject(error);
  },
);

export const setInstanceConfig = (
  _instanceResponseHandler: typeof instanceResponseHandler,
  _instanceErrorHandler: typeof instanceErrorHandler,
  _swrErrorHandler: typeof swrErrorHandler,
) => {
  instanceResponseHandler = _instanceResponseHandler;
  instanceErrorHandler = _instanceErrorHandler;
  swrErrorHandler = _swrErrorHandler;
};

export const handleSwrError = (error: any) => swrErrorHandler?.(error);

export const request = async <Req extends QAingRequestObject>(
  req: Req,
  { args = [], body = {} }: RequestCallback<Req>,
): Promise<InstanceResponse<Req['data']>> => {
  const { method, path, prefix, body: bodySchema } = req;
  if (bodySchema) {
    return (
      await instance[method](
        `${prefix}${path(...args)}`,
        bodySchema.parse(body),
      )
    )?.data;
  }
  return (await instance[method](`${prefix}${path(...args)}`))?.data;
};

export const requestFetch = async <Req extends QAingRequestObject>(
  req: Req,
  { args = [], body = {} }: RequestCallback<Req>,
): Promise<InstanceResponse<Req['data']>> => {
  const { method, path, prefix, body: bodySchema } = req;

  const result = await fetch(`${env.backendApiUrl}${prefix}${path(...args)}`, {
    method: method === 'patch' ? 'PATCH' : method,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: bodySchema ? JSON.stringify(bodySchema.parse(body)) : undefined,
  });
  const contentType = result.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return await result.json();
  }
  return (await result.text()) as any;
};

export const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const uploadFileToPreSignedUrlFetch = async (
  {
    url,
    fields,
  }: {
    url: string;
    fields: Record<string, string>;
  },
  file: File | string,
) => {
  const formData = new FormData();

  for (const key in fields) {
    formData.append(key, fields[key]);
  }
  if (typeof file !== 'string' && file.type) {
    formData.append('Content-Type', file.type);
  } else {
    formData.append('Content-Type', 'application/json');
  }
  formData.append('file', file);

  const response = await fetch(url, {
    method: 'post',
    cache: 'no-cache',
    body: formData,
  });

  if (response?.status !== 204 && response?.status !== 201) {
    throw new Error();
  }
  if (response.body instanceof ReadableStream) {
    const blob = await response.blob();
    const file = new File([blob], 'video.mp4', { type: 'video/mp4' });
    return file;
  }
  return null;
};
