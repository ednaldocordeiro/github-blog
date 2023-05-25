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
  number: number;
  comments: number;
  user: {
    login: string;
  }
  html_url: string;
}

interface PostsContext {
  user: User;
  posts: Post[];
  post: Post;
  fetchPosts: (searchTeaxt?: string) => void;
  fetchPost: (number: number) => void;
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContext)


export function PostsProvider({children}: PostsProviderProps) {

  const [user, setUser] = useState({} as User)
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState({} as Post);

  const fetchUser = useCallback(async () =>{
    const response = await api.get('/users/ednaldocordeiro');
    setUser(response.data)
  }, []);

  const fetchPosts = useCallback(async (searchText: string = '') => {
    const response = await api.get(`/search/issues?q=${searchText}%20repo:ednaldocordeiro/github-blog`);
    setPosts(response.data.items);
  }, []);

  const fetchPost = useCallback(async (number: number) => {
    const response = await api.get(`/repos/ednaldocordeiro/github-blog/issues/${number}`);
    setPost(response.data)
  }, []);

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, [])

  return (
    <PostsContext.Provider value={{
      user,
      posts,
      fetchPosts,
      fetchPost,
      post
    }}>
      {children}
    </PostsContext.Provider>
  )
}
