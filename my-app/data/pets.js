import { IMG } from '../assets/img'

const DESCRICAO_CAO =
  'O cão, no Brasil também chamado de cachorro, é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano. Teorias postulam que surgiu do lobo cinzento ao continente asiático há mais de 100 000 anos.'

export const pets = [
  { id: 'menininha', nome: 'menininha 3', curtidas: 80, foto: IMG.pets.menininha, descricao: DESCRICAO_CAO },
  { id: 'oxum', nome: 'Oxum', curtidas: 123, foto: IMG.pets.oxum, descricao: DESCRICAO_CAO },
  { id: 'blade', nome: 'Blade', curtidas: 123, foto: IMG.pets.blade, descricao: DESCRICAO_CAO },
  { id: 'mocha', nome: 'Mocha', curtidas: 123, foto: IMG.pets.mocha, descricao: DESCRICAO_CAO },
  { id: 'juju', nome: 'Juju', curtidas: 123, foto: IMG.pets.juju, descricao: DESCRICAO_CAO },
]
const porId = (id) => pets.find((p) => p.id === id)
export const petsCarrossel = ['oxum', 'mocha', 'blade', 'juju'].map(porId)
export const petDestaque = porId('juju')

export const quiz = {
  introducao: 'Será que você combina mais com um doguinho ou um gatinho?',
  pergunta: 'Qual é a sua cor preferida?',
  opcoes: ['Preto', 'Azul', 'Vermelho', 'Verde'],
}
