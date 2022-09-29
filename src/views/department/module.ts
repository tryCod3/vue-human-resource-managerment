import { ICompanyState } from '@/views/company/module';

export interface ICompanyLabelState {
  id?: number;
  name: string;
}
export interface IDepartmentState {
  id?: number;
  name: string;
  active: boolean;
  company: ICompanyState[];
}
