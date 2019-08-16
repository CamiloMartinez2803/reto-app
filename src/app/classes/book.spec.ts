import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
  	let plan = {
			"planId": "31d08d43-8023-40c9-be20-60d3349789dd",
			"departureDate": "2019-3-20",
			"numberOfDays": 2,
			"contactInformation": {
				"email": "talento@booktofly.com.co",
				"phoneNumber": "1234567890"
			},
			"customer": {
				"type": "natural",
				"documentType": {
					"code": "CC"
				},
				"name": "Talento",
				"lastName": "B2F",
				"customerId": "4654576",
				"address": "st. av.",
				"phoneNumber": "1234567890"
			},
			"ipAddress": {
				"ip": "190.28.98.41",
				"agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/68.0.3440.106 Safari/537.36"
			},
			"fees": [
				{
				"amount": 0,
				"amountType": "Additional"
				}
			],
			"visitors": [
				{
				"type": "adult",
				"age": 30,
				"gender": "male",
				"documentType": {
					"code": "CC"
				},
				"birthDateValid": true,
				"birthDate": "1996-12-11",
				"firstName": "Cristian",
				"lastName": "Prueba",
				"document": "4654576",
				"email": "talento@booktofly.com.co"
				}
			]
		}
    expect(new Book("31d08d43-8023-40c9-be20-60d3349789dd","2019-3-20",2,{"email": "talento@booktofly.com.co","phoneNumber": "1234567890"},{"type": "natural", "documentType": {"code": "CC"},"name": "Talento","lastName": "B2F",			"customerId": "4654576","address": "st. av.","phoneNumber": "1234567890"},{"ip": "190.28.98.41","agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/68.0.3440.106 Safari/537.36"},[],[{"type": "adult","age": 30, "gender": "male","documentType": {"code": "CC"},"birthDateValid": true,"birthDate": "1996-12-11","firstName": "Cristian","lastName": "Prueba","document": "4654576","email": "talento@booktofly.com.co"}])).toBeTruthy();
  });
});
