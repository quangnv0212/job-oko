import { createSlice } from "@reduxjs/toolkit";
import { AuthenReducer } from "../../types/authenTypes";

const initialState: AuthenReducer = {
  user_data: {
    token: "",
    type: "",
    authenticated: false,
    full_name: "",
    notify: "",
    has_base_info: false,
    has_desired: false,
    job_subscription: false,
    viewed_job: 0,
    interested_job: 0,
    user_id: "",
    uv_id: "",
    user_name: "",
    uid: "",
    avatart: "",
  },
  cache: {
    icon: {},
    job_location: {},
    job_title: {},
    salary: {},
    template_cv: {},
  },
  data_forgot: null,
  res_change_pwd: null,
  res_reset_pwd: null,
  message: {
    code: 0,
  },
  data_getOTP: null,
  data_verify_token: null,
  screenRegister: null,
  ss_id: "",
  report: null,
  validateEmail: null,
  validatePhone: null,
  dataVerifyEmailPhone: null,
  master: null,
  messageRegister: {
    code: 0,
  },
  dataError: null,
};
export const authenSlice = createSlice({
  name: "authen",
  initialState,
  reducers: {
    getCache: () => {},
    getCacheFailed: (state: AuthenReducer) => {
      return {
        ...state,
      };
    },
    forgotPassword: (state) => {
      return {
        ...state,
        data_forgot: null,
      };
    },
    changePassword: (state) => {
      return {
        ...state,
        res_change_pwd: null,
      };
    },
    login: (state) => {
      return {
        ...state,
        message: null,
        dataError: null,
      };
    },
    generate: () => {},
    register: () => {},
    resetPassword: () => {},
    google: () => {},
    facebook: () => {},
    logout: () => {},
    appReport: () => {},
    apple: (state) => {
      return { ...state, message: null };
    },
  },
});

export const {
  getCache,
  generate,
  getCacheFailed,
  forgotPassword,
  facebook,
  changePassword,
  register,
  resetPassword,
  login,
  logout,
  appReport,
  apple,
  google,
} = authenSlice.actions;

export default authenSlice.reducer;
