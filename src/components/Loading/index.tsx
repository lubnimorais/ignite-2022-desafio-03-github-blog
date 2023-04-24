import { LoadingContainer } from './styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </LoadingContainer>
  );
};

export { Loading };
