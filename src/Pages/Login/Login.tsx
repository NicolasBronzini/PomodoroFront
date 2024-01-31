import React, { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory


interface LoginProps {  
  // Define any props here if needed, for example, a function to handle the login
}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // useNavigate instead of useHistory
  
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  email, password }),
        credentials: 'include', // Añade esta línea
      });

      if (response.ok) {
        // Si la respuesta es exitosa, redirige al usuario a la página de inicio
        navigate('/home');  // use navigate instead of push
      } else {
        // Si hay un error en la autenticación, maneja el error
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      alert('Error al realizar la solicitud');
    }
  };

  return (
    <div className="login-container">
       <div className="login-content">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit">Sign in</button>
            <div className="alternative-signin">
              Or sign in with
              {/* Icons or buttons for Google, Facebook, etc. */}
            </div>
            <div className="forgot-password">
              Forgot password?
            </div>
          </form>
        </div>
      <div className="login-illustration">
       <img  alt="" />
      </div>
    </div>
  );
};

export default Login;
