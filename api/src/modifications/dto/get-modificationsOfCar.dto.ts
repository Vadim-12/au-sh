import { ApiProperty } from "@nestjs/swagger"

export class GetModificationsDto {
	@ApiProperty({example: 3, description: 'ID модификации'})
	ID: number

	@ApiProperty({example: 12, description: 'ID машины из таблицы машин'})
	car_ID: number

	@ApiProperty({example: 8, description: 'ID типа двигателя машины из таблицы типов двигателей'})
	engine_ID: number

	@ApiProperty({example: 1.1, description: 'Минимальная возможная цена модификации, млн.р.'})
	price_min: number

	@ApiProperty({example: 1.6, description: 'Максимальная возможная цена модификации, млн.р.'})
	price_max: number

	@ApiProperty({example: 0.7, description: 'Объем двигателя, л.'})
	capacity: number

	@ApiProperty({example: 131, description: 'Мощность двигателя, л.с.'})
	power: number

	@ApiProperty({example: 4, description: 'ID типа привода из таблицы типов приводов'})
	WD_ID: number
}