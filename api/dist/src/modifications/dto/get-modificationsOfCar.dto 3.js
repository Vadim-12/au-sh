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
exports.GetModificationsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetModificationsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'ID модификации' }),
    __metadata("design:type", Number)
], GetModificationsDto.prototype, "ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12, description: 'ID машины из таблицы машин' }),
    __metadata("design:type", Number)
], GetModificationsDto.prototype, "car_ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8, description: 'ID типа двигателя машины из таблицы типов двигателей' }),
    __metadata("design:type", Number)
], GetModificationsDto.prototype, "engine_ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1.1, description: 'Минимальная возможная цена модификации, млн.р.' }),
    __metadata("design:type", Number)
], GetModificationsDto.prototype, "price_min", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1.6, description: 'Максимальная возможная цена модификации, млн.р.' }),
    __metadata("design:type", Number)
], GetModificationsDto.prototype, "price_max", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0.7, description: 'Объем двигателя, л.' }),
    __metadata("design:type", Number)
], GetModificationsDto.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 131, description: 'Мощность двигателя, л.с.' }),
    __metadata("design:type", Number)
], GetModificationsDto.prototype, "power", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: 'ID типа привода из таблицы типов приводов' }),
    __metadata("design:type", Number)
], GetModificationsDto.prototype, "WD_ID", void 0);
exports.GetModificationsDto = GetModificationsDto;
//# sourceMappingURL=get-modificationsOfCar.dto.js.map