import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

import { useToasts } from 'react-toast-notifications';
interface RegisterProps {
  // Define any props here if needed
}

const Register: React.FC<RegisterProps> = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { addToast } = useToasts();

//Valida contraseña con mayuscula 8 caracteres y num
  const isStrongPassword = (password: string) => {
    // Al menos 8 caracteres, una mayúscula y un número
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };
  

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validar que las contraseñas son iguales
    if (password !== confirmPassword) {
      addToast('Las contraseñas no coinciden', { appearance: 'error' });
      return;
    }
    // Validar que la contraseña cumple con las reglas
    if (!isStrongPassword(password)) {
      addToast('La contraseña debe tener al menos 8 caracteres, una mayúscula y un número', { appearance: 'error' });
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
        credentials: 'include',
      });

      if (response.ok) {
        navigate('/home');
      }  else {
        const data = await response.json();
        addToast(data.message, { appearance: 'error' });
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      addToast('Error al realizar la solicitud', { appearance: 'error' });
    }
  };

  return (
    <div className="login-container">
      <div className="illustrationRegister">
      <img  alt="" />
      </div>
      <div className="login-content">
        <form className="login-formRegister" onSubmit={handleRegister}>
          <h2>Register</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="UserName"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit">Sign up</button>
          <div className="alternative-signin">
            {/* ... */}
          </div>
          <div className="forgot-password">
            {/* ... */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
