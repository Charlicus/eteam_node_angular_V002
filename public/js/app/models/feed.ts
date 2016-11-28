import { User } from './user';
import { FeedComment } from './feedComment'

export class Feed {
    constructor(
        public _id: number = null,
        public _creator: User = null,
        public msg: string = null,
        public comments: FeedComment[] = null,
        public createdAt: Date = null,
		public updateAt: Date = null
    ){}
}