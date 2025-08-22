import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authService"; // Asegúrate de tener esta función

export const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Error en el logout de la API:", error);
    } finally {
      logout(); // Limpia el estado local
      navigate("/"); // Redirige a la página principal
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Bienvenido, {user?.first_name}</h1>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Tus Datos</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <strong>Nombre:</strong> {user?.first_name} {user?.last_name}
          </li>
          <li>
            <strong>Email:</strong> {user?.email}
          </li>
          <li>
            <strong>Rol:</strong> {user?.role}
          </li>
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};
