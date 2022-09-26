import { IDepartmentState } from '@/views/department/module';
import { ICompanyState } from '@/views/company/module';

export interface IModelIdAndName {
  id?: number;
  name?: string;
}

export interface IEmployeeState {
  id?: number;
  code?: string;
  email?: string;
  encrypted_password?: string;
  full_name?: string;
  gender?: string;
  birthday?: string;
  address?: string;
  department: IDepartmentState;
  hometown?: string;
  phone_number?: string;
  onboard_date?: string;
  position?: IModelIdAndName;
  end_date?: string;
  marital_status?: boolean;
  companys?: ICompanyState[];
  level: IModelIdAndName;
  contract?: IModelIdAndName;
  role?: IModelIdAndName;
  degree?: string;
  skill?: string;
  avatar?: string;
  active?: boolean;
  citizen_identification?: number;
}
