import React from "react";
import { Box, Heading, Avatar, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { FaUserPlus, FaComments, FaEllipsisH } from "react-icons/fa";

const AccountCard = ({ name, bio, avatarSrc }) => (
  <Box borderWidth={1} borderRadius="lg" p={4} mb={4}>
    <Flex>
      <Avatar size="lg" name={name} src={avatarSrc} mr={4} />
      <Box>
        <Heading size="md">{name}</Heading>
        <Text mt={2}>{bio}</Text>
      </Box>
      <Spacer />
      <Button leftIcon={<FaUserPlus />} colorScheme="blue" variant="solid" size="sm">
        Add Friend
      </Button>
    </Flex>
    <Flex mt={4}>
      <Button leftIcon={<FaComments />} variant="ghost" size="sm" mr={2}>
        Message
      </Button>
      <Button leftIcon={<FaEllipsisH />} variant="ghost" size="sm">
        More
      </Button>
    </Flex>
  </Box>
);

const Index = () => {
  return (
    <Box maxW="lg" mx="auto" mt={8} p={4}>
      <Heading mb={8}>Facebook Accounts</Heading>

      <AccountCard name="John Smith" bio="Web developer, coffee lover, travel enthusiast" avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTEyOTY3MDl8MA&ixlib=rb-4.0.3&q=80&w=1080" />

      <AccountCard name="Emily Johnson" bio="Graphic designer, yoga instructor, foodie" avatarSrc="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTI5NjcwOXww&ixlib=rb-4.0.3&q=80&w=1080" />

      <AccountCard name="Michael Lee" bio="Sales manager, guitar player, dog owner" avatarSrc="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzExMjk2NzEwfDA&ixlib=rb-4.0.3&q=80&w=1080" />
    </Box>
  );
};

export default Index;
