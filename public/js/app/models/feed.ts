import { User } from './user';

export class Feed {
    // Replace creator by user?
    constructor(
        public _id: number = null,
        public _creator: User = null,
        public msg: string = null,
        public comments:[{
            _creator: User,
            msg: string
        }] = null
    ){}
}