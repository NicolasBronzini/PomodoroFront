import {
  BrowserRouter,
  Route,

  Routes,
 
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home";

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
