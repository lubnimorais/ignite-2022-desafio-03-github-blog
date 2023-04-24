import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

import { ExternalLink } from '../../../../components/ExternalLink';
import { PostHeaderContainer } from './styles';
import { relativeDateFormatter } from '../../../../utils/formatter';

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

interface IPostHeaderProps {
  post: IPost;
}

const PostHeader = ({ post }: IPostHeaderProps) => {
  // const navigate = useNavigate();

  // const handleGoBack = useCallback(() => {
  //   navigate(-1); // volta uma página
  // }, [navigate]);

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          to="/"
          // onClick={handleGoBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          variant="iconLeft"
        />
        <ExternalLink to={post.html_url} target="_blank" text="Ver no Github" />
      </header>

      <h1>{post.title}</h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {post.user.login}
        </li>

        <li>
          <FontAwesomeIcon icon={faCalendar} />
          {relativeDateFormatter(post.created_at)}
        </li>

        <li>
          <FontAwesomeIcon icon={faComment} />
          {post.comments} comentários
        </li>
      </ul>
    </PostHeaderContainer>
  );
};

export { PostHeader };
