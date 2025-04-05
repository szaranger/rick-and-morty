'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client';
import {
  Box, SimpleGrid, Image, Text, Spinner, Button
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
};

export default function InformationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get('page') || '1', 10);

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

  if (loading || !prefs) return <Spinner />;

  const characters = data.characters.results;

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {characters.map((char: Character) => (
          <Box key={char.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={char.image} alt={char.name} />
            <Text mt={2} fontWeight="bold">{char.name}</Text>
            <Text>{char.species} - {char.status}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <Box mt={4} display="flex" gap={4}>
        {data.characters.info.prev && (
          <Button onClick={() => router.push(`/info?page=${page - 1}`)}>Previous</Button>
        )}
        {data.characters.info.next && (
          <Button onClick={() => router.push(`/info?page=${page + 1}`)}>Next</Button>
        )}
      </Box>
    </Box>
  );
}
