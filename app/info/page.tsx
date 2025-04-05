'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client';
import {
  Box, SimpleGrid, Image, Text, Spinner, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, useDisclosure, VStack, HStack, Badge, Divider, Center, Heading
} from '@chakra-ui/react';

import { GET_CHARACTERS } from '@/lib/graphql/queries';
import { client } from '@/lib/graphql/apollo-client';
import { getUserPreferences } from '@/services/user-preferences';

type Character = {
  id: string;
  image: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  episode: {
    name: string;
  }[];
};

export default function InformationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const prefs = getUserPreferences();

  useEffect(() => {
    if (!prefs) {
      router.push('/');
    }
  }, [prefs, router]);

  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
    client,
    skip: !prefs,
  });

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    onOpen();
  };

  if (loading || !prefs) return <Spinner />;

  const characters = data.characters.results;

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <Heading textAlign="center" mb={6}>Rick and Morty Characters</Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {characters.map((char: Character) => (
          <Box 
            key={char.id} 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md"
            cursor="pointer"
            onClick={() => handleCharacterClick(char)}
            _hover={{ transform: 'scale(1.03)', transition: 'transform 0.2s', boxShadow: 'lg' }}
            transition="all 0.2s"
          >
            <Box position="relative">
              <Image src={char.image} alt={char.name} width="100%" height="auto" />
              <Badge 
                position="absolute" 
                top={2} 
                right={2} 
                colorScheme={char.status === 'Alive' ? 'green' : char.status === 'Dead' ? 'red' : 'gray'}
              >
                {char.status}
              </Badge>
            </Box>
            <Box p={4}>
              <Text fontWeight="bold" fontSize="lg">{char.name}</Text>
              <Text color="gray.600">{char.species}</Text>
              <Text fontSize="sm" color="gray.500" mt={1}>Click for details</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Center mt={6}>
        <HStack spacing={4}>
          {data.characters.info.prev && (
            <Button onClick={() => router.push(`/info?page=${page - 1}`)}>Previous</Button>
          )}
          {data.characters.info.next && (
            <Button onClick={() => router.push(`/info?page=${page + 1}`)}>Next</Button>
          )}
        </HStack>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          {selectedCharacter && (
            <>
              <ModalHeader>{selectedCharacter.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack spacing={4} align="stretch">
                  <Image 
                    src={selectedCharacter.image} 
                    alt={selectedCharacter.name} 
                    borderRadius="md"
                    mx="auto"
                  />
                  
                  <HStack>
                    <Badge colorScheme={selectedCharacter.status === 'Alive' ? 'green' : selectedCharacter.status === 'Dead' ? 'red' : 'gray'}>
                      {selectedCharacter.status}
                    </Badge>
                    <Badge colorScheme="purple">{selectedCharacter.species}</Badge>
                    <Badge colorScheme="blue">{selectedCharacter.gender}</Badge>
                  </HStack>
                  
                  <Divider />
                  
                  <Box>
                    <Text fontWeight="bold">Origin:</Text>
                    <Text>{selectedCharacter.origin.name}</Text>
                  </Box>
                  
                  <Box>
                    <Text fontWeight="bold">Location:</Text>
                    <Text>{selectedCharacter.location.name}</Text>
                  </Box>
                  
                  <Box>
                    <Text fontWeight="bold">Episodes:</Text>
                    <Text>{selectedCharacter.episode.length} episodes</Text>
                  </Box>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}
