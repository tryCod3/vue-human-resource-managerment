import { ICompanyState } from '@/views/company/module';
import { IFecthState } from '@/store/modules/api';
import { IEmployeeForm, IEmployeeState } from '@/views/employee/module';

export type typeModule = ICompanyState | IEmployeeForm | IEmployeeState;

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
