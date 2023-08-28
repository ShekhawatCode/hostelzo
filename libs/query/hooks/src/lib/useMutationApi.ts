import { QueryMeta } from 'react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  AUTH_MUTATION_ENDPOINTS,
  authMutationApis,
} from '../../../utils/src/lib/auth';

type Endpoints = AUTH_MUTATION_ENDPOINTS;

const Apis = {
  ...authMutationApis,
};

const useMutationApi = (
  name: Endpoints,
  config: QueryMeta,
  additionalRoute?: string
) => {
  return Apis[name](config, additionalRoute || '');
};

export default useMutationApi;
