import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 84.2rem;
  height: 100%;
  max-height: 80rem;
  margin: 9rem auto;
  background: #ffffff;
  border: 4px solid #3d3ada;
  box-sizing: border-box;
  box-shadow: 0px 10px 60px rgba(61, 58, 218, 0.15);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8.5rem 18.8rem;

  p {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.2rem;
    margin-bottom: 4rem;
    text-align: center;
  }

  label {
    display: inline-block;
    width: 18.6rem;
    height: 6.1rem;
    border: none;
    border-radius: 10px;
    background-color: #3d3ada;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 2.4rem;

    color: #ffffff;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 2.1rem;
    text-align: center;
    padding-top: 1.6rem;
    cursor: pointer;
  }

  span {
    color: #000000;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.1rem;
    text-align: center;
  }

  .loading-icon {
    animation: rotation 2s infinite linear;
    transform-origin: 50% 50%;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }

  .content-footer-text {
    font-size: 1.4rem;
    color: #747474;
    margin-top: 2.4rem;
  }

  .content-footer-loading-text {
    display: flex;
    justify-content: space-around;

    font-size: 1.4rem;
    margin-top: 2.4rem;

    div {
      margin-left: 0.5rem;
      text-decoration: underline;
      color: blue;
      cursor: pointer;
    }
  }
`;
