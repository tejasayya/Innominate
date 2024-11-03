/*

import { Avatar, Box, Button, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, useToast, VStack } from "@chakra-ui/react";
import { CgMoreO } from "react-icons/cg";
import { FaGhost } from "react-icons/fa6";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import useShowToast from "../hooks/useShowToast";

const UserHeader = ({user}) => {
  const toast = useToast();
  const currentUser = useRecoilValue(userAtom);
  const [following, setFollowing] = useState(user.followers.includes(currentUser._id));
  const showToast = useShowToast();
  const [updating, setUpdating] = useState(false);



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

  const handleFollowUnfollow = async () => {
    if(!currentUser) {
      showToast("Error", "Please login to follow", "error");
      return;
    }
    if(updating) return;
    setUpdating(true);
    try {
      console.log('fetch paina vachindi')
      const res = await fetch(`/api/users/follow/${user._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('fetch kinda vastundhi')
      const data = await res.json();
      if(data.error){
        showToast("Error", data.error, "error");
        return;
      }

      if(following){
        showToast("Unfollowed", `Unfollowed ${user.name}`, "info");
        user.followers.pop();
      } else {
        showToast("Followed", `Followed ${user.name}`, "success");
        user.followers.push(currentUser._id);
      }
      setFollowing(!following);

      console.log(data);
      console.log('data raayyi raa lucha')
      
    } catch (err) {
      showToast("Error", err, "error");
      
    } finally {
      setUpdating(false);
    }
  };

  return (
    <VStack gap={4} alignItems={"start"} >
      <Flex justifyContent={"space-between"} w={"full"}>

        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {user.name}
          </Text>

          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}> {user.username} </Text>
            <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"} >
              Innominate.net
            </Text>  
          </Flex>
        
        </Box>

        <Box>
          {user.profilePic && (<Avatar
            name = {user.name}
            src = {user.profilePic}
            size = {{
              base: "md",
              md: "xl",
            }}
          />)}
          {!user.profilePic && (<Avatar
            name = {user.name}
            src = "https://bit.ly/broken-link"
            size = {{
              base: "md",
              md: "xl",
            }}
          />)}
        </Box>


      </Flex>

      <Text >{user.bio}</Text>

      {currentUser._id === user._id && (
        <Link as={RouterLink} to="/update">
          <Button size={"sm"}>Update Profile</Button>
        </Link>
      )}

      {currentUser._id !== user._id && <Button size={"sm"} onClick={handleFollowUnfollow} isLoading={updating}>
        {following ? "Unfollow" : "Follow"}
        </Button>}

      <Flex w={"full"} justifyContent={"space-between"}>

        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>{user.followers.length} followers</Text>
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
          <Text fontWeight={"bold"}>Innominate</Text>
        </Flex>
        <Flex flex={1} borderBottom={"1.5px solid gray"} justifyContent={"center"} color={"gray.light"} pb={3} cursor={"Pointer"}>
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>

    </VStack>
  );
};

export default UserHeader;

*/

//------------------------


import { Avatar, Box, Button, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack,
  useToast
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { CgMoreO } from 'react-icons/cg';
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';
import useFollowUnfollow from '../hooks/useFollowUnfollow';
import { FaGhost } from 'react-icons/fa6';

const UserHeader = ({ user }) => {
	const toast = useToast();
	const currentUser = useRecoilValue(userAtom); // logged in user
	const { handleFollowUnfollow, following, updating } = useFollowUnfollow(user);

	const copyURL = () => {
		const currentURL = window.location.href;
		navigator.clipboard.writeText(currentURL).then(() => {
			toast({
				title: "Success.",
				status: "success",
				description: "Profile link copied.",
				duration: 3000,
				isClosable: true,
			});
		});
	};

	return (
		<VStack gap={4} alignItems={"start"}>
			<Flex justifyContent={"space-between"} w={"full"}>
				<Box>
					<Text fontSize={"2xl"} fontWeight={"bold"}>
						{user.name}
					</Text>
					<Flex gap={2} alignItems={"center"}>
						<Text fontSize={"sm"}>{user.username}</Text>
						<Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
							Innominate.net
						</Text>
					</Flex>
				</Box>
				<Box>
					{user.profilePic && (
						<Avatar
							name={user.name}
							src={user.profilePic}
							size={{
								base: "md",
								md: "xl",
							}}
						/>
					)}
					{!user.profilePic && (
						<Avatar
							name={user.name}
							src='https://bit.ly/broken-link'
							size={{
								base: "md",
								md: "xl",
							}}
						/>
					)}
				</Box>
			</Flex>

			<Text>{user.bio}</Text>

			{currentUser?._id === user._id && (
				<Link as={RouterLink} to='/update'>
					<Button size={"sm"}>Update Profile</Button>
				</Link>
			)}
			{currentUser?._id !== user._id && (
				<Button size={"sm"} onClick={handleFollowUnfollow} isLoading={updating}>
					{following ? "Unfollow" : "Follow"}
				</Button>
			)}
			<Flex w={"full"} justifyContent={"space-between"}>
				<Flex gap={2} alignItems={"center"}>
					<Text color={"gray.light"}>{user.followers.length} followers</Text>
					<Box w='1' h='1' bg={"gray.light"} borderRadius={"full"}></Box>
					<Link color={"gray.light"}>Innominate.com</Link>
				</Flex>
				<Flex>
					<Box className='icon-container'>
						<FaGhost size={24} cursor={"pointer"} />
					</Box>
					<Box className='icon-container'>
						<Menu>
							<MenuButton>
								<CgMoreO size={24} cursor={"pointer"} />
							</MenuButton>
							<Portal>
								<MenuList bg={"gray.dark"}>
									<MenuItem bg={"gray.dark"} onClick={copyURL}>
										Copy link
									</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
					</Box>
				</Flex>
			</Flex>

			<Flex w={"full"}>
				<Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb='3' cursor={"pointer"}>
					<Text fontWeight={"bold"}> Posts </Text>
				</Flex>
				<Flex
					flex={1}
					borderBottom={"1px solid gray"}
					justifyContent={"center"}
					color={"gray.light"}
					pb='3'
					cursor={"pointer"}
				>
					<Text fontWeight={"bold"}> Replies</Text>
				</Flex>
			</Flex>
		</VStack>
	);
};

export default UserHeader;

