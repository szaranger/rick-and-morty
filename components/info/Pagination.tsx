import { Center, HStack, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

type PaginationProps = {
  currentPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

// Component for navigating between pages of character results
export default function Pagination({ currentPage, hasPrevPage, hasNextPage }: PaginationProps) {
  const router = useRouter();

  return (
    <Center mt={6}>
      <HStack spacing={4}>
        {/* Previous page button - only shown if there is a previous page */}
        {hasPrevPage && (
          <Button 
            onClick={() => router.push(`/info?page=${currentPage - 1}`)}
             colorScheme="portal"
          >
            Previous
          </Button>
        )}
        {/* Next page button - only shown if there is a next page */}
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