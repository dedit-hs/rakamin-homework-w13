import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ProtectedRoute from "./modules/route";
import Navbar from "./components/Navbar";
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack h={"100vh"}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/register"} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </VStack>
  );
}

export default App;
