export interface PostsInterface {
    id: number,
    title: string,
    body: string,
    userId: number,
    reactions: number,
    tags: string[],
    thumbnail: string[],
    price: number,
}

