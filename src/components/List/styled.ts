import styled from 'styled-components';

export const Table = styled.table`
  border-radius: 10px;
  border: 1px solid #d3d8dd;
  overflow-y: scroll;
  width: 76.2rem;
  text-align: left;
  font-size: 1.4rem;
  box-shadow: inset 0px -1px 0px #d3d8dd;
  margin-right: 10px;

  strong {
    color: #12c223;
  }

  thead th {
    color: #272833;
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
`;

export const Container = styled.div``;
export const Footer = styled.div`
  margin-top: 5.2rem;
  display: flex;
  flex-direction: column;

  div {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 15.5rem;
      height: 5.1rem;
      border: none;
      border-radius: 10px;

      color: #ffffff;
      font-size: 1.8rem;
      font-weight: bold;
      cursor: pointer;
      transform: all 0.5s;

      &:hover {
        transform: translateY(-5%);
      }

      img {
        margin-left: 1rem;
      }
    }
  }

  span {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;
