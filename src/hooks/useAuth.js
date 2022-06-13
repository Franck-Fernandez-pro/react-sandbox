import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import authState from '../atom/authState';

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    console.log('🚀 ~ useAuth ~ auth', auth);
  }, [auth]);

  return { auth, setAuth };
};

export default useAuth;
