import axios from '../api/axios';
import useAuth from './useAuth';

export default function useRefreshToken() {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get('/refresh', { withCredentials: true });

    setAuth((prev) => {
      console.log('🚀 ~ refresh ~ prev', prev);
      console.log('🚀 ~ refresh ~ response.data', response.data);

      return { ...prev, accessToken: response.data.accessToken };
    });

    return response.data.accessToken;
  };

  return refresh;
}
