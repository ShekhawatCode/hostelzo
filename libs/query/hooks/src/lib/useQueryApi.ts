import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  AUTH_QUERY_ENDPOINTS,
  authQueryApis,
} from 'libs/query/utils/src/lib/auth';
import { GeneralObject } from '@hostelzo-mono-repo/api-interfaces';

type Endpoints = AUTH_QUERY_ENDPOINTS;

const Apis = {
  ...authQueryApis,
};

const useQueryApi = (
  name: Endpoints,
  config: any,
  additionalRoute: string,
  search: string
) => {
  const queryArgs = Apis[name](additionalRoute, search);
  return useQuery<
    any,
    AxiosError,
    AxiosResponse<GeneralObject & GeneralObject[]>
  >(queryArgs.queryKey, queryArgs.queryFn, config as any);
};

export default useQueryApi;
