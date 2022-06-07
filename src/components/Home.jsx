import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <div>
        <h1>Hallo, guten Morgen</h1>
        <h2>Ich bin der mann</h2>
        <p style={{fontSize: "34px", backgroundColor: "white" }}>Schön dich kennenzulernen, 
          <br/>
        ich lerne Deutsch</p>
        <h3>Auf Wiedersehen, </h3>
        <h4>guten Abend</h4>
        <Wrapper>

            <NavLink className="link" to="viewaccount">
              Go to account
            </NavLink>
        </Wrapper>
    </div>
  )
}

export default Home

const Wrapper = styled.div`
    width: 120px;
    font-size: 14px;
    height: 40px;
    background: green;
    cursor: pointer;
    padding: 12px;

    .link{
      text-decoration: none;  
      color: white;
      
    }

`