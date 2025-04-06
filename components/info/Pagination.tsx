import { Center, HStack, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export default function Pagination({ currentPage, hasPrevPage, hasNextPage }: PaginationProps) {
  const router = useRouter();

  return (
    <Center mt={6}>
      <HStack spacing={4}>
        {hasPrevPage && (
          <Button 
            onClick={() => router.push(`/info?page=${currentPage - 1}`)}
             colorScheme="portal"
          >
            Previous
          </Button>
        )}
        {hasNextPage && (
          <Button 
            onClick={() => router.push(`/info?page=${currentPage + 1}`)}
             colorScheme="portal"
          >
            Next
          </Button>
        )}
      </HStack>
    </Center>
  );
} 