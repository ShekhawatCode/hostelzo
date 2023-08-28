import axios from 'axios';
import { useMutation } from 'react-query';
import auth from '../../../../config';
import { GeneralObject } from '@hostelzo-mono-repo/api-interfaces';

export const authMutationApis = {
  WEB_ADMINLOGIN: (config: GeneralObject, additionalRoute?: string) =>
    useMutation(async (data: GeneralObject) => {
      await axios.post(`http://localhost:3333/api/web/adminLogin`, data),
        config;
    }),
};
export const authQueryApis = {
  WEB_CSRF_TOKEN: ((additionalRoute, search) => {
    return {
      queryKey: [
        'web',
        'csrf',
        'token',
        new URLSearchParams(search).toString(),
      ],
      queryFn: async () =>
        await axios.get(`http://localhost:3333/api/web/csrf-token`),
    };
  }) as any,
};

export type AUTH_MUTATION_ENDPOINTS = keyof typeof authMutationApis;
export type AUTH_QUERY_ENDPOINTS = keyof typeof authQueryApis;
