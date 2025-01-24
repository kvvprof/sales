import axios from 'axios';
import { useState, useEffect } from 'react';

import { useUserStore } from '@/common/stores/user.store';

export const useAuth = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_SALES_GUARD_URL}/refresh`,
        );
        setUser(data);
        setIsAuth(true);
      } catch (error) {
        setIsAuth(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      setIsAuth(true);
      setIsLoading(false);
    } else {
      checkAuth();
    }
  }, []);

  return { isAuth, isLoading };
};
