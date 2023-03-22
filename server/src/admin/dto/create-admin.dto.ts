import { ApiProperty } from "@nestjs/swagger"
import { IsString, Length } from "class-validator";

export class CreateAdminDto {
	@ApiProperty({example: 'admin', description: 'Логин администратора'})
	@IsString({message: 'Должно быть строкой'})
	login: string

	@ApiProperty({example: '12345678', description: 'Пароль администратора'})
	@IsString({message: 'Должно быть строкой'})
  @Length(Number(process.env.ADMIN_PASSWORD_LENGTH_MIN), Number(process.env.ADMIN_PASSWORD_LENGTH_MAX), {message: `Длина должна быть не меньше ${process.env.ADMIN_PASSWORD_LENGTH_MIN} и не больше ${process.env.ADMIN_PASSWORD_LENGTH_MAX} символов`})
	password: string
}