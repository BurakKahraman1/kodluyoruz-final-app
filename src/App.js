import './scss/app.scss'
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedProvider } from "./context/loggedContext";
import Register from "./pages/register";
import Home from "./pages/home";
import Header from "./component/header";
import ErrorBoundary from './component/errorBoundary';

function App() {
  return (
    <LoggedProvider>
      <BrowserRouter>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<ErrorBoundary type="home"><Home /> </ErrorBoundary>} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LoggedProvider>
  );
}

export default App;
