import { Button, Input, FormControl, FormLabel, VStack, Flex, Box, Stack, Heading, Center, Grid, Text } from "@chakra-ui/react";
import { DragHandleIcon, StarIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';
import MovieCard from './MovieCard';


const Favorites = () => {

  const navigate = useNavigate();
  const { favorites } = useMovies();

  return (
    <Flex minH="100dvh">
      <Box bg="gray.100" w="200px">
        <Stack h="full" px="3" py="2">
          <Flex justify="space-between" direction="column">
            <Button leftIcon={<DragHandleIcon />} colorScheme="blue" variant="ghost" onClick={() => navigate('/')}>Home</Button>
            <Button leftIcon={<StarIcon />} colorScheme="blue" variant="ghost" onClick={() => navigate('/favorites')}>Favorites</Button>
            <Button leftIcon={<PlusSquareIcon />} colorScheme="blue" variant="ghost" onClick={() => navigate('/add')}>Add movie</Button>
          </Flex>
        </Stack>
      </Box>

      <Box flex="1" px={5}>
        <Stack h="full">
          <Box>
            <Heading textAlign="left" pt={2}>Favorites</Heading>

            <Center flex="1">
              <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                {favorites.length === 0 ? (
                  <Text fontSize="xl" textAlign="center" mt={10} color="gray.500">
                    No favorite movies yet.
                  </Text>
                ) : (
                  favorites.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      genre={movie.genre}
                      duration={movie.duration}
                      image={movie.image}
                    />
                  ))
                )}

              </Grid>
            </Center>

          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Favorites;