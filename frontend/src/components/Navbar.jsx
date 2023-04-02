import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      w={"100vw"}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="blue.600"
      color="white"
    >
      <Link to="/">
        <Flex align={"center"} mr={5} cursor={"pointer"}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            de-Book
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
