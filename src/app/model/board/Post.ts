import { User } from '../myinfo/User';

export interface Post{
    postId: number;
    title: string;
    content: string;
    user: User;
    watch?: number;
    created: Date;
}