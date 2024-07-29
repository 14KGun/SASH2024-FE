'use client';

import React from 'react';
import { SWRConfig } from 'swr';

import instance from '@/utils/instance';

const config = {
  refreshInterval: 1000 * 60, // 1분마다 새로고침
  fetcher: async (url: string) =>
    (
      await instance.get(url, {
        headers: { 'request-helper': 'qaing-swr-provider' },
      })
    ).data,
};

export default ({ children }: React.PropsWithChildren<{}>) => (
  <SWRConfig value={config}>{children}</SWRConfig>
);
