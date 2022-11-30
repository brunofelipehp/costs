import { useNavigate } from 'react-router-dom'
import { ProjectForm } from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        //initialize and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //redirect
            navigate('/projects', {message: 'Projeto criado com sucesso!'})
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>formulario</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}