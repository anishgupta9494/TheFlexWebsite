import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header, Button } from '@/components/common';
import { authService } from '@/services/authService';
import { Dumbbell } from 'lucide-react';
export const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        setLoading(true);
        try {
            await authService.register(formData.email, formData.password, formData.name);
            navigate('/dashboard');
        }
        catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { children: [_jsx(Header, { title: "Join The Flex", subtitle: "Start your fitness journey today" }), _jsx("main", { className: "min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4", children: _jsx("div", { className: "max-w-md mx-auto", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("div", { className: "w-12 h-12 bg-orange-gradient rounded-lg flex items-center justify-center", children: _jsx(Dumbbell, { className: "text-white w-6 h-6" }) }) }), _jsx("h2", { className: "text-2xl font-bold text-center mb-2", children: "Create Your Account" }), _jsx("p", { className: "text-center text-gray-600 mb-6", children: "Join thousands of fitness enthusiasts and start tracking today" }), error && (_jsx("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6", children: error })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 font-semibold mb-2", children: "Full Name" }), _jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent", placeholder: "John Doe" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 font-semibold mb-2", children: "Email" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent", placeholder: "you@example.com" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 font-semibold mb-2", children: "Password" }), _jsx("input", { type: "password", name: "password", value: formData.password, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent", placeholder: "At least 6 characters" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 font-semibold mb-2", children: "Confirm Password" }), _jsx("input", { type: "password", name: "confirmPassword", value: formData.confirmPassword, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent", placeholder: "Confirm your password" })] }), _jsx("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4", children: _jsxs("p", { className: "text-sm text-gray-700", children: [_jsx("span", { className: "font-semibold", children: "Free Account Benefits:" }), _jsxs("ul", { className: "mt-2 space-y-1 text-xs text-gray-600", children: [_jsx("li", { children: "\u2713 Unlimited workout tracking" }), _jsx("li", { children: "\u2713 Basic progress charts" }), _jsx("li", { children: "\u2713 Exercise database access" })] })] }) }), _jsx(Button, { type: "submit", variant: "primary", disabled: loading, className: "w-full py-3 text-lg", children: loading ? 'Creating Account...' : 'Create Account' }), _jsxs("p", { className: "text-center text-gray-600 text-sm", children: ["Already have an account?", ' ', _jsx(Link, { to: "/login", className: "text-orange-600 hover:text-orange-700 font-semibold", children: "Sign in" })] }), _jsx("p", { className: "text-center text-xs text-gray-500 mt-4", children: "By signing up, you agree to our Terms of Service and Privacy Policy" })] })] }) }) })] }));
};
