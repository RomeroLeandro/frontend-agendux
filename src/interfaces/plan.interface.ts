export interface Plan {
  id: number;
  name: string;
  description: string | null;
  price: {
    monthly: string;
    annual: string;
  };
  features: string[];
  isFeatured: boolean;
  createdAt: Date;
  extraReminderCost: number | null;
}
