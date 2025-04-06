'use client';

import { Box, Center, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getUserPreferences, setUserPreferences } from '@/services/user-preferences';
import { Background } from '../components/home/Background';
import { WelcomeCard } from '../components/home/WelcomeCard';
import { EditProfileModal } from '../components/home/EditProfileModal';

export default function HomePage() {
  const [user, setUser] = useState<{ username: string; jobTitle: string } | null>(null);
  const [formData, setFormData] = useState({ username: '', jobTitle: '' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const prefs = getUserPreferences();
    if (prefs) {
      setUser(prefs);
      setFormData(prefs);
    }
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserPreferences(formData);
    setUser(formData);
    onClose();
  };
  
  if (!user) return null;

  return (
    <Box 
      minH="100vh" 
      position="relative"
      overflow="hidden"
    >
      <Background />
      
      <Center p={8} position="relative" zIndex="3">
        <WelcomeCard 
          username={user.username}
          jobTitle={user.jobTitle}
          onEditClick={onOpen}
        />
      </Center>

      <EditProfileModal 
        isOpen={isOpen}
        onClose={onClose}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}
