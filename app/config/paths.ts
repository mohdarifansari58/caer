export const PATHS = {
  HOME: "/",
  BLOG: "/blog",
  BLOG_POST: (id: string) => `/blog/${id}`,
  BUY: "/buy",
  SELL: "/sell",
  ABOUT: "/about",
  LOGIN: "/login",
  SIGNUP: "/signup",
  UNAUTHORIZED: "/unauthorized",
  DASHBOARD: "/dashboard",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
} as const;
