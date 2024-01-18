export interface Character {
  id: string
  name: string
  gender: string
  species: string
  image: string
}

export interface CharactersData {
  characters: {
    results: Character[]
    info: {
      next: number | null
    }
  }
}
