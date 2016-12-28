import { User } from './user';


export class Team {

	constructor(
        public name: string = null,
		public sport: string = null,
		public url: string = null,
		public _creator: User = null
	){}
}