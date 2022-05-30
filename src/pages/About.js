import { useState, useEffect } from 'react'

// import styled components
import  styled  from 'styled-components'

const StyledDiv = styled.div`
border: solid white;
color: white;
background-color: black;
`




export default function About(props) {

    const [about, setAbout] = useState(null)

    const getAboutData = async () => {
        const response = await fetch(props.URL + 'about')
        const data = await response.json()
        setAbout(data)
        console.log(data)
    }

    useEffect(() => {getAboutData()}, []);

   const loaded = () => (
       <StyledDiv>
           <h2> {about.name} </h2>
           <h3> {about.email} </h3>
           <p> {about.bio}</p>
       </StyledDiv>
   )

   return about ? loaded() : <h1>Loading...</h1>

}

