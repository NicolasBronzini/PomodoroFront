import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register/Register";
import { ToastProvider } from "react-toast-notifications";

function App() {
  

  return (
    <>
    <ToastProvider>
     <BrowserRouter>
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>   
      </Routes>
    </BrowserRouter>
    </ToastProvider>
    </>
  )
}

export default App
