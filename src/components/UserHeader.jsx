import { Avatar, Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, useToast, VStack } from "@chakra-ui/react";
import { CgMoreO } from "react-icons/cg";
import { FaGhost } from "react-icons/fa6";

const UserHeader = () => {
  const toast = useToast();
  const copyURL = () => {
    navigator.clipboard.writeText(window.location.href).then(()=>{
      console.log(window)
      console.log("copied to clipboard");
      toast({
        title: "Link Copied",
        description: "copied to clipboard",
        type: "info",
        duration: 2000,
        isClosable: true
      });
    });
  };
  return (
    <VStack gap={4} alignItems={"start"} >
      <Flex justifyContent={"space-between"} w={"full"}>

        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Mark Zuckerburg
          </Text>

          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}> @markzukerburg </Text>
            <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"} >
              Innominate.net
            </Text>  
          </Flex>
        
        </Box>

        <Box>
          <Avatar
            name = "Mark Zuckerburg"
            src = "/zuck-avatar.png"
            size = {{
              base: "md",
              md: "xl",
            }}
          />
        </Box>


      </Flex>

      <Text >Co-Founder, executive chairman and CEO of Meta Platforms.</Text>

      <Flex w={"full"} justifyContent={"space-between"}>

        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2K followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}> </Box>
          <Link color={"gray.light"}> Innominate.com </Link>
        </Flex>

        <Flex gap={3}>
          <Box className="icon-container">
            <FaGhost size={24} cursor={"pointer"}/>
          </Box>

          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"}/>
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy Link</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>

        </Flex>

      </Flex>

      <Flex w={"full"}>
        <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb={3} cursor={"Pointer"}>
          <Text fontWeight={"bold"}>Threads</Text>
        </Flex>
        <Flex flex={1} borderBottom={"1.5px solid gray"} justifyContent={"center"} color={"gray.light"} pb={3} cursor={"Pointer"}>
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>

    </VStack>
  );
};

export default UserHeader;
