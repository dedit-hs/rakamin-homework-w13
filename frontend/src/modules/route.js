import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const toast = useToast();
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setAuthenticated(true);
    } else {
      navigate("/login");
    }
  }, [localStorage.getItem("access_token")]);

  return isAuthenticated
    ? children
    : toast({
        position: "top",
        title: "Unauthenticated",
        description: "Please login first.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
}
