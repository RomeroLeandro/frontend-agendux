import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch {
      setError("Las credenciales proporcionadas son incorrectas.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Iniciar Sesión
          </h2>
          {error && (
            <p className="bg-red-100 text-red-700 text-sm p-3 rounded mb-4">
              {error}
            </p>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="login-email"
            >
              Email
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3"
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="login-password"
            >
              Contraseña
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3"
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Entrar
          </button>
          <p className="text-center text-gray-600 text-sm mt-4">
            ¿No tenés una cuenta?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Registrate
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
