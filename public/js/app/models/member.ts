import { User } from './user';
import { Team } from './team';


export class Member {

	constructor(
        public _user: User = null,
        public _team: Team = null,
		public role: string = null,
        public admin: Boolean = null,
	){}
}