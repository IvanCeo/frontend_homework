import { Heading, IconButton, Button, Box, Flex, Stack, Center, Card, CardHeader, CardBody, CardFooter, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { DragHandleIcon, StarIcon, PlusSquareIcon } from '@chakra-ui/icons'


const MovieCard = (
    {title,
    genre,
    duration,
    image}
) => {
    return (
        <Card variant="filled" size="sm">
            <CardBody>
                <Image 
                src={image}
                borderRadius='lg' />

                <Stack mt='6' />
                <Heading size='md'>{title}</Heading>
                <Flex justifyContent="space-between" pt={3}>
                    <Text >{genre}</Text>
                    <Text color='blue.600'>
                        {duration}
                    </Text>
                </Flex>
            </CardBody>

            

            <CardFooter>
                <IconButton icon={<StarIcon />} />
            </CardFooter>
        </Card>
    );
};


export default MovieCard;