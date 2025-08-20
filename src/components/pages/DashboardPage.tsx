import { useAuth } from "../../hooks/useAuth";

export const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold">Bienvenido, {user?.name}</h1>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Tus Datos</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <strong>Nombre:</strong> {user?.name}
          </li>
          <li>
            <strong>Email:</strong> {user?.email}
          </li>
          <li>
            <strong>Rol:</strong> {user?.role}
          </li>
        </ul>
      </div>
    </div>
  );
};
