import { Box, Image } from '@chakra-ui/react';

export const Background = () => {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      >
        <Image
          src="/falling.jpg"
          alt="Falling Rick and Morty Background"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
        />
        {/* Dark overlay for better text readability */}
        <Box
          data-testid="dark-overlay"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="1"
        />
      </Box>
    </>
  );
} 