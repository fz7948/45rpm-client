import styled from 'styled-components';

export const Button = styled.button`
  width: 10rem;
  height: 4rem;
  margin-top: 3rem;
  font-size: 1.5rem;
  font-family: 'Jua', sans-serif;
  outline: none;
  background-color: #eee;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition: all ease 0.4s;
    border: none;
  }

  @media screen and (max-width: 768px) {
    width: 8rem;
    height: 3rem;
    font-size: 1rem;
    margin-top: 3rem;
  }
`

