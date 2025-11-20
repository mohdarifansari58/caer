//***************************************
// For FrontEnd Url
//***************************************

export const PATH = {
  HOME: "/",
  CONTACT_US: "/contactus",
  ABOUT_US: "/aboutus",
  SIGNUP:"/signup",
  LOGIN:"/login",
  PRIVACY_POLICY: "/privacypolicy",
  TERMS_AND_CONDITIONS: "/termsandconditions",
  FAQ: "/faq",
  BLOG: "/blog",
};

//***************************************
// For Backend Url
//***************************************

const base = "http://localhost:8080";
export const Endpoints = {};

export const APIResult = {
  SUCCESS: true,
  FAILURE: false,
};

export const API = {
  base,
  BaseUrl: base + "v1/admin/",
  BaseImgUrl: base + "v1/",
  userBaseUrl: base + "v1/user/",
  ProdUrl: "", // Production url
  EndPoint: Endpoints,
  Result: APIResult,
};
