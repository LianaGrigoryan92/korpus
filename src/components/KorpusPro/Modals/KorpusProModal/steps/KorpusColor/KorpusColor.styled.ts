import styled from 'styled-components';

export const KorpusColorWrapper = styled.div``;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #1a1a1a;
  margin-bottom: 16px;
`;

export const Search = styled.input`
  width: 100%;
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  padding: 10px 0;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #747474;
  }

  &:focus {
    border-bottom: 1px solid black;
  }
`;

export const ColorsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const ColorItem = styled.div`
  border-right: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  padding: 12px;
  cursor: pointer;
`;

export const Color = styled.div<{ $color: string }>`
  max-width: 236px;
  width: 100%;
  height: 236px;
  background-color: ${({ $color }) => $color};
    @media (max-width: 768px) {
        max-width: 164px;
        max-height: 164px;
        width: 100%;
        height: 236px;
    }
`;

export const ColorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ColorInfoWrapper = styled.div`
  margin-top: 8px;
  gap: 6px;
  display: flex;
  flex-direction: column;
`;

export const ColorHex = styled.span`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: #414141;
`;

export const ColorName = styled.span`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #1a1a1a;
  margin-bottom: 6px;
`;
