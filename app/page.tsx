'use client';

import { Flex, Heading, Link, Text, Center, VStack, Button, FormControl, FormLabel, Input, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { LuArrowRight, LuPencil } from 'react-icons/lu';

import { getUserPreferences, setUserPreferences } from '@/services/user-preferences';

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
  
  if (!user) return null; // The modal handles blocking access

  return (
    <Center minH="100vh" p={8}>
      <VStack spacing={6} align="center" maxW="600px">
        <Heading textAlign="center">Welcome, {user.username}!</Heading>
        <Text fontSize="lg" textAlign="center">
          Your job title: <strong>{user.jobTitle}</strong>
        </Text>

        <Button 
          leftIcon={<LuPencil />} 
          colorScheme="blue" 
          onClick={onOpen}
        >
          Edit Profile
        </Button>

        <Link href="/info?page=1">
          <Flex alignItems="center" justifyContent="center" gap={2}>
            <Text>Visit Information Page</Text>
            <LuArrowRight />
          </Flex>
        </Link>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Username</FormLabel>
                <Input 
                  name="username" 
                  value={formData.username} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormControl>
              <FormControl>
                <FormLabel>Job Title</FormLabel>
                <Input 
                  name="jobTitle" 
                  value={formData.jobTitle} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit">
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Center>
  );
}
