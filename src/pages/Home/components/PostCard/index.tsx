import { relativeDateFormatter } from '../../../../utils/formatter';
import { PostCardContainer } from './styles';

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

interface IPostCardProps {
  post: IPost;
}

const PostCard = ({ post }: IPostCardProps) => {
  const formatedDistanceToNowCreatedAt = relativeDateFormatter(post.created_at);

  return (
    <PostCardContainer to={`/post/${post.number}`}>
      <header>
        <strong>{post.title}</strong>

        <span>{formatedDistanceToNowCreatedAt}</span>
      </header>

      <p>{post.body}</p>
    </PostCardContainer>
  );
};

export { PostCard };
