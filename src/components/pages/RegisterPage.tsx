import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { isAxiosError } from "axios";

// Definimos la forma que tendrán los errores de validación que vienen de Laravel
interface ValidationErrors {
  [field: string]: string[];
}

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  // Estado para guardar los errores de validación
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // Limpiamos los errores anteriores

    try {
      await registerUser({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });

      alert("¡Registro exitoso! Ahora serás redirigido para iniciar sesión.");
      navigate("/login");
    } catch (error: unknown) {
      // Verificamos si es un error de Axios con un código 422 (validación)
      if (isAxiosError(error) && error.response?.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        alert("Ocurrió un error inesperado durante el registro.");
        console.error("Error en el registro:", error);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleRegister}
          className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Crear una Cuenta
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="register-name"
            >
              Nombre
            </label>
            <input
              className={`shadow-sm appearance-none border rounded w-full py-2 px-3 ${
                errors.name ? "border-red-500" : ""
              }`}
              id="register-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="register-email"
            >
              Email
            </label>
            <input
              className={`shadow-sm appearance-none border rounded w-full py-2 px-3 ${
                errors.email ? "border-red-500" : ""
              }`}
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="register-password"
            >
              Contraseña
            </label>
            <input
              className={`shadow-sm appearance-none border rounded w-full py-2 px-3 ${
                errors.password ? "border-red-500" : ""
              }`}
              id="register-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password[0]}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="register-password-confirm"
            >
              Confirmar Contraseña
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3"
              id="register-password-confirm"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Registrarse
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            ¿Ya tenés una cuenta?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Iniciá Sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
