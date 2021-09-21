import React from 'react';
import { Card } from 'Components';
import { MainContainer } from './style';
import type { MainProps } from 'types/articles';

const Main: React.FunctionComponent<MainProps> = ({ articles }) => (
  <MainContainer>
    {articles.map((article) => (
      <Card key={article.id} {...{ article }} />
    ))}
  </MainContainer>
);

export default Main;
