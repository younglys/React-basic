import styled, { css } from 'styled-components';

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

const Categories = ({ category, onSelect }) => {
  return (
    <CategoriesBlock>
      {categories.map((tab) => (
        <Category
          key={tab.name}
          active={category === tab.name}
          onClick={() => onSelect(tab.name)}
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

const Category = styled.div`
  padding-bottom: 0.25rem;
  font-size: 1.15rem;
  white-space: pre;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 700;
      border-bottom: 2px solid darkblue;
      color: darkblue;
      &:hover {
        color: purple;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

export default Categories;
