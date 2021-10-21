import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((tab) => (
        <Category
          key={tab.name}
          activeClassName="active"
          exact={tab.name === 'all'}
          to={tab.name === 'all' ? '/' : `/${tab.name}`}
        >
          {tab.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

const CategoriesBlock = styled.div`
  display: flex;
  width: 768px;
  margin: 0 auto;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  padding-bottom: 0.25rem;
  color: inherit;
  font-size: 1.15rem;
  white-space: pre;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 700;
    border-bottom: 2px solid darkblue;
    color: darkblue;
    &:hover {
      color: purple;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

export default Categories;
