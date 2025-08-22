export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  profession?: string;
  business_name?: string;
  role: "user" | "admin";
}
