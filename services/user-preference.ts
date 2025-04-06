// Type definition for user preferences stored in localStorage
export type UserPreferences = {
  username: string;
  jobTitle: string;
}

// Key used to store preferences in localStorage
const STORAGE_KEY = 'user-preferences';

// Retrieve user preferences from localStorage
export const getUserPreferences = (): UserPreferences | null => {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

// Save user preferences to localStorage
export const setUserPreferences = (prefs: UserPreferences): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
};

// Clear user preferences from localStorage
export const clearUserPreferences = (): void => {
  localStorage.removeItem(STORAGE_KEY);
}; 