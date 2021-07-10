import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 900;
  padding: 4.2rem 0;

  line-height: 4.2rem;
  color: #3d3ada;
  margin-left: 1rem;
`;

const Logo = styled.img`
  width: 4.6rem;
  height: 4.6rem;
`;

export { Container, Title, Logo };
