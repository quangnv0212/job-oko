export interface UserData {
  token: String;
  type: String;
  authenticated: Boolean;
  full_name: String;
  notify: String;
  has_base_info: Boolean;
  has_desired: Boolean;
  job_subscription: Boolean;
  viewed_job: Number;
  interested_job: Number;
  user_id: String;
  uv_id: String;
  user_name: String;
  uid: String;
  avatart: String;
}
export interface Message {
  code: Number;
  message?: String;
  code_message?: String;
  code_message_value?: String;
}

export interface MessageRegisters {
  code: Number;
  message?: String;
  code_message?: String;
  code_message_value?: String;
}

export interface Cache {
  icon: Object;
  job_location: Object;
  job_title: Object;
  salary: Object;
  template_cv: Object;
}
export interface AuthenReducer {
  user_data: UserData;
  data_forgot: Message | null;
  res_change_pwd: Message | null;
  message: Message | null;
  data_getOTP: Message | null;
  data_verify_token: Message | null;
  cache: Cache | null;
  ss_id: String | null;
  report: Object | null;
  master: Object | null;
  messageRegister: MessageRegisters | null;
  dataError: any | null;
  res_reset_pwd: any | null;
  screenRegister: any | null;
  validateEmail: any | null;
  validatePhone: any | null;
  dataVerifyEmailPhone: any | null;
}
