import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Header, Card, Button } from '@/components/common';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, } from 'recharts';
import { TrendingUp, Zap, Target, Calendar } from 'lucide-react';
const workoutData = [
    { day: 'Mon', workouts: 1, duration: 60 },
    { day: 'Tue', workouts: 2, duration: 90 },
    { day: 'Wed', workouts: 1, duration: 45 },
    { day: 'Thu', workouts: 0, duration: 0 },
    { day: 'Fri', workouts: 2, duration: 120 },
    { day: 'Sat', workouts: 3, duration: 150 },
    { day: 'Sun', workouts: 1, duration: 60 },
];
const exerciseData = [
    { name: 'Strength', value: 40 },
    { name: 'Cardio', value: 30 },
    { name: 'Flexibility', value: 20 },
    { name: 'Sports', value: 10 },
];
const COLORS = ['#F37321', '#FF9840', '#FFB366', '#FFCC99'];
export const Dashboard = () => {
    const [timeRange, setTimeRange] = useState('week');
    return (_jsxs("div", { children: [_jsx(Header, { title: "Your Dashboard", subtitle: "Track your fitness progress" }), _jsxs("main", { className: "max-w-7xl mx-auto py-8 px-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-8", children: [_jsx(Card, { className: "border-l-4 border-orange-500", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-600 text-sm font-medium", children: "This Week" }), _jsx("p", { className: "text-3xl font-bold text-gray-900", children: "10" }), _jsx("p", { className: "text-gray-500 text-xs mt-1", children: "Workouts completed" })] }), _jsx(Calendar, { className: "w-12 h-12 text-orange-100" })] }) }), _jsx(Card, { className: "border-l-4 border-orange-500", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-600 text-sm font-medium", children: "Total Duration" }), _jsx("p", { className: "text-3xl font-bold text-gray-900", children: "18.5" }), _jsx("p", { className: "text-gray-500 text-xs mt-1", children: "Hours this week" })] }), _jsx(Zap, { className: "w-12 h-12 text-orange-100" })] }) }), _jsx(Card, { className: "border-l-4 border-orange-500", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-600 text-sm font-medium", children: "Progress" }), _jsx("p", { className: "text-3xl font-bold text-green-600", children: "+15%" }), _jsx("p", { className: "text-gray-500 text-xs mt-1", children: "vs last week" })] }), _jsx(TrendingUp, { className: "w-12 h-12 text-orange-100" })] }) }), _jsx(Card, { className: "border-l-4 border-orange-500", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-600 text-sm font-medium", children: "Goals" }), _jsx("p", { className: "text-3xl font-bold text-gray-900", children: "5/8" }), _jsx("p", { className: "text-gray-500 text-xs mt-1", children: "Completed this month" })] }), _jsx(Target, { className: "w-12 h-12 text-orange-100" })] }) })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-8", children: [_jsxs(Card, { children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "Weekly Workout Summary" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: workoutData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#f0f0f0" }), _jsx(XAxis, { dataKey: "day" }), _jsx(YAxis, {}), _jsx(Tooltip, { contentStyle: {
                                                        backgroundColor: '#fff',
                                                        border: '1px solid #ccc',
                                                        borderRadius: '8px',
                                                    } }), _jsx(Bar, { dataKey: "duration", fill: "#F37321", name: "Duration (min)", radius: [8, 8, 0, 0] })] }) })] }), _jsxs(Card, { children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "Exercise Type Distribution" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: exerciseData, cx: "50%", cy: "50%", labelLine: false, label: ({ name, value }) => `${name}: ${value}%`, outerRadius: 100, fill: "#8884d8", dataKey: "value", children: exerciseData.map((_, index) => (_jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`))) }), _jsx(Tooltip, {})] }) })] })] }), _jsxs(Card, { className: "mb-8", children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "Weight Progress" }), _jsx("div", { className: "flex gap-4 mb-6", children: ['week', 'month', 'year'].map((range) => (_jsx(Button, { variant: timeRange === range ? 'primary' : 'secondary', onClick: () => setTimeRange(range), children: range.charAt(0).toUpperCase() + range.slice(1) }, range))) }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: [
                                        { date: 'Jan 1', weight: 85 },
                                        { date: 'Jan 8', weight: 84.5 },
                                        { date: 'Jan 15', weight: 84 },
                                        { date: 'Jan 22', weight: 83.5 },
                                        { date: 'Jan 29', weight: 83 },
                                        { date: 'Feb 5', weight: 82.5 },
                                        { date: 'Feb 12', weight: 82 },
                                    ], children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#f0f0f0" }), _jsx(XAxis, { dataKey: "date" }), _jsx(YAxis, { domain: [80, 86] }), _jsx(Tooltip, { contentStyle: {
                                                backgroundColor: '#fff',
                                                border: '2px solid #F37321',
                                                borderRadius: '8px',
                                            } }), _jsx(Line, { type: "monotone", dataKey: "weight", stroke: "#F37321", dot: { fill: '#F37321', r: 5 }, activeDot: { r: 7 }, strokeWidth: 3 })] }) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Recent Workouts" }), _jsx("div", { className: "space-y-4", children: [
                                    {
                                        name: 'Leg Day Strength',
                                        date: 'Today',
                                        duration: '60 min',
                                        exercises: 5,
                                        icon: '🦵',
                                    },
                                    {
                                        name: 'Morning Cardio',
                                        date: 'Yesterday',
                                        duration: '45 min',
                                        exercises: 3,
                                        icon: '🏃',
                                    },
                                    {
                                        name: 'Upper Body',
                                        date: '2 days ago',
                                        duration: '90 min',
                                        exercises: 8,
                                        icon: '💪',
                                    },
                                ].map((workout, idx) => (_jsxs(Card, { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "text-4xl", children: workout.icon }), _jsxs("div", { children: [_jsx("h4", { className: "font-bold text-lg", children: workout.name }), _jsx("p", { className: "text-gray-600 text-sm", children: workout.date })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "font-bold text-orange-600", children: workout.duration }), _jsxs("p", { className: "text-gray-600 text-sm", children: [workout.exercises, " exercises"] })] })] }, idx))) })] })] })] }));
};
