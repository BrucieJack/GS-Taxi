/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useRole(requiredRole: string) {
  const userRole = localStorage.getItem("userRole");

  const navigate = useNavigate();

  useEffect(() => {
    if (requiredRole !== userRole) {
      navigate("/login");
    }
  }, []);
}
