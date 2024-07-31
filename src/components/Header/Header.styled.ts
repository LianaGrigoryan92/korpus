import styled from 'styled-components';

export const Container = styled.header`
  background: transparent;
  padding: 32px 60px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  max-width: 1320px;
  width: 100%;
`;
