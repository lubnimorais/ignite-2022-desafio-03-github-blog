import { useCallback, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { PostHeader } from './components/PostHeader';

import { PostContainer } from './styles';
import { api } from '../../services/api';
import { PostContent } from './components/PostContent';

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

const PostPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<IPost>();

  const loadPost = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      );

      setPost(response.data);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadPost();
  }, [loadPost]);

  return (
    <PostContainer>
      {post && (
        <>
          <PostHeader post={post} />

          <PostContent content={post.body} />
        </>
      )}
    </PostContainer>
  );
};

export { PostPage };
