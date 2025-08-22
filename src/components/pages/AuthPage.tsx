import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { registerUser } from "../../services/authService";
import {
  getProfessions,
  type Profession,
} from "../../services/professionService";
import { isAxiosError } from "axios";

// Interfaz para los errores de validación de Laravel
interface ValidationErrors {
  [field: string]: string[];
}

export const AuthPage: React.FC = () => {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const { login } = useAuth();
  const navigate = useNavigate();

  // --- Estados para Login ---
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  // --- Estados para Registro ---
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [terms, setTerms] = useState(false);
  const [registerErrors, setRegisterErrors] = useState<ValidationErrors>({});
  const [professions, setProfessions] = useState<Profession[]>([]);

  // Cargar las profesiones desde el backend al montar el componente
  useEffect(() => {
    if (authMode === "register") {
      const fetchProfessions = async () => {
        try {
          const data = await getProfessions();
          setProfessions(data);
        } catch (error) {
          console.error("No se pudieron cargar las profesiones", error);
        }
      };
      fetchProfessions();
    }
  }, [authMode]); // Se ejecuta cada vez que cambia el modo (login/register)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    try {
      await login({ email: loginEmail, password: loginPassword });
      navigate("/dashboard");
    } catch {
      setLoginError("Las credenciales proporcionadas son incorrectas.");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!terms) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }
    setRegisterErrors({});
    try {
      await registerUser({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        profession,
        business_name: businessName,
        password,
        password_confirmation: passwordConfirmation,
      });
      alert("¡Registro exitoso! Por favor, inicia sesión.");
      setAuthMode("login");
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response?.status === 422) {
        setRegisterErrors(error.response.data.errors);
      } else {
        alert("Ocurrió un error inesperado durante el registro.");
        console.error(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg w-full max-w-lg">
        <div className="text-center mb-8">
          {/* Aquí podés poner tu logo */}
          <h1 className="text-3xl font-bold mt-4 text-gray-800">Bienvenido</h1>
          <p className="text-gray-500">
            Inicia sesión o crea tu cuenta para comenzar
          </p>
        </div>

        {/* --- Selector de Pestañas --- */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
          <button
            onClick={() => setAuthMode("login")}
            className={`w-1/2 py-2 rounded-md font-semibold transition-all duration-300 ${
              authMode === "login"
                ? "bg-white shadow text-blue-600"
                : "text-gray-500"
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => setAuthMode("register")}
            className={`w-1/2 py-2 rounded-md font-semibold transition-all duration-300 ${
              authMode === "register"
                ? "bg-white shadow text-blue-600"
                : "text-gray-500"
            }`}
          >
            Registrarse
          </button>
        </div>

        {/* --- Renderizado Condicional del Formulario --- */}
        {authMode === "login" ? (
          <form onSubmit={handleLogin} className="space-y-6">
            {loginError && (
              <p className="bg-red-100 text-red-700 text-sm p-3 rounded text-center">
                {loginError}
              </p>
            )}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Iniciar Sesión
            </button>
            <div className="text-center text-sm text-gray-500">
              O CONTINÚA CON
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span>Continuar con Google</span>
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  required
                />
                {registerErrors.first_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {registerErrors.first_name[0]}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apellido
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  required
                />
                {registerErrors.last_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {registerErrors.last_name[0]}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
              {registerErrors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {registerErrors.email[0]}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Teléfono (Opcional)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Profesión
              </label>
              <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full p-2 border rounded-lg bg-white"
                required
              >
                <option value="" disabled>
                  Selecciona tu profesión
                </option>
                {professions.map((prof) => (
                  <option key={prof.id} value={prof.name}>
                    {prof.name}
                  </option>
                ))}
              </select>
              {registerErrors.profession && (
                <p className="text-red-500 text-xs mt-1">
                  {registerErrors.profession[0]}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nombre del Consultorio/Negocio (Opcional)
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
              {registerErrors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {registerErrors.password[0]}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div className="pt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">
                  Acepto los términos y condiciones
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 mt-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Crear Cuenta
            </button>
          </form>
        )}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-500 hover:underline">
            — Volver al inicio —
          </Link>
        </div>
      </div>
    </div>
  );
};
