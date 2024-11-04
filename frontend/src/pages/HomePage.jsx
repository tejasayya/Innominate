/*
import { Link } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <div>
        
        <Link to={"/markzukerberg"}>
            <Flex w={"full"} justifyContent={"center"}>
                <Button mx={"auto"}>Visit Profile Page</Button>
            </Flex>
        </Link>

    </div>
  )
}

export default HomePage;


*/

//-------------------------------------------------

import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
// import SuggestedUsers from "../components/SuggestedUsers";

const HomePage = () => {
	const [posts, setPosts] = useRecoilState(postsAtom);
	const [loading, setLoading] = useState(true);
	const showToast = useShowToast();
	// const user = useRecoilValue(userAtom);
	
	useEffect(() => {
		const getFeedPosts = async () => {
			setLoading(true);
			setPosts([]);
			try {
				const res = await fetch("/api/posts/feed");
				
				//-
				// const res = await fetch("/api/posts/feed", {
				// 	headers: {
				// 	  "Content-Type": "application/json",
				// 	},
				// 	credentials: "include", // Include cookies
				//   });
			
				//   // Check if the response is OK
				//   if (!res.ok) {
				// 	const errorText = await res.text();
				// 	console.error("Error fetching feed:", res.status, res.statusText, errorText);
				// 	showToast("Error", "Failed to fetch feed", "error");
				// 	setPosts([]);
				// 	return;
				//   }




				const data = await res.json();
				console.log('data received: ', data);//

				if (data.error) {
					showToast("Error", data.error, "error");
					setPosts([]);
					return;
				}

				//--
				// if (Array.isArray(data)) {
				// 	setPosts(data);
				//   } else {
				// 	showToast("Error", "Unexpected response from server", "error");
				// 	setPosts([]);
				//   }

				console.log(data);
				setPosts(data);
			} catch (error) {
				showToast("Error", error.message, "error");
			} finally {
				setLoading(false);
			}
		};
		getFeedPosts();
	}, [showToast, setPosts]);

	return (
		<Flex gap='10' alignItems={"flex-start"}>
			<Box flex={70}>
				{!loading && posts.length === 0 && <h1>Follow some users to see the feed</h1>}

				{loading && (
					<Flex justify='center'>
						<Spinner size='xl' />
					</Flex>
				)}

				{posts.map((post) => (
					<Post key={post._id} post={post} postedBy={post.postedBy} />
				))}
			</Box>
			<Box
				flex={30}
				display={{
					base: "none",
					md: "block",
				}}
			>
				{/* <SuggestedUsers /> */}
			</Box>
		</Flex>
	);
};

export default HomePage;
