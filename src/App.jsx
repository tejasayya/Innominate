import { Container } from '@chakra-ui/react';
import { Route ,Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import Header from './components/Header';
import Anonymous from './pages/Anonymous';
import PostPage from './pages/Postpage';


function App() {
  return (
    <Container maxW="620px">
      <Header/>

        <Routes>
          <Route path="/:username" element={<UserPage /> }/>
          <Route path="/:username/post/:pid" element={<PostPage /> }/>
          <Route path="/anonymous" element={<Anonymous /> }/>
          
        </Routes>
    </Container>
  );
}

export default App
