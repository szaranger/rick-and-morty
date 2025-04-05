export type UserPreferences = {
  username: string;
  jobTitle: string;
}

const STORAGE_KEY = 'user-preferences';

export const getUserPreferences = (): UserPreferences | null => {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const setUserPreferences = (prefs: UserPreferences): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
};

export const clearUserPreferences = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
