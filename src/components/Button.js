import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  font-size: 0.9rem;
  background: var(--champagnePink);
  color: black;
  border: 0.3rem solid var(--champagnePink);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5 rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
&:hover{
  background: var(--blond);
  border: 0.3rem solid var(--blond);
}
&:focus{
  outline: none;
}
`;