import { ICompanyState } from '@/views/company/module';

export interface ICompanyLabelState {
  company_id: string;
  company_name: string;
}
export interface IDepartmentState {
  id?: number;
  name: string;
  active: boolean;
  company_infos: ICompanyState[];
}
