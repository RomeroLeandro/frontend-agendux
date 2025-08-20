import apiclient from "../api/axios";
import type { Plan } from "../interfaces/plan.interface";

interface ApiResponse {
  data: Plan[];
}

export const getPlans = async (): Promise<Plan[]> => {
  try {
    const response = await apiclient.get<ApiResponse>("/plans");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching plans:", error);
    throw error;
  }
}