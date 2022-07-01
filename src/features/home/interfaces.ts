export interface PostsInterface {
    id: number,
    title: string,
    description: string,
    thumbnail: string,
    price: number,
}


export interface PaginationInterface {
    limit: number,
    total: number,
    page: number
}