export class User {

	constructor(
		public _id: number = null,
		public email: string = null,
		public username: string = null,
		public password: string = null,
		public confirmPassword: string = null,
		public createdAt: Date = null,
		public updateAt: Date = null
	){}

}