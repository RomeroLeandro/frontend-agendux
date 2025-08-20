import React from "react";
import { AuthContext, useAuthLogic } from "../hooks/useAuth";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const auth = useAuthLogic();

  if (auth.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Cargando aplicación...
      </div>
    );
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
