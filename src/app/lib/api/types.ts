export interface BreedListResponse {
  message: Record<string, string[]>
  status: string
}

export interface BreedImagesResponse {
  message: string[]
  status: string
}

export interface BreedService {
  getAllBreeds: () => Promise<string[]>
}