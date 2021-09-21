import React from 'react';
import type { Article as ArticleType } from 'types/articles';
import Image from 'next/image';
import {
  Article,
  CardBody,
  CardFooter,
  Content,
  Figure,
  IconStyle,
  PostCategory,
  PostContent,
  PostDate,
  PostHeader,
  PostMeta,
  PostMetaLi,
  PostTitle,
} from './style';
import { getStrapiMedia } from 'lib/media';

interface CardProps {
  article: ArticleType;
}

const Card: React.FunctionComponent<CardProps> = ({ article }) => {
  const imageUrl = getStrapiMedia(article.image);

  return (
    <Article>
      <Figure height={article.image.height}>
        <Image src={imageUrl} alt={article.image.name} layout="fill" />
      </Figure>
      <CardBody>
        <PostHeader>
          <PostCategory>{article.category.name}</PostCategory>
          <PostTitle>{article.title}</PostTitle>
        </PostHeader>
        <PostContent>
          <Content>{article.description}</Content>
        </PostContent>
      </CardBody>
      <CardFooter>
        <PostMeta>
          <PostMetaLi>
            <IconStyle icon="uil:calendar-alt" />
            <PostDate>{new Date(article.published_at).toDateString()}</PostDate>
          </PostMetaLi>
        </PostMeta>
      </CardFooter>
    </Article>
  );
};

export default Card;
