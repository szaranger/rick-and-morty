'use client';

import {
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalFooter, Button, Input, FormControl, FormLabel
} from '@chakra-ui/react';
import { useState } from 'react';

import { setUserPreferences } from '@/services/user-preferences';

interface Props {
  onComplete(): void;
}

export function UserInfoModal({ onComplete }: Props) {
  const [username, setUsername] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleSave = () => {
    if (username && jobTitle) {
      setUserPreferences({ username, jobTitle });
      onComplete();
    }
  };

  return (
    <Modal isOpen={true} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Your Info</ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input value={username} onChange={e => setUsername(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Job Title</FormLabel>
            <Input value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSave} disabled={!username || !jobTitle}>
            Continue
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
