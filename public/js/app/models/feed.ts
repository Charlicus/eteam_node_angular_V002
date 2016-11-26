import { User } from './user';

export class Feed {
    // Replace creator by user?
    constructor(
        public _id: number = null,
        public creator: User = null,
        public msg: string = null,
        public comments:[{
            _creator: number,
            msg: string
        }]= null
    ){}
}