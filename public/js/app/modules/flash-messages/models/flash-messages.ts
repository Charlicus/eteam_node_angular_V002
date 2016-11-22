export class FlashMessages {

	constructor(
		public style: string,
		public messages: string[],
		public timeout: number = null
	){}
}