import {useState, useEffect} from 'react'

export default function Projects(props) {

    const [projects, setProjects] = useState(null)

    const getProjectData = async () => {
        const response = await fetch(props.URL + 'projects')
        const data = await response.json()
        setProjects(data)
        console.log(data)
    }

    useEffect(() => {getProjectData()}, [])

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
            </div>
        ))
    }

    return projects ? loaded() : <h1>loading...</h1>

    return <h1>Projects</h1>
}

