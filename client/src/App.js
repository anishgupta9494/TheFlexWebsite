import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Home } from '@/pages/Home';
import { Dashboard } from '@/pages/Dashboard';
import '@/styles/global.css';
function App() {
    return (_jsxs(Router, { children: [_jsx(Navigation, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) })] })] }));
}
export default App;
