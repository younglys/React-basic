import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsList = () => {
  const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://naver.com',
    urlToImage: 'https://via.placeholder.com/160',
  };

  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  width: 768px;
  margin-top: 2rem;
  padding-bottom: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export default NewsList;
