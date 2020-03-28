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
const common_1 = require("@nestjs/common");
const company_entity_1 = require("./company.entity");
const companies_service_1 = require("./companies.service");
let CompaniesController = class CompaniesController {
    constructor(companiesService) {
        this.companiesService = companiesService;
    }
    async post(body) {
        if (body = await this.companiesService.save(body)) {
            return body;
        }
    }
    async list() {
        return await this.companiesService.list();
    }
    async get(params) {
        return await this.companiesService.get(params.id);
    }
    async put(params, body) {
        return await this.companiesService.update(params.id, body);
    }
    async delete(params) {
        return await this.companiesService.delete(params.id);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(201),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_entity_1.Company]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "post", null);
__decorate([
    common_1.Get(),
    common_1.HttpCode(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "list", null);
__decorate([
    common_1.Get(":id"),
    common_1.HttpCode(200),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "get", null);
__decorate([
    common_1.Put(":id"),
    common_1.HttpCode(200),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_entity_1.Company]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "put", null);
__decorate([
    common_1.Delete(":id"),
    common_1.HttpCode(200),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "delete", null);
CompaniesController = __decorate([
    common_1.Controller('companies'),
    __metadata("design:paramtypes", [companies_service_1.CompaniesService])
], CompaniesController);
exports.CompaniesController = CompaniesController;
//# sourceMappingURL=companies.controller.js.map