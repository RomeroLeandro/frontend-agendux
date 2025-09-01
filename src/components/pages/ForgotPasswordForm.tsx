import React, { useState } from "react";
import axios from "axios";
import apiClient from "../../api/axios";

export const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      const response = await axios.post(`${apiClient}/forgot-password`, {
        email,
      });
      setStatusMessage(response.data.message);
    } catch (error) {
      setStatusMessage("Error: No se pudo procesar la solicitud.");
      console.error("Error en forgot password:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleForgotPassword} className="auth-form">
        <h2>Olvidé mi Contraseña</h2>
        <p>
          Ingresá tu email y te enviaremos un enlace para restablecer tu
          contraseña.
        </p>

        {statusMessage && <div className="status-message">{statusMessage}</div>}

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tu@email.com"
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar Enlace de Reseteo"}
        </button>
      </form>
    </div>
  );
};
