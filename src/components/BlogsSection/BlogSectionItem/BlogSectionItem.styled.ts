import styled from 'styled-components';

export const BlogSectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
`;

export const BlogSectionItemDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin: 14px 0;
`;

export const LearnMore = styled.button`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-decoration: none;
    background: transparent;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
    svg {
        margin-top: -4px;
    }
`;
