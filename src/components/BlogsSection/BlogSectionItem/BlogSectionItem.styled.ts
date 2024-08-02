import styled from 'styled-components';

export const BlogSectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Image = styled.div<{ $bgImage: string }>`
  height: 474px;
  width: 100%;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  @media (max-width: 768px) {
    background-position: left;
    height: 392px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
  }
`;

export const BlogSectionItemDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 14px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #414141;
    margin: 16px 0 12px;
    max-width: 85%;
  }
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
  color: #1a1a1a;

  svg {
    margin-top: -4px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #1a1a1a;
  }
`;
