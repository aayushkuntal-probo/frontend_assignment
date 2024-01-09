export interface PostInterface {
    id: number;
    userId: number;
    tags: string[];
    reactions: number;
    title: string;
    body: string;
}

export interface Comment {
    id: number;
    body: string;
    postId: number;
    user : {
        id: number;
        username: string;
    }
}
