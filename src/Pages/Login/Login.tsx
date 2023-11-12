import React, { useState } from 'react';
import './Login.css'; 
import IconHome from '../../assets/img/perro.png';
interface LoginProps {
  // Define any props here if needed, for example, a function to handle the login
}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
    console.log(email, password);
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
       <img src={IconHome} alt="" />
      </div>
    </div>
  );
};

export default Login;
