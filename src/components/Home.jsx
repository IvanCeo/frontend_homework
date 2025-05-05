import { Button, Box, Flex, Stack, Center, Grid, GridItem, Image, Heading } from "@chakra-ui/react";
import { DragHandleIcon, StarIcon, PlusSquareIcon } from '@chakra-ui/icons'
import MovieCard from './MovieCard.jsx'

const Home = () => {
  return (
    <Flex minH='100dvh'>
      <Box bg='gray.100' w='200px' >
        <Stack h='full' px='3' py='2'>
          <Flex justify='space-between' direction='column'>
            <Button leftIcon={<DragHandleIcon />} colorScheme='blue' variant='ghost'>Home</Button>
            <Button leftIcon={<StarIcon />} colorScheme='blue' variant='ghost'>Favorites</Button>
            <Button leftIcon={<PlusSquareIcon />} colorScheme='blue' variant='ghost'>Add film</Button>
          </Flex>

          

        </Stack>
      </Box>
      <Box flex='1' px={5}>
        <Stack h='full'>
          <Box>
            <Heading textAlign="center" pt={2}>Genre</Heading>
            <Box display="flex" justifyContent="flex-end" pt={4} gap={15} pr={0}>
              <Button>triller</Button>
              <Button>action</Button>
              <Button>drama</Button>
              <Button>comedy</Button>
            </Box>
          </Box>
          <Center flex='1'>
            <Grid templateColumns='repeat(3, 1fr)' gap={5}>
              <MovieCard 
                title='movie'
                genre='triller'
                duration='13 min'
                image='/images/larry.webp'
              />
              <MovieCard 
                title='movie'
                genre='triller'
                duration='13 min'
                image='/images/larry.webp'
              />
              <MovieCard 
                title='movie'
                genre='triller'
                duration='13 min'
                image='/images/larry.webp'
              />
              <MovieCard 
                title='movie'
                genre='triller'
                duration='13 min'
                image='/images/larry.webp'
              />
              <MovieCard 
                title='movie'
                genre='triller'
                duration='13 min'
                image='/images/larry.webp'
              />
              <MovieCard 
                title='movie'
                genre='triller'
                duration='13 min'
                image='/images/larry.webp'
              />
              <MovieCard 
                title='movie'
                genre='triller'
                duration='13 min'
                image='/images/larry.webp'
              />
              <MovieCard 
                title='movie'
                genre='triller'
                duration='13 min'
                image='/images/larry.webp'
              />
              <MovieCard 
                title='movie'
                genre='triller'
                duration='13 min'
                image='/images/larry.webp'
              />
            </Grid>
          </Center>
          <Box pb='2'>Bottom</Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Home;