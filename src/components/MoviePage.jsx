import { useParams } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';
import {
  Box, Flex, Stack, Heading, Image, Text, Button, Center,
} from '@chakra-ui/react';
import { DragHandleIcon, StarIcon, PlusSquareIcon } from '@chakra-ui/icons';

const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useMovies();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) return <Box p={5}>Movie not found</Box>;

  return (
    <Flex minH="100dvh">
      <Box bg="gray.100" w="200px">
        <Stack h="full" px="3" py="2">
          <Flex justify="space-between" direction="column">
            <Button leftIcon={<DragHandleIcon />} colorScheme="blue" variant="ghost">Home</Button>
            <Button leftIcon={<StarIcon />} colorScheme="blue" variant="ghost">Favorites</Button>
            <Button leftIcon={<PlusSquareIcon />} colorScheme="blue" variant="ghost">Add film</Button>
          </Flex>
        </Stack>
      </Box>
      <Box flex="1" px={5} py={4}>
        <Stack spacing={4}>
          <Heading textAlign="center">{movie.title}</Heading>
          <Center>
            <Image
              src={movie.image || '/images/placeholder.png'}
              alt={movie.title}
              maxH="400px"
              fallbackSrc="/images/placeholder.png"
            />
          </Center>
          <Text fontSize="lg" textAlign="center">{movie.description}</Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default MoviePage;
