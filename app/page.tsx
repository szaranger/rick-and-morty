'use client';

import { Flex, Heading, Link, Text, Center, VStack } from '@chakra-ui/react'; 
import { useEffect, useState } from 'react';
import { LuArrowRight } from 'react-icons/lu';

import { getUserPreferences } from '@/services/user-preferences';

export default function HomePage() {
  const [user, setUser] = useState<{ username: string; jobTitle: string } | null>(null);

  useEffect(() => {
    const prefs = getUserPreferences();
    if (prefs) {
      setUser(prefs);
    }
  }, []);
  
  if (!user) return null; // The modal handles blocking access

  return (
    <Center minH="100vh" p={8}>
      <VStack spacing={6} align="center" maxW="600px">
        <Heading textAlign="center">Welcome, {user.username}!</Heading>
        <Text fontSize="lg" textAlign="center">
          Your job title: <strong>{user.jobTitle}</strong>
        </Text>

        <Link href="/info?page=1">
          <Flex alignItems="center" justifyContent="center" gap={2}>
            <Text>Visit Information Page</Text>
            <LuArrowRight />
          </Flex>
        </Link>
      </VStack>
    </Center>
  );
}
