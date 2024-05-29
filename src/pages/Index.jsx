import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, HStack, Avatar, IconButton, Image, useToast } from "@chakra-ui/react";
import { FaRocket, FaUserPlus, FaQrcode, FaLink, FaFileUpload } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otp, setOtp] = useState("");
  const [mobile, setMobile] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    // Simulate OTP verification
    if (otp === "1234") {
      setIsLoggedIn(true);
      toast({
        title: "Logged in successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Invalid OTP.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSendOtp = () => {
    // Simulate sending OTP
    toast({
      title: "OTP sent to your mobile.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="https://images.unsplash.com/photo-1689788433147-30a283dee779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGF0JTIwbG9nb3xlbnwwfHx8fDE3MTY5Nzg1OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Ping Chat Logo" boxSize="100px" />
        <Text fontSize="2xl">Ping Chat</Text>
        {!isLoggedIn ? (
          <>
            <Input placeholder="Enter Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <Button onClick={handleSendOtp}>Send OTP</Button>
            <Input placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <Button onClick={handleLogin}>Login</Button>
          </>
        ) : (
          <>
            <HStack spacing={4}>
              <Button leftIcon={<FaRocket />}>Global Chat</Button>
              <Button leftIcon={<FaRocket />}>Create Community</Button>
            </HStack>
            <HStack spacing={4}>
              <IconButton aria-label="Add Friend" icon={<FaUserPlus />} size="lg" />
              <IconButton aria-label="QR Code" icon={<FaQrcode />} size="lg" />
              <IconButton aria-label="Invitation Link" icon={<FaLink />} size="lg" />
              <IconButton aria-label="Upload File" icon={<FaFileUpload />} size="lg" />
            </HStack>
            <Box w="100%" p={4} borderWidth={1} borderRadius="lg">
              <Text>Global Chat Area</Text>
              {/* Chat messages will go here */}
            </Box>
            <Box w="100%" p={4} borderWidth={1} borderRadius="lg">
              <Text>Private Communities</Text>
              {/* Community messages will go here */}
            </Box>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
