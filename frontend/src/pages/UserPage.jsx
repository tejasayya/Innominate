
import { useEffect, useState } from 'react';
import UserPost from '../components/UserPost';
import UserHeader from './../components/UserHeader';
import { useParams } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';


const UserPage = () => {
    const [user, setUser] = useState(null);
    const { username } = useParams();
    const showToast = useShowToast();

    useEffect(() => {
      const getUser = async() => {
        try {
          const res = await fetch(`/api/users/profile/${username}`);
          const data = await res.json();
          if(data.error){
            showToast("Error", data.error, "error");
            return;
          };
          setUser(data.user);
        } catch (err) {
          showToast("Error", err, "error");
          
        }
      };

      getUser();

    }, [username]);



  

  return (
    <>
        
        <UserHeader user={user}/>

        <UserPost likes={1200} replies={654} postImg="/post1.png" postTitle="Let's talk about Innominate" />
        
        <UserPost likes={451} replies={12} postImg="/post2.jpeg" postTitle="My friend Sam" />
        
        <UserPost likes={126} replies={96} postImg="/post3.png" postTitle="." />
        
        <UserPost likes={52} replies={45} postTitle="VVV" />



    </>
  );
};

export default UserPage;


/*


import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const UserPage = () => {
	const { user, loading } = useGetUserProfile();
	const { username } = useParams();
	const showToast = useShowToast();
	const [posts, setPosts] = useRecoilState(postsAtom);
	const [fetchingPosts, setFetchingPosts] = useState(true);

	useEffect(() => {
		const getPosts = async () => {
			if (!user) return;
			setFetchingPosts(true);
			try {
				const res = await fetch(`/api/posts/user/${username}`);
				const data = await res.json();
				console.log(data);
				setPosts(data);
			} catch (error) {
				showToast("Error", error.message, "error");
				setPosts([]);
			} finally {
				setFetchingPosts(false);
			}
		};

		getPosts();
	}, [username, showToast, setPosts, user]);

	if (!user && loading) {
		return (
			<Flex justifyContent={"center"}>
				<Spinner size={"xl"} />
			</Flex>
		);
	}

	if (!user && !loading) return <h1>User not found</h1>;

	return (
		<>
			<UserHeader user={user} />

			{!fetchingPosts && posts.length === 0 && <h1>User has not posts.</h1>}
			{fetchingPosts && (
				<Flex justifyContent={"center"} my={12}>
					<Spinner size={"xl"} />
				</Flex>
			)}

			{posts.map((post) => (
				<Post key={post._id} post={post} postedBy={post.postedBy} />
			))}
		</>
	);
};

export default UserPage;

*/