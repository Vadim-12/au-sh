import { ApiProperty } from "@nestjs/swagger"

export class CreateCarDto {
	@ApiProperty({example: 12, description: 'ID марки машины'})
	mark_ID: number

	@ApiProperty({example: 8, description: 'ID модели машины'})
	model_ID: number

	@ApiProperty({example: 2018, description: 'Год начала выпуска данного авто'})
	year_start: number

	@ApiProperty({example: 2021, description: 'Год конца выпуска данного авто'})
	year_end?: number

	@ApiProperty({example: 'fjkhl1k3fjflk.png', description: 'Название файла с изображением данного авто'})
	img_name: string

	@ApiProperty({example: true, description: 'Флаг: является ли авто новинкой?'})
	is_new: boolean
}