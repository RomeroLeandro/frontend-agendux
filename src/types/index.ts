export type AppointmentStatus = "Confirmada" | "Pendiente" | "Cancelada";

export interface Appointment {
  id: string;
  time: string;
  patientName: string;
  service: string;
  status: AppointmentStatus;
}

export interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  notificationCount?: number;
}
