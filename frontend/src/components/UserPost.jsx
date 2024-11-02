import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import { Link } from "react-router-dom"
import Actions from "./Actions"
import { useState } from "react"


const UserPost = ({postImg, postTitle, likes, replies}) => {
    const [liked, setLiked] = useState(false);
  return (
    <Link to={"post/1"}>
        <Flex gap={3} mb={4} py={5}>
            <Flex flexDirection={"column"} alignItems={"center"}>
                <Avatar size={"md"} name="Mark Zukerburg" src="/zuck-avatar.png"/>
                <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
                <Box position={"relative"} w={"full"}>
                    <Avatar
                        size={"xs"}
                        name="Joe Pries"
                        src="https://tinyurl.com/4pcadyt9"
                        position={"absolute"}
                        top={"0px"}
                        left={"15px"}
                        padding={"2px"}
                    />
                    <Avatar
                        size={"xs"}
                        name="Joe Pries"
                        src="https://assets.editorial.aetnd.com/uploads/2009/11/joseph-stalin-gettyimages-464426375.jpg"
                        position={"absolute"}
                        bottom={"0px"}
                        right={"-5px"}
                        padding={"2px"}
                    />
                    <Avatar
                        size={"xs"}
                        name="Joe Pries"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4Gpvfn_K8XrzpcZz2idIlguZDoVzCIZd3g&s"
                        position={"absolute"}
                        bottom={"0px"}
                        left={"4px"}
                        padding={"2px"}
                    />
                </Box>
            </Flex>
            <Flex flex={1} flexDirection={"column"} gap={2}>
                <Flex justifyContent={"space-between"} w={"full"}>
                    <Flex w={"full"} alignItems={"center"}>
                        <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerburg</Text>
                        <Image src="/verified.png" w={4} h={4} ml={1}/>
                    </Flex>
                    <Flex gap={4} alignItems={"center"}>
                        <Text fontStyle={"sm"} color={"gray.light"}>1d</Text>
                        <BsThreeDots/>
                    </Flex>
                </Flex>

                <Text fontSize={"sm"}>{postTitle}</Text>
                {postImg && 
                    <Box borderRadius={20} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
                        <Image src={postImg} w={"full"}/>
                    </Box>
                }

                <Flex gap={3} my={1}>

                    <Actions liked={liked} setLiked={setLiked}/>

                </Flex>
                
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"} fontSize={"sm"}>{replies} replies</Text>
                    <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
                    <Text color={"gray.light"} fontSize={"sm"}>{likes + (liked?1:0)} likes</Text>


                </Flex>

            </Flex>
        </Flex>
    </Link>
  )
}

export default UserPost