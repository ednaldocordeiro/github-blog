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

interface Post {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

interface PostsContext {
  user: User;
  posts: Post[];
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContext)


export function PostsProvider({children}: PostsProviderProps) {

  const [user, setUser] = useState({} as User)
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchUser = useCallback(async () =>{
    const response = await api.get('/users/ednaldocordeiro');
    setUser(response.data)
  }, []);

  const fetchPosts = useCallback(async () => {
    const response = await api.get('/search/issues?q=%20repo:ednaldocordeiro/github-blog');
    setPosts(response.data.items);
  }, []);

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, [])

  return (
    <PostsContext.Provider value={{
      user,
      posts
    }}>
      {children}
    </PostsContext.Provider>
  )
}
