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
import { Character } from '@/app/info/types';

type CharacterModalProps = {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

// Modal component that displays detailed information about a character
export default function CharacterModal({ character, isOpen, onClose }: CharacterModalProps) {
  if (!character) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bg="gray.800" borderColor="portal.300" borderWidth={2}>
        <ModalHeader>{character.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            {/* Character image */}
            <Image 
              src={character.image} 
              alt={character.name} 
              borderRadius="md"
              mx="auto"
            />
            
            {/* Character status badges */}
            <HStack>
              <Badge colorScheme={character.status === 'Alive' ? 'green' : character.status === 'Dead' ? 'red' : 'gray'}>
                {character.status}
              </Badge>
              <Badge colorScheme="purple">{character.species}</Badge>
              <Badge colorScheme="blue">{character.gender}</Badge>
            </HStack>
            
            <Divider />
            
            {/* Character origin information */}
            <Box>
              <Text fontWeight="bold">Origin:</Text>
              <Text>{character.origin.name}</Text>
            </Box>
            
            {/* Character location information */}
            <Box>
              <Text fontWeight="bold">Location:</Text>
              <Text>{character.location.name}</Text>
            </Box>
            
            {/* Character episode count */}
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