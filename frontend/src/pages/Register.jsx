import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { loginUser, registerUser } from "../modules/fetch";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword
    ) {
      toast({
        position: "top",
        title: "An error occurred.",
        description: "Please fill or correct all required field.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      await registerUser(name, email, password);
      toast({
        position: "top",
        title: "Registration Success",
        description: "You have successfully registered.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      const res = await loginUser(email, password);
      const { token } = res;
      localStorage.setItem("access_token", token);
      navigate("/");
    } catch (error) {
      toast({
        position: "top",
        title: "An error occurred.",
        description: "Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex h={"100vh"}>
      <Center>
        <Card w={500}>
          <CardHeader>
            <Heading as={"h2"}>User Registration</Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleShowConfirmPassword}
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {password !== confirmPassword ? (
                  <Text align={"left"} fontSize={"s"} color={"red"} mt={2}>
                    Password do not match.
                  </Text>
                ) : (
                  ""
                )}
              </FormControl>
              <Button colorScheme="blue" onClick={handleClick}>
                Submit
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </Flex>
  );
}

export default Register;
