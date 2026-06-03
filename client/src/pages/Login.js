import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header, Button } from '@/components/common';
import { authService } from '@/services/authService';
import { Dumbbell, Mail, Lock } from 'lucide-react';
export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await authService.login(formData.email, formData.password);
            navigate('/dashboard');
        }
        catch (err) {
            setError('Login failed. Please check your credentials.');
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { children: [_jsx(Header, { title: "Welcome Back", subtitle: "Continue your fitness journey" }), _jsx("main", { className: "min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4", children: _jsx("div", { className: "max-w-md mx-auto", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("div", { className: "w-12 h-12 bg-orange-gradient rounded-lg flex items-center justify-center", children: _jsx(Dumbbell, { className: "text-white w-6 h-6" }) }) }), _jsx("h2", { className: "text-2xl font-bold text-center mb-2", children: "Sign In" }), _jsx("p", { className: "text-center text-gray-600 mb-6", children: "Log in to your account to continue tracking" }), error && (_jsx("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6", children: error })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 font-semibold mb-2", children: "Email" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-3.5 w-5 h-5 text-gray-400" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent", placeholder: "you@example.com" })] })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("label", { className: "block text-gray-700 font-semibold", children: "Password" }), _jsx("a", { href: "#", className: "text-orange-600 hover:text-orange-700 text-sm font-medium", children: "Forgot?" })] }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-3.5 w-5 h-5 text-gray-400" }), _jsx("input", { type: "password", name: "password", value: formData.password, onChange: handleChange, required: true, className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent", placeholder: "Enter your password" })] })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", id: "remember", className: "w-4 h-4 text-orange-600 rounded focus:ring-2 focus:ring-orange-500" }), _jsx("label", { htmlFor: "remember", className: "ml-2 text-sm text-gray-600", children: "Remember me" })] }), _jsx(Button, { type: "submit", variant: "primary", disabled: loading, className: "w-full py-3 text-lg", children: loading ? 'Signing in...' : 'Sign In' }), _jsxs("div", { className: "relative my-6", children: [_jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "w-full border-t border-gray-300" }) }), _jsx("div", { className: "relative flex justify-center text-sm", children: _jsx("span", { className: "px-2 bg-white text-gray-500", children: "Or" }) })] }), _jsxs("p", { className: "text-center text-gray-600", children: ["Don't have an account?", ' ', _jsx(Link, { to: "/register", className: "text-orange-600 hover:text-orange-700 font-semibold", children: "Sign up here" })] })] }), _jsx("div", { className: "mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg", children: _jsxs("p", { className: "text-xs text-blue-700", children: [_jsx("strong", { children: "Demo Account:" }), " Use any email and password to test the app"] }) })] }) }) })] }));
};
