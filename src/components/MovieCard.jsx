import { Heading, IconButton, Button, Box, Flex, Stack, Center, Card, CardHeader, CardBody, CardFooter, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { DragHandleIcon, StarIcon, PlusSquareIcon, DeleteIcon } from '@chakra-ui/icons'
import { useMovies } from '../context/MovieContext';

const MovieCard = (
    {id,
    title,
    genre,
    duration,
    image}
) => {
    const { addToFavorites, removeMovie } = useMovies();

    return (
        <Card variant="filled" size="sm">
            <CardBody>
                <Image 
                src={image}
                borderRadius='lg'
                alt={title} 
                fallbackSrc="/images/placeholder.webp" />

                <Stack mt='6' />
                <Heading size='md'>{title}</Heading>
                <Flex justifyContent="space-between" pt={3}>
                    <Text >{genre}</Text>
                    <Text color='blue.600'>
                        {duration}
                    </Text>
                </Flex>
            </CardBody>

            

            <CardFooter justifyContent='space-between'>
                <IconButton icon={<StarIcon />} onClick={() => addToFavorites(id)} aria-label="Add to favorites" />
                <IconButton icon={<DeleteIcon />} onClick={() => removeMovie(id)} aria-label="Delete movie" />
            </CardFooter>
        </Card>
    );
};


export default MovieCard;