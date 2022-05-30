import styled from "styled-components"

const StyledFooter = styled.footer`
position:relative;
   bottom:0;
   width:100%;
   height:60px;   /* Height of the footer */
   background:#6cf;

`


export default function Footer(props) {
    return <StyledFooter>created by: Alex Conway</StyledFooter>
}

