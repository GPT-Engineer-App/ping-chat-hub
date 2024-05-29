import React from "react";
import { Container, VStack, Text, Avatar } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Avatar size="2xl" name="User Name" src="https://bit.ly/broken-link" />
        <Text fontSize="2xl">User Name</Text>
        <Text fontSize="md">user@example.com</Text>
      </VStack>
    </Container>
  );
};

export default Profile;
