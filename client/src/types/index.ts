export interface User {
  id: string;
  email: string;
  name: string;
  age?: number;
  weight?: number;
  height?: number;
  goals?: string[];
  createdAt: Date;
}

export interface Workout {
  id: string;
  userId: string;
  name: string;
  description?: string;
  exercises: Exercise[];
  duration: number;
  date: Date;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  notes?: string;
}

export interface Progress {
  id: string;
  userId: string;
  date: Date;
  weight?: number;
  bodyMetrics?: {
    chest?: number;
    waist?: number;
    biceps?: number;
    thighs?: number;
  };
  notes?: string;
}

export interface FitnessGoal {
  id: string;
  userId: string;
  title: string;
  description: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  deadline: Date;
  status: 'active' | 'completed' | 'abandoned';
}

export interface AuthResponse {
  token: string;
  user: User;
}
