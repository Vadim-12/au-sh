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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModificationsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const modification_model_1 = require("./modification.model");
let ModificationsService = class ModificationsService {
    constructor(modificationsRepository) {
        this.modificationsRepository = modificationsRepository;
    }
    async createModification(dto) {
        const modification = await this.modificationsRepository.create(dto);
        return modification;
    }
    async getModificationsOfCar(car_ID) {
        const modifications = await this.modificationsRepository.findAll({ where: { car_ID } });
        return modifications;
    }
};
ModificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(modification_model_1.ModificationModel)),
    __metadata("design:paramtypes", [Object])
], ModificationsService);
exports.ModificationsService = ModificationsService;
//# sourceMappingURL=modifications.service.js.map