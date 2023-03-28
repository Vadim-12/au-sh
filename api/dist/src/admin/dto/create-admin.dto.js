"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAdminDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin', description: 'Логин администратора' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345678', description: 'Пароль администратора' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    (0, class_validator_1.Length)(Number(process.env.ADMIN_PASSWORD_LENGTH_MIN), Number(process.env.ADMIN_PASSWORD_LENGTH_MAX), { message: `Длина должна быть не меньше ${process.env.ADMIN_PASSWORD_LENGTH_MIN} и не больше ${process.env.ADMIN_PASSWORD_LENGTH_MAX} символов` }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "password", void 0);
exports.CreateAdminDto = CreateAdminDto;
//# sourceMappingURL=create-admin.dto.js.map