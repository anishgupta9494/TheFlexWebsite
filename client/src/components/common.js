import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Header = ({ title, subtitle }) => {
    return (_jsx("header", { className: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 border-b-4 border-orange-500", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-5xl font-bold mb-2", children: title }), subtitle && _jsx("p", { className: "text-xl opacity-90", children: subtitle })] }) }));
};
export const Card = ({ children, className = '' }) => {
    return (_jsx("div", { className: `bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`, children: children }));
};
export const Button = ({ children, onClick, variant = 'primary', disabled = false, className = '', type = 'button', }) => {
    const baseStyles = 'px-4 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer';
    const variants = {
        primary: 'bg-orange-600 text-white hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400',
    };
    return (_jsx("button", { type: type, onClick: onClick, disabled: disabled, className: `${baseStyles} ${variants[variant]} ${className}`, children: children }));
};
