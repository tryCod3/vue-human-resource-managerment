import { ICompanyState } from '@/views/company/module';

export type typeModule = ICompanyState;

export interface IFecthPropsState {
  url: string;
  dataInPage?: number;
}

export interface IFecthState {
  hasFetch: boolean;
  success: boolean;
  messageError?: string;
}

export interface IFetchResponseState<Type> {
  datas: Type[];
  state: IFecthState;
}

export interface BaseFecthData<T> {
  fetch: IFetchResponseState<T>;
}
