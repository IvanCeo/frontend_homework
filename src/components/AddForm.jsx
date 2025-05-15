import {
  Button,
  Input,
  Flex,
  Box,
  Stack,
  Heading,
  Center,
  FormControl,
  FormLabel,
  Select,
  Textarea 
} 
from "@chakra-ui/react";
import { DragHandleIcon, StarIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMovies } from '../context/MovieContext';
import { v4 as uuidv4 } from 'uuid';


const AddForm = () => {
  const { addMovie } = useMovies();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      id: uuidv4(),
      title,
      genre,
      duration,
      image,
      description,
    };

    addMovie(newMovie);
    navigate('/'); // возвращаемся на главную
  };

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
            <Heading textAlign="center" pt={2}>Add movie</Heading>

            <Center pt={5}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Movie title</FormLabel>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Interstellar" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Movie genre</FormLabel>
                    <Select value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Select genre">
                      <option>Triller</option>
                      <option>Action</option>
                      <option>Drama</option>
                      <option>Comedy</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Movie duration</FormLabel>
                    <Input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="135 min" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Movie image source</FormLabel>
                    <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="/images/larry.webp" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Movie description</FormLabel>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Input description here" />
                  </FormControl>

                  <Button type="submit" colorScheme="blue">Add Movie</Button>
                </Stack>
              </form>
            </Center>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default AddForm;