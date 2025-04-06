import { VStack, Heading, Text, Button, Flex, Link, Card, CardBody } from '@chakra-ui/react';
import { LuArrowRight } from 'react-icons/lu';
import { EditIcon } from '@chakra-ui/icons';

interface WelcomeCardProps {
  username: string;
  jobTitle: string;
  onEditClick: () => void;
}

export const WelcomeCard = ({ username, jobTitle, onEditClick }: WelcomeCardProps) => {
  return (
    <Card
      data-testid="welcome-card"
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      boxShadow="xl"
      borderRadius="xl"
      borderWidth={2}
      borderColor="portal.300"
      color="whiteAlpha.900"
      bg="gray.800"
    >
      <CardBody>
        <VStack spacing={4} align="center">
          <Heading size="lg" data-testid="welcome-heading">
            Welcome, {username}!
          </Heading>
          <Text fontSize="md" data-testid="job-title">
            {jobTitle}
          </Text>
          <Button
            data-testid="edit-profile-button"
            colorScheme="blue"
            onClick={onEditClick}
            leftIcon={<EditIcon />}
          >
            Edit Profile
          </Button>
          <Link href="/info?page=1">
            <Flex alignItems="center" justifyContent="center" gap={2}>
              <Text color="portal.300" fontWeight="bold">Visit Information Page</Text>
              <LuArrowRight color="#9f7aea" />
            </Flex>
          </Link>
        </VStack>
      </CardBody>
    </Card>
  );
} 