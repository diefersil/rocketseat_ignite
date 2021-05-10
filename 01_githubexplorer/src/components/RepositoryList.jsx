import { RespositoryItem } from "./RepositoryItem";

const repository ={
    name: 'unform',
    description: 'Form in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){

    return(

        <section className='repository-list'>
            
            <h1>Lista de Repositórios</h1>

            <ul>
                <RespositoryItem repository={ repository }/>  
                <RespositoryItem repository={ repository }/>  
                <RespositoryItem repository={ repository }/>  
                <RespositoryItem repository={ repository }/>  
            </ul>

        </section>
    )
}