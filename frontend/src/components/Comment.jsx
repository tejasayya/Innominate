/*
import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";


const Comment = ({comment, createdAt, likes, username, useAvatar}) => {
    const [liked, setLiked] = useState(false);

  return (
    <>
        <Flex gap={4} py={2} my={2} w={"full"}>
            <Avatar src={useAvatar} size={'sm'} />
            <Flex gap={1} w={'full'} flexDirection={'column'} >
                <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize={'sm'} fontWeight={'bold'}>{username}</Text>
                    <Flex gap={2} alignItems={'center'}>
                        <Text fontSize={'sm'} color={'gray.light'}>{createdAt}</Text>
                        <BsThreeDots />
                    </Flex>
                </Flex>
                <Text>{comment}</Text>
                <Actions liked={liked} setLiked={setLiked}/>
                <Text fontSize={'sm'} color={'gray.light'}> 
                    {likes + (liked?1:0)} Likes    
                </Text>
                
            </Flex>


        </Flex>
        
        

    </>
  )
}

export default Comment

*/

import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";

const Comment = ({ reply, lastReply }) => {
	return (
		<>
			<Flex gap={4} py={2} my={2} w={"full"}>
				<Avatar src={reply.userProfilePic} size={"sm"} />
				<Flex gap={1} w={"full"} flexDirection={"column"}>
					<Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
						<Text fontSize='sm' fontWeight='bold'>
							{reply.username}
						</Text>
					</Flex>
					<Text>{reply.text}</Text>
				</Flex>
			</Flex>
			{!lastReply ? <Divider /> : null}
		</>
	);
};

export default Comment;