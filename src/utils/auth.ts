export const isAuthenticated = (): boolean => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("isLoggedIn") === "true";
    }
    return false;
  };
  
  export const redirectToLogin = (): void => {
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  };
  
  export const logout = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("isLoggedIn");
      window.location.href = '/login';
    }
  };