export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  profession?: string;
  business_name?: string;
  password: string;
  password_confirmation: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}
