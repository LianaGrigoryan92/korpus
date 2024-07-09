import styled from 'styled-components';

export const BlogsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  border-bottom: 1px solid #e4e4e4;
`;

export const BlogsTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  line-height: 64px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const Blogs = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 16px;
  max-width: 1320px;
`;
