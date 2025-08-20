import apiClient from "../api/axios";
import type { User } from "../interfaces/user.interface";
import type {
  RegisterData,
  LoginCredentials,
  AuthResponse,
} from "../interfaces/auth.interface";

export const registerUser = (data: RegisterData) => {
  return apiClient.post("/auth/register", data);
};

export const loginUser = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(
    "/auth/login",
    credentials
  );
  return response.data;
};

export const getAuthenticatedUser = async (): Promise<User> => {
  const response = await apiClient.get<User>("/auth/user");
  return response.data;
};

export const logoutUser = () => {
  return apiClient.post("/auth/logout");
};
