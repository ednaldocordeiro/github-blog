import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { api } from "../services/axios";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

interface PostsContext {
  user: User;
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContext)


export function PostsProvider({children}: PostsProviderProps) {

  const [user, setUser] = useState({} as User)

  const fetchUser = useCallback(async () =>{
    const response = await api.get('/users/ednaldocordeiro');
    setUser(response.data)
  }, []);

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <PostsContext.Provider value={{
      user
    }}>
      {children}
    </PostsContext.Provider>
  )
}
