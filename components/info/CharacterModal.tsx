import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalCloseButton, 
  ModalFooter, 
  Button, 
  VStack, 
  HStack, 
  Badge, 
  Divider, 
  Box, 
  Text, 
  Image 
} from '@chakra-ui/react';
import { Character } from '../../app/info/types';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CharacterModal({ character, isOpen, onClose }: CharacterModalProps) {
  if (!character) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bg="gray.800">
        <ModalHeader>{character.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Image 
              src={character.image} 
              alt={character.name} 
              borderRadius="md"
              mx="auto"
            />
            
            <HStack>
              <Badge colorScheme={character.status === 'Alive' ? 'green' : character.status === 'Dead' ? 'red' : 'gray'}>
                {character.status}
              </Badge>
              <Badge colorScheme="purple">{character.species}</Badge>
              <Badge colorScheme="blue">{character.gender}</Badge>
            </HStack>
            
            <Divider />
            
            <Box>
              <Text fontWeight="bold">Origin:</Text>
              <Text>{character.origin.name}</Text>
            </Box>
            
            <Box>
              <Text fontWeight="bold">Location:</Text>
              <Text>{character.location.name}</Text>
            </Box>
            
            <Box>
              <Text fontWeight="bold">Episodes:</Text>
              <Text>{character.episode.length} episodes</Text>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button bg="portal.400" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
} 