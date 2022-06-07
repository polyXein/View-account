import React, {useEffect} from 'react'
import styled from 'styled-components'


const Toast = ({color, logo, name, state, setState}) => {



  return (
    <Wrapper  
    state={state}
    setState={setState}>
      <Container
      
       color={color} >
          <img src={logo} />
          <h2>{name} </h2>      
      </Container>
   </Wrapper>
        
  )
}

export default Toast

  const Wrapper = styled.div`
    display: ${props => props.state === true ? 'flex' : 'none'}
  `

const Container = styled.div`

width: 150px;
height: 40px;
display: flex;
justify-content: space-around;
align-items: center;

position: fixed;
bottom: 16px;
right: 16px;

background: ${props => props.color || 'blue'};

color: black;

padding: 8px 16px;
text-align: center;
border: ${props => props.color ? 'none' : '1px solid black' };

  img{
    width: 24px;
    height: 24px;
    color: white;
  }
  h2{
    font-size: 16px;
    font-family: sans-serif;
  }

`;