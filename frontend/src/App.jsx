/*

import { Container } from '@chakra-ui/react';
import { Navigate, Route ,Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import Header from './components/Header';
import Anonymous from './pages/Anonymous';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import userAtom from './atoms/userAtom';
import { useRecoilValue } from 'recoil';
import LogoutButton from './components/LogoutButton';
import UpdateProfilePage from './pages/UpdateProfilePage';
import CreatePost from './components/CreatePost';


function App() {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <Container maxW="620px">
      <Header/>

        <Routes>
          <Route path='/' element={user? <HomePage /> : <Navigate to="/auth"/>}/>
          <Route path='/auth' element={ !user ? <AuthPage/> : <Navigate to="/"/>}/>
          <Route path='/update' element={ user ? <UpdateProfilePage/> : <Navigate to="/auth"/>}/>

          <Route path="/:username" element={<UserPage /> }/>
          <Route path="/:username/post/:pid" element={<PostPage /> }/>
          <Route path="/anonymous" element={<Anonymous /> }/>
          
        </Routes>
        {user && <LogoutButton/>}
        {user && <CreatePost/>}

    </Container>
  );
}

export default App

*/


//-------

import { Box, Container } from '@chakra-ui/react';
import { Navigate, Route ,Routes, useLocation } from 'react-router-dom';
import UserPage from './pages/UserPage';
import Header from './components/Header';
import Anonymous from './pages/Anonymous';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import userAtom from './atoms/userAtom';
import { useRecoilValue } from 'recoil';
import UpdateProfilePage from './pages/UpdateProfilePage';
import CreatePost from './components/CreatePost';
import ChatPage from './pages/ChatPage';
import { SettingsPage } from './pages/SettingsPage';


function App() {
	const user = useRecoilValue(userAtom);
	const { pathname } = useLocation();
	return (
		<Box position={"relative"} w='full'>
			<Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}>
				<Header />
				<Routes>
					<Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} />
					<Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} />
					<Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />

					<Route
						path='/:username'
						element={
							user ? (
								<>
									<UserPage />
									<CreatePost />
								</>
							) : (
								<UserPage />
							)
						}
					/>
					<Route path='/:username/post/:pid' element={<PostPage />} />
          <Route path="/anonymous" element={<Anonymous /> }/>
					<Route path='/chat' element={user ? <ChatPage /> : <Navigate to={"/auth"} />} />
					<Route path='/settings' element={user ? <SettingsPage /> : <Navigate to={"/auth"} />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default App;