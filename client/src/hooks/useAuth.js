import { useState, useEffect } from 'react';
export const useAuth = () => {
    const [state, setState] = useState({
        isAuthenticated: false,
        loading: true,
        error: null,
    });
    useEffect(() => {
        const token = localStorage.getItem('token');
        setState({
            isAuthenticated: !!token,
            loading: false,
            error: null,
        });
    }, []);
    const logout = () => {
        localStorage.removeItem('token');
        setState({
            isAuthenticated: false,
            loading: false,
            error: null,
        });
    };
    return {
        ...state,
        logout,
    };
};
