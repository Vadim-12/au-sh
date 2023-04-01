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
exports.ModificationsController = void 0;
const common_1 = require("@nestjs/common");
const modifications_service_1 = require("./modifications.service");
const create_modification_dto_1 = require("./dto/create-modification.dto");
let ModificationsController = class ModificationsController {
    constructor(modificationsService) {
        this.modificationsService = modificationsService;
    }
    getModificationsOfCar(car_ID) {
        return this.modificationsService.getModificationsOfCar(car_ID);
    }
    createModification(modificationDto) {
        return this.modificationsService.createModification(modificationDto);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ModificationsController.prototype, "getModificationsOfCar", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_modification_dto_1.CreateModificationDto]),
    __metadata("design:returntype", void 0)
], ModificationsController.prototype, "createModification", null);
ModificationsController = __decorate([
    (0, common_1.Controller)('modifications'),
    __metadata("design:paramtypes", [modifications_service_1.ModificationsService])
], ModificationsController);
exports.ModificationsController = ModificationsController;
//# sourceMappingURL=modifications.controller.js.map