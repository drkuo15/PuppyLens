import type { BreedListResponse, BreedService } from './types'

const BASE_URL = 'https://dog.ceo/api'

export const breedService: BreedService = {
  async getAllBreeds() {
    const response = await fetch(`${BASE_URL}/breeds/list/all`)
    const data: BreedListResponse = await response.json()
    return Object.keys(data.message)
  }
}