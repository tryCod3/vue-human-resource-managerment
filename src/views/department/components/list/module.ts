export interface ICompanyState {
  id?: number;
  company_name: string;
  phone_number: string;
  address: string;
}
export interface IDepartmentState {
  id?: number;
  name: string;
  active: boolean;
  company_infos: ICompanyState[];
}
