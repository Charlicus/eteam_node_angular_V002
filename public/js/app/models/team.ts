import { User } from './user';


export class Team {

	constructor(
		public _id: string = null,
        public name: string = null,
		public sport: string = null,
		public url: string = null,
		public _creator: User = null
	){}
}