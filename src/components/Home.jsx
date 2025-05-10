import {
  Button, Box, Flex, Stack, Center, Grid, Heading,
} from '@chakra-ui/react';
import { DragHandleIcon, StarIcon, PlusSquareIcon } from '@chakra-ui/icons';
import MovieCard from './MovieCard';
import { useMovies } from '../context/MovieContext';

const Home = () => {
  const { movies } = useMovies();

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

      <Box flex="1" px={5}>
        <Stack h="full">
          <Box>
            <Heading textAlign="center" pt={2}>Genre</Heading>
            <Box display="flex" justifyContent="flex-end" pt={4} gap={3} pr={0}>
              <Button>thriller</Button>
              <Button>action</Button>
              <Button>drama</Button>
              <Button>comedy</Button>
            </Box>
          </Box>

          <Center flex="1">
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  genre={movie.genre}
                  duration={movie.duration}
                  image={movie.image}
                />
              ))}
            </Grid>
          </Center>

          <Box pb="2">Bottom</Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Home;
