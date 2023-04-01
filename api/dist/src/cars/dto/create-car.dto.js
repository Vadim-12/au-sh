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
exports.CreateCarDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateCarDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12, description: 'ID марки машины' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "mark_ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8, description: 'ID модели машины' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "model_ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2018, description: 'Год начала выпуска данного авто' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "year_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2021, description: 'Год конца выпуска данного авто' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "year_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'fjkhl1k3fjflk.png', description: 'Название файла с изображением данного авто' }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "img_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Флаг: является ли авто новинкой?' }),
    __metadata("design:type", Boolean)
], CreateCarDto.prototype, "is_new", void 0);
exports.CreateCarDto = CreateCarDto;
//# sourceMappingURL=create-car.dto.js.map