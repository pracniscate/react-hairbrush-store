import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  font-size: 0.9rem;
  background: transparent;
  border: 0.09rem solid black;
  border-color: ${props => 
    props.cart ? "var(--mediumSpringBud)" : "var(--champagnePink)"};
  color: ${prop =>
    prop.cart ? "var(--mediumSpringBud)" : "var(--champagnePink)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5 rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
&:hover{
  background: ${prop =>
    prop.cart ? "var(--mediumSpringBud)" : "var(--champagnePink)"};
  color: var(--blueBells);
}
&:focus{
  outline: none;
}
`;