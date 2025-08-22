import apiClient from "../api/axios";

export interface Profession {
  id: number;
  name: string;
  category: string;
}

export const getProfessions = async (): Promise<Profession[]> => {
  const response = await apiClient.get("/professions");
  return response.data;
};
