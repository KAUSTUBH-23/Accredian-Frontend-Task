import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import LandingPage from "./pages/landing-page";

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
