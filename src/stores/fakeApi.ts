import { defineStore } from 'pinia'
import data from '../../data.json'

// interface Project {
//   id: string
//   title: string
//   content: string
// }

// async function readJson(caminho: string) {
//   try {
//     const response = await fetch(caminho)

//     if (!response.ok) {
//       throw new Error('Erro ao carregar o arquivo JSON')
//     }

//     const json = await response.json()

//     return json
//   } catch (erro) {
//     console.error('Erro ao ler ou parsear o arquivo:', erro)
//   }
// }

export const useFakeApi = defineStore('api falsa', () => {
  const projects = () => {
    const getProjects = () => {
      return data.projects
    }

    const getProjectId = (id: string) => {
      const project = data.projects.find((p) => p.id === id)
      return project
    }

    return {
      getProjects,
      getProjectId
    }
  }

  return {
    projects
  }
})
