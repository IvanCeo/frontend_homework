import { Button, Input, FormControl, FormLabel, VStack } from "@chakra-ui/react";

const AddForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Логика отправки формы сюда...
  };

  return (
    <VStack spacing={4} as="form" onSubmit={handleSubmit}>
      <FormControl id="title">
        <FormLabel>Название фильма:</FormLabel>
        <Input type="text" name="title" placeholder="Введите название" />
      </FormControl>
      
      <FormControl id="posterUrl">
        <FormLabel>Ссылка на постер:</FormLabel>
        <Input type="url" name="posterUrl" placeholder="URL постера" />
      </FormControl>
      
      <Button colorScheme="teal" size="lg" type="submit">
        Добавить фильм
      </Button>
    </VStack>
  );
};

export default AddForm;