import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

interface LoginValues {
  email: string;
  password: string;
}

interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
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
  const host = 'https://reviseminder.com/api';

  const login = async (values: LoginValues) => {
    try {
      const response = await fetch(`${host}/auth/login`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();

      if (data.error) {
          return data;
      }

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token)

        const userId = getUserIdFromToken(data.token);
        if (userId) {
          localStorage.setItem('userId', userId);
        }

      } else {
        console.error('Erro no login:', data.error);
      }

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  const signUp = async (values: SignUpValues) => {
    try {
      const response = await fetch(`${host}/auth/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
      });
      const data = await response.json();

      if (data.error) {
          return data;
      }

      if (response.ok) {
          return data;
          
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
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('userId');

    try {
      const response = await fetch(`${host}/users/${user_id}`, {
          method: 'DELETE',
          headers: {
              'Authorization': `${token}`,
              'Content-Type': 'application/json'
          }
      });
      const data = await response.json();

      if (response.ok) {
          localStorage.removeItem('token');
          navigate('/');
      } else {
          console.error('Erro ao excluir conta:', data.error);
      }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
  }

  return { login, signUp, handleLogout, deleteAccount }
}
