import styled, { keyframes } from 'styled-components'
import { typeFont } from '../../styles/text'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 20rem;
  padding: 2rem 0;
 
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  > div > button {
    color: ${props => props.theme['purple-dark']};
    background: ${props => props.theme['purple-light']};
    ${typeFont.textS};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
  }

  @media (max-width: 1752px) {
    margin: 0 15rem;
  }

  @media (max-width: 1656px) {
    margin: 0 10rem;
  }

  @media (max-width: 1588px) {
    margin: 0 2rem;
  }
`

const quantityAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-70%) translateX(50%);
  }
  to {
    opacity: 1;
  }
`

export const CardButton = styled.button`
  border: none;
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &[data-state=false] {
    cursor: not-allowed;
  }
  
  > span {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme.white};
    ${typeFont.textS};
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${quantityAnimation} 0.5s ease;
  }
`
export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`

export const ModalContent = styled.div`
  position: relative;
  width: 20rem;
  top: 10%;
  left: 50%;
  transform: translateX(-50%) ;
  background: ${props => props.theme['purple-light']};
  border-radius: 6px;

  > svg {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    color: ${props => props.theme['purple-dark']};

  }  
`

export const Zip = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;

 > label {
    ${typeFont.textMB};
    color: ${props => props.theme['base-text']};
    margin-bottom: 1rem;
 }
 
 > div {
    display: flex;
    gap: 0.5rem;
 }

 > div > input { 
    padding: 0.5rem;
    border-radius: 6px;
 }

 > div > button {
    border-radius: 6px;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['purple-light']};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${props => props.theme['purple']};
    }
 }
`

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: ${loadingAnimation} 2s linear infinite;
`
