import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { useState } from "react";

interface LoginValues {
  email: string;
  password: string;
}

interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const getUserIdFromToken = (token: string) => {
  if (!token) return null;
  
  try {
    const decodedToken = jwtDecode<{ userId: string }>(token);
    return decodedToken.userId;
  } catch (error) {
    console.error('Erro ao decodificar token:', error);
    return null;
  }
}

export const useAuth = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const host = 'http://localhost:3000/auth';

  const handleLogin = async (values: LoginValues) => {
    try {
      const response = await fetch(`${host}/login`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();

      if (data?.error === 'Authentication failed') {
        setErrorMessage('Credenciais incorretas');
        return;
      }

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token)

        const userId = getUserIdFromToken(data.token);
        if (userId) {
          localStorage.setItem('userId', userId);
        }

        navigate('/dashboard');
      } else {
        console.error('Erro no login:', data.error);
      }

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  const handleSignUp = async (values: SignUpValues) => {
    try {
      const response = await fetch(`${host}/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
      });
      const data = await response.json();

      if (data?.error === 'User with that email already exists') {
          setErrorMessage('Email indisponivel');
          return;
      }

      if (response.ok) {
          navigate('/login', { state: { successMessage: 'Cadastro bem sucedido!' } });
      } else {
          console.error('Erro no cadastro:', data.error);
      }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const deleteAccount = async () => {
    console.error('Função não implementada');
  }

  return { handleLogin, handleSignUp, handleLogout, deleteAccount, errorMessage }
}