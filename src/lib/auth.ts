export interface User {
  email: string;
  password: string;
  age?: string;
  dob?: string;
  contact?: string;
}

export interface UserProfile {
  email: string;
  age?: string;
  dob?: string;
  contact?: string;
}

export const getUsers = (): User[] => {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users: User[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('users', JSON.stringify(users));
};

export const getCurrentUser = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('currentUser');
};

export const setCurrentUser = (email: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('currentUser', email);
};

export const logout = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('currentUser');
};

export const registerUser = (email: string, password: string): { success: boolean; message: string } => {
  const users = getUsers();
  
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'User already exists' };
  }
  
  users.push({ email, password });
  saveUsers(users);
  return { success: true, message: 'Registration successful' };
};

export const loginUser = (email: string, password: string): { success: boolean; message: string } => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }
  
  setCurrentUser(email);
  return { success: true, message: 'Login successful' };
};

export const getUserProfile = (email: string): UserProfile | null => {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  
  if (!user) return null;
  
  return {
    email: user.email,
    age: user.age,
    dob: user.dob,
    contact: user.contact
  };
};

export const updateUserProfile = (email: string, updates: Partial<UserProfile>): { success: boolean; message: string } => {
  const users = getUsers();
  const userIndex = users.findIndex(u => u.email === email);
  
  if (userIndex === -1) {
    return { success: false, message: 'User not found' };
  }
  
  users[userIndex] = { ...users[userIndex], ...updates };
  saveUsers(users);
  return { success: true, message: 'Profile updated successfully' };
};