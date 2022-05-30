import { Link } from 'react-router-dom'

import styled from 'styled-components'

const StyledNav = styled.nav`
display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 15px;
  font-size: 2em;
`

export default function Header(props) {

    return (
        <header>
            <h1>Alex Conway's Portfolio Site</h1>
            <StyledNav>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/projects'>PROJECTS</Link>
            </StyledNav>
        </header>
    )
}

