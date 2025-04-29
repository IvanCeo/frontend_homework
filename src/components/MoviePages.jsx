import { Box, Image, Text, Flex } from "@chakra-ui/react";

const MoviePage = ({ movie }) => {
  const { title, posterUrl, description } = movie || {};
  
  return (
    <Box p={8}>
      <Image src={posterUrl} alt={title} />
      <Text mt={4}>{description}</Text>
    </Box>
  );
};

export default MoviePage;