'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { Box, SimpleGrid, Spinner, useDisclosure } from '@chakra-ui/react';

import { GET_CHARACTERS } from '@/lib/graphql/queries';
import { client } from '@/lib/graphql/apollo-client';
import { getUserPreferences } from '@/services/user-preferences';
import { Character } from './types';
import PageHeader from '../../components/info/PageHeader';
import CharacterCard from '../../components/info/CharacterCard';
import CharacterModal from '../../components/info/CharacterModal';
import Pagination from '../../components/info/Pagination';

export default function InfoPage() {
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
  const { prev, next } = data.characters.info;

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <PageHeader />
      
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {characters.map((char: Character) => (
          <CharacterCard 
            key={char.id}
            character={char} 
            onClick={handleCharacterClick}
            isSelected={selectedCharacter?.id === char.id}
          />
        ))}
      </SimpleGrid>
      
      <Pagination 
        currentPage={page}
        hasPrevPage={!!prev}
        hasNextPage={!!next}
      />

      <CharacterModal 
        character={selectedCharacter}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}
