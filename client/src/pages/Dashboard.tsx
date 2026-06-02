import { useState } from 'react';
import { Header, Card, Button } from '@/components/common';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
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

  return (
    <div>
      <Header title="Your Dashboard" subtitle="Track your fitness progress" />

      <main className="max-w-7xl mx-auto py-8 px-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">This Week</p>
                <p className="text-3xl font-bold text-gray-900">10</p>
                <p className="text-gray-500 text-xs mt-1">Workouts completed</p>
              </div>
              <Calendar className="w-12 h-12 text-orange-100" />
            </div>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Duration</p>
                <p className="text-3xl font-bold text-gray-900">18.5</p>
                <p className="text-gray-500 text-xs mt-1">Hours this week</p>
              </div>
              <Zap className="w-12 h-12 text-orange-100" />
            </div>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Progress</p>
                <p className="text-3xl font-bold text-green-600">+15%</p>
                <p className="text-gray-500 text-xs mt-1">vs last week</p>
              </div>
              <TrendingUp className="w-12 h-12 text-orange-100" />
            </div>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Goals</p>
                <p className="text-3xl font-bold text-gray-900">5/8</p>
                <p className="text-gray-500 text-xs mt-1">Completed this month</p>
              </div>
              <Target className="w-12 h-12 text-orange-100" />
            </div>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Weekly Workouts */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Weekly Workout Summary</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="duration" fill="#F37321" name="Duration (min)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Exercise Distribution */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Exercise Type Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={exerciseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {exerciseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Progress Chart */}
        <Card className="mb-8">
          <h3 className="text-xl font-bold mb-4">Weight Progress</h3>
          <div className="flex gap-4 mb-6">
            {['week', 'month', 'year'].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? 'primary' : 'secondary'}
                onClick={() => setTimeRange(range)}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </Button>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={[
                { date: 'Jan 1', weight: 85 },
                { date: 'Jan 8', weight: 84.5 },
                { date: 'Jan 15', weight: 84 },
                { date: 'Jan 22', weight: 83.5 },
                { date: 'Jan 29', weight: 83 },
                { date: 'Feb 5', weight: 82.5 },
                { date: 'Feb 12', weight: 82 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" />
              <YAxis domain={[80, 86]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '2px solid #F37321',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#F37321"
                dot={{ fill: '#F37321', r: 5 }}
                activeDot={{ r: 7 }}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Recent Workouts */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Recent Workouts</h3>
          <div className="space-y-4">
            {[
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
            ].map((workout, idx) => (
              <Card key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{workout.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{workout.name}</h4>
                    <p className="text-gray-600 text-sm">{workout.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-orange-600">{workout.duration}</p>
                  <p className="text-gray-600 text-sm">{workout.exercises} exercises</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
