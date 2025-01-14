import styled, { css } from 'styled-components';

interface ContentProps{
  isFocused: Boolean;
}


export const Form = styled.form<ContentProps>`

  margin-left: 1rem;
  width: 20rem;
  height: 1.75rem;
  border-radius: 0.25rem;
  border: 0.05rem solid var(--gray-300);
  background: var(--background);
  display: flex;
  flex-direction: column;
  transition: width 0.2s;



  input{
    flex: 1;
    height: 1.75rem;
    background: none;
    border: 0;
    color: var(--text-primary);
    font-weight: 300;
    padding: 0.8rem;
    
  }


  }


  div{
   
    padding: 0.8rem;
    background: var(--background);
    border-bottom: 0.05rem solid var(--gray-300);
    border-right: 0.05rem solid var(--gray-300);
    border-left: 0.05rem solid var(--gray-300);
    z-index: 10;
    cursor: pointer;
    display: flex;
    

    &:hover{
      background: var(--blue-300);
      svg{
        color: var(--text-primary);
      }
    }
    
    svg{
      color: var(--gray-250);
    }

    a{
      text-decoration: none;
      color: var(--text-primary);
      margin-left: 1rem;
      flex: 1;
    }

   :last-child  {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
   }

  }

  ${props => props.isFocused && css`
    border: 0.05rem solid var(--blue-300);
    width: 25rem;
   `
  }
`

