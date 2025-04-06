import { Box, Image, Text, Badge } from '@chakra-ui/react';
import { Character } from '../../app/info/types';

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
}

export default function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <Box 
      key={character.id}
      bg="morty.300" 
      borderWidth="2px" 
      borderRadius="lg"
      borderColor="morty.200"
      overflow="hidden" 
      boxShadow="md"
      cursor="pointer"
      onClick={() => onClick(character)}
      _hover={{ transform: 'scale(1.03)', transition: 'transform 0.2s', boxShadow: 'lg' }}
      transition="all 0.2s"
    >
      <Box position="relative">
        <Image src={character.image} alt={character.name} width="100%" height="auto" />
        <Badge 
          position="absolute" 
          top={2} 
          right={2} 
          colorScheme={character.status === 'Alive' ? 'green' : character.status === 'Dead' ? 'red' : 'gray'}
        >
          {character.status}
        </Badge>
      </Box>
      <Box p={4}>
        <Text fontWeight="bold" fontSize="lg">{character.name}</Text>
        <Text color="gray.600">{character.species}</Text>
        <Text fontSize="sm" color="gray.500" mt={1}>Click for details</Text>
      </Box>
    </Box>
  );
} 