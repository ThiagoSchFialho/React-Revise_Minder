import { useNavigate } from "react-router-dom";

interface LoginValues {
  email: string;
  password: string;
}

interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const useAuth = () => {
  const navigate = useNavigate();
  const host = 'http://localhost:3000/auth';

  const login = async (values: LoginValues) => {
    try {
      const response = await fetch(`${host}/login`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      console.log(data);

      if (data?.error === 'Authentication failed') {
        alert('Credenciais incorretas');
      }

      if (response.ok) {
        navigate('/dashboard');
      } else {
        console.error('Erro no login:', data.error);
      }

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  const signUp = async (values: SignUpValues) => {
    try {
      const response = await fetch(`${host}/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
      });
      const data = await response.json();
      console.log(data);

      if (data?.error === 'User with that email already exists') {
          alert('Email indisponivel');
      }

      if (response.ok) {
          navigate('/login');
      } else {
          console.error('Erro no cadastro:', data.error);
      }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
  }

  return { login, signUp }
}