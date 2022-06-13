import { useEffect, useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/users', {
          signal: controller.signal,
        });

        console.log('🚀 ~ getUsers ~ response', response.data);
        isMounted && setUsers(response?.data);
      } catch (error) {
        console.log('error ->', error);
        error?.message !== 'canceled' &&
          navigate('/login', { state: { from: location, replace: true } });
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Users list</h2>
      {users?.length ? (
        <ul>
          {users.map((user, idx) => (
            <li key={idx}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users</p>
      )}
    </article>
  );
}
