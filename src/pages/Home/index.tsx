import { useCallback, useEffect, useState } from 'react';

import { api } from '../../services/api';

import { PostCard } from './components/PostCard';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { Loading } from '../../components/Loading';

import { HomeContainer, PostsListContainer } from './styles';

interface IUser {
  login: string;
}

interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: IUser;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  const loadPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      );

      setPosts(response.data.items);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <HomeContainer>
      <Profile />

      <SearchInput postsLength={posts.length} loadPosts={loadPosts} />

      {isLoading ? (
        <Loading />
      ) : (
        <PostsListContainer>
          {posts.map(post => (
            <PostCard key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </HomeContainer>
  );
};

export { Home };
