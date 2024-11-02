import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { BsThreeDots } from 'react-icons/bs';
import Actions from "../components/Actions";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  const [cntliked, setCntliked] = useState(0);

  useEffect( () => {
    if(cntliked > 0) setCntliked(cntliked + 1);
  }, [cntliked])


  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src = "/zuck-avatar.png" size={'md'} name="Mark Zuckerburg"/>
          
          <Flex>

            <Text fontSize={"sm"} fontWeight={"bold"} >markzukerburg</Text>
            <Image src="/verified.png" w={4} h={4} ml={4}/>
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={'center'}>
          <Text fontSize={'sm'} color={'gray.light'}>1d</Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my={3}>Let&apos;s talk about Innominate</Text>

      <Box borderRadius={20} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
        <Image src={'/post1.png'} w={"full"}/>
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked}/>
      </Flex>

      <Flex gap={2} alignItems={"center"} >
        <Text color={'gray.light'} fontSize={'sm'}>238 replies</Text>
        <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
        <Text color={'gray.light'} fontSize={'sm'}>{200 + (liked?1:0)} Likes</Text>
        <div>
          {cntliked > 0 && <Text color={'gray.light'} fontSize={'sm'}>{cntliked} Likes</Text>}
        </div>
      </Flex>
      <Divider my={4}/>



      <Flex justifyContent={'space-between'}>
        <Flex gap={2} alignItems={'center'}>
          <Text fontSize={'2xl'}>👋</Text>
          <Text color={'gray.light'}>Get the app to like, reply, and post</Text>

        </Flex>
        <button style={{backgroundColor: '#3f3f3f', borderRadius: '20%', paddingLeft: '10px', paddingRight: '10px'} } >Get</button>
      </Flex>

      <Divider my={4} />
      <Comment comment='looks really good!' createdAt='2d' likes={100} username='Johndoe' useAvatar='https://bit.ly/dan-abramov'/>
      <Comment comment='Adobs!' createdAt='1mo' likes={250} username='Joe Pries' useAvatar='https://bit.ly/kent-c-dodds'/>
      <Comment comment='mad!' createdAt='17d' likes={498} username='Amada' useAvatar='https://bit.ly/sage-adebayo'/>


    </>
  )
}

export default PostPage