import { Box, Image, Text, Badge } from '@chakra-ui/react';
import { Character } from '../../app/info/types';

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
  isSelected?: boolean;
}

export default function CharacterCard({ character, onClick, isSelected = false }: CharacterCardProps) {
  return (
    <Box 
      key={character.id}
      bg="morty.300" 
      borderWidth="2px" 
      borderRadius="lg"
      borderColor={isSelected ? "morty.300" : "morty.200"}
      overflow="hidden" 
      boxShadow={isSelected ? "0 0 15px 5px rgba(104, 211, 145, 0.6), 0 0 30px 10px rgba(104, 211, 145, 0.4)" : "md"}
      cursor="pointer"
      onClick={() => onClick(character)}
      _hover={{ transform: 'scale(1.03)', transition: 'transform 0.2s', boxShadow: "0 0 20px 8px rgba(104, 211, 145, 0.2), 0 0 40px 15px rgba(104, 211, 145, 0.2)" }}
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
        <Text color="gray.900">{character.species}</Text>
        <Text fontSize="sm" color="gray.900" mt={1}>Click for details</Text>
      </Box>
    </Box>
  );
} 