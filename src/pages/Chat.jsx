import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Box>
          {messages.map((msg, index) => (
            <Text key={index}>{msg}</Text>
          ))}
        </Box>
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" />
        <Button onClick={sendMessage}>Send</Button>
      </VStack>
    </Box>
  );
}

export default Chat;
