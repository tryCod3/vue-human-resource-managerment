export interface ICompanyInfoState {
  id: number;
  company_name: string;
  phone_number: string;
  address: string;
}
export interface IDepartmentState {
  id: number;
  company_name: string;
  department_name: string;
  active: boolean;
  company_infos: ICompanyInfoState[];
}
