import styled from 'styled-components';
import { Icon } from '@iconify/react';

interface FigureProps {
  height: number;
}

export const Article = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  background-clip: border-box;
  border-radius: 0.4rem;
  box-shadow: 0 0.25rem 1.75rem ${({ theme }) => theme.colors.black};
  margin-right: 2rem;
  margin-bottom: 2rem;
  width: 45%;
  &:nth-child(even) {
    margin-right: 0;
  }
`;

export const Figure = styled.figure<FigureProps>`
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.grey};
  height: 600px;
  margin: 0;
  position: relative;
  border-radius: 0.4rem 0.4rem 0 0;
  overflow: hidden;
`;

export const CardBody = styled.div`
  padding: 1.75rem 1.75rem 1rem 1.75rem;
`;

export const PostHeader = styled.div``;

export const PostCategory = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange};
  &:before {
    content: '';
    display: inline-block;
    top: 50%;
    transform: translateY(-60%);
    left: 0;
    width: 0.75rem;
    height: 0.05rem;
    background: ${({ theme }) => theme.colors.orange};
    margin-right: 0.5rem;
  }
`;

export const PostTitle = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.titleColor};
  word-spacing: 0.1rem;
  letter-spacing: -0.01rem;
`;

export const PostContent = styled.div``;

export const Content = styled.p``;

export const CardFooter = styled.div`
  padding: 1.25rem 1.75rem 1.25rem;
  border-radius: 0 0 0.4rem 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const PostMeta = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.typography};
  margin-bottom: 0;
  display: flex;
`;

export const PostMetaLi = styled.div`
  display: inline-block;
`;

export const PostDate = styled.span``;

export const IconStyle = styled(Icon)`
  padding-right: 0.2rem;
  vertical-align: -0.3rem;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  font-size: 15px;
`;
