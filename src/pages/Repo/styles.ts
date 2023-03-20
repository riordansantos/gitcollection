import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666666;
    }

    svg {
      margin-right: 4px;
    }
    @media (max-width: 720px) {
      flex-direction: column-reverse;
    }
  }
`;

export const RepoInfo = styled.section`
  margin-top: 5rem;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    .title {
      margin-left: 1.7rem;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
      }
    }
    @media (max-width: 720px) {
      flex-direction: column;
      align-items: center;
      img {
        margin-bottom: 1rem;
      }
      .title {
        margin-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 2rem;
    li {
      & + li {
        margin-left: 4.5rem;
        @media (max-width: 720px) {
          margin-left: 0;
          
        }
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #737380;
      }
    }
    @media (max-width: 720px) {
      flex-direction: column;
      text-align: center;
      row-gap: 1rem;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 4rem;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(6px);
    }

    & + a {
      margin-top: 1rem;
    }
    div {
      margin: 0 1rem;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
