import { VStack, Heading, Text, Button, Flex, Link, Card, CardBody, Avatar } from '@chakra-ui/react';
import { LuArrowRight, LuPencil } from 'react-icons/lu';

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
      borderRadius="xl"
      borderWidth={2}
      borderColor="portal.300"
      color="whiteAlpha.900"
      bg="gray.800"
      sx={{
        boxShadow: "0 0 15px 5px rgba(183, 148, 244, 0.5), 0 0 30px 10px rgba(183, 148, 244, 0.3)",
        transition: "all 0.3s ease",
        _hover: {
          boxShadow: "0 0 20px 8px rgba(183, 148, 244, 0.6), 0 0 40px 15px rgba(183, 148, 244, 0.4)",
          transform: "translateY(-2px)"
        }
      }}
    >
      <CardBody>
        <VStack spacing={4} align="center" color="portal.300" maxW="300px" mt={4}>
          <Avatar src="/rick.png" size="xxl" maxH="200px" mt={-6} />
          <Heading size="lg" data-testid="welcome-heading" color="morty.300" zIndex={1} mt={20}>
            Welcome, {username}!
          </Heading>
          <Text fontSize="md" data-testid="job-title" zIndex={1}>
            Your job title is <b>{jobTitle}</b>
          </Text>
          <Button
            data-testid="edit-profile-button"
            colorScheme="portal"
            onClick={onEditClick}
            leftIcon={<LuPencil />}
          >
            Edit Profile
          </Button>
          <Link href="/info?page=1" mt={4}>
            <Flex alignItems="center" justifyContent="center" gap={2} color="rick.300">
              <Text fontWeight="bold">Visit Information Page</Text>
              <LuArrowRight />
            </Flex>
          </Link>
        </VStack>
      </CardBody>
    </Card>
  );
} 