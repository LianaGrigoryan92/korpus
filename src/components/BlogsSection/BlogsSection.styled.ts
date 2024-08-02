import styled from 'styled-components';

export const BlogsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  border-bottom: 1px solid #e4e4e4;

  @media (max-width: 768px) {
    padding-bottom: 16px;
  }
`;

export const BlogsTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  line-height: 64px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.palette.common.black};

  @media (max-width: 768px) {
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    color: #1a1a1a;
    margin-bottom: 16px;
  }
`;

export const Blogs = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 16px;
  max-width: 1320px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`;
