import { User } from './user';

export class FeedComment {
    constructor(
        public _feedId: number = null,
        public _id: number = null,
        public _creator: User = null,
        public msg: string = null,
    ){}
}