import { ICompanyState } from '@/views/company/module';
import { IFecthState } from '@/store/modules/api';

export type typeModule = ICompanyState;

export interface IFecthPropsState {
  url: string;
  dataInPage?: number;
}

export interface IFetchResponseState<Type> {
  datas: Type[];
  state: IFecthState;
}

export interface BaseFecthData<T> {
  fetch: IFetchResponseState<T>;
}
