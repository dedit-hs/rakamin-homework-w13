import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getBooks } from "../modules/fetch";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchedBooks = async () => {
      const books = await getBooks();
      setBooks(books);
    };
    fetchedBooks();
  }, []);
  return (
    <>
      <Box w={"100vw"} p={8}>
        <Heading>Dashboard</Heading>
        <Divider pt={8} />
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <TableCaption>List Books at de-Book</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Author</Th>
                <Th>Publisher</Th>
                <Th isNumeric>Year</Th>
                <Th>Image</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {books?.books?.map((book, index) => {
                return (
                  <Tr key={index}>
                    <Td>{book.title}</Td>
                    <Td>{book.author}</Td>
                    <Td>{book.publisher}</Td>
                    <Td isNumeric>{book.year}</Td>
                    <Td>
                      <Image
                        w={50}
                        h={50}
                        src={`http://localhost:8000/${book.image}`}
                        alt={book.title}
                      />
                    </Td>
                    <Td>
                      <Button size={"xs"} mr={2} colorScheme="teal">
                        Edit
                      </Button>
                      <Button size={"xs"} colorScheme="red">
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Title</Th>
                <Th>Author</Th>
                <Th>Publisher</Th>
                <Th isNumeric>Year</Th>
                <Th>Image</Th>
                <Th>Action</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Home;
