export class Book {
	constructor(
		public planId: string,
		public departureDate: string,
		public numberOfDays: number,
		public contactInformation: {
			email: string,
			phoneNumber: string
		},
		public customer:{
			type: string,
			documentType: {
				code: string
			},
			name: string,
			lastName: string,
			customerId: string,
			address: string,
			phoneNumber: string
		},
		public ipAddress: {
			ip: string,
			agent: string
		},
		public fees: [],
		public visitors: [{type: string,age: number,gender: string,documentType: {code: string},birthDateValid: boolean,birthDate: string,firstName: string,lastName: string,document: string,email: string}],
		
	){}
}
