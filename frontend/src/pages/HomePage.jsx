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