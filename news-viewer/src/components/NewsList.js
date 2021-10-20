import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f0ddb10c94cc44fbadbdb1b4042cee79`,
        );
        setArticles(res.data.articles);
        console.log(res.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles &&
        articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  width: 768px;
  margin: 0 auto;
  padding: 3rem 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export default NewsList;
