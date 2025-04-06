import { Flex, Heading, Link, Text, Box } from '@chakra-ui/react';
import { LuArrowLeft } from 'react-icons/lu';

// Header component for the information page with navigation
export default function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb={6}>
      {/* Home navigation link */}
      <Link href="/">
        <Flex alignItems="center" color="portal.300" fontWeight="bold" _hover={{ color: "portal.200" }}>
          <LuArrowLeft size={20} />
          <Text ml={2}>Home</Text>
        </Flex>
      </Link>
      {/* Page title */}
      <Heading textAlign="center" color="portal.300">Information</Heading>
      {/* Empty box for flex spacing */}
      <Box w="100px" />
    </Flex>
  );
} 