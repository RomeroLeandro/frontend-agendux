import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import apiClient from '../../api/axios';
import axios from 'axios';

interface IFormData {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const ResetPasswordForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IFormData>({
    token: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Al cargar el componente, leemos el token y el email de la URL
  useEffect(() => {
    const token = searchParams.get('token') || '';
    const email = searchParams.get('email') || '';
    setFormData((prev) => ({ ...prev, token, email }));
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      const response = await axios.post(`${apiClient}/reset-password`, formData);
      setStatusMessage(response.data.message);
      
      // Si es exitoso, esperamos un momento y redirigimos al login
      setTimeout(() => {
        navigate('/login');
      }, 3000);

    } catch (error) { // Atrapamos el error sin el tipo 'any'
  // Por defecto, TypeScript lo trata como 'unknown'

  let message = 'Ocurrió un error inesperado.';

  if (axios.isAxiosError(error)) {
    // Si el error es de Axios, ahora TypeScript sabe que podemos
    // acceder a 'error.response' de forma segura.
    message = error.response?.data?.message || 'Error al conectar con el servidor.';
  }

  setStatusMessage(message);
  console.error('Error en reset password:', error);

} finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleResetPassword} className="auth-form">
        <h2>Restablecer Contraseña</h2>

        {statusMessage && <div className="status-message">{statusMessage}</div>}

        <div className="input-group">
          <label htmlFor="password">Nueva Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password_confirmation">Confirmar Contraseña</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Guardando...' : 'Restablecer Contraseña'}
        </button>
      </form>
    </div>
  );
};