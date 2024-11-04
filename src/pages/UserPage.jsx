import UserPost from '../components/UserPost';
import UserHeader from './../components/UserHeader';
const UserPage = () => {
  return (
    <>
        
        <UserHeader/>

        <UserPost likes={1200} replies={654} postImg="/post1.png" postTitle="Let's talk about Innominate" />
        
        <UserPost likes={451} replies={12} postImg="/post2.jpeg" postTitle="My friend Sam" />
        
        <UserPost likes={126} replies={96} postImg="/post3.png" postTitle="." />
        
        <UserPost likes={52} replies={45} postTitle="VVV" />



    </>
  );
};

export default UserPage;