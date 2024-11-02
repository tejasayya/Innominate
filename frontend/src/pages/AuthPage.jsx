
import { useRecoilValue } from 'recoil';
import LoginCard from './LoginCard';
import SignupCard from './SignupCard';
import authScreenAtom from '../atoms/authAtom';

const AuthPage = () => {
    const authScreenState = useRecoilValue(authScreenAtom);
    console.log(authScreenState);
  return (
    <div>
        {authScreenState === 'login' ? <LoginCard/> : <SignupCard/>}
    </div>
  )
}

export default AuthPage