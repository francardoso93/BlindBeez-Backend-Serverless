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
const schedule_entity_1 = require("./schedule.entity");
const schedule_service_1 = require("./schedule.service");
const new_schedule_dto_1 = require("./new-schedule.dto");
let ScheduleController = class ScheduleController {
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
    }
    async post(body) {
        await this.scheduleService.BulkCreateAvailableSchedules(body);
    }
    async list(params) {
        return await this.scheduleService.list(params.onlyAvailableTime, params.date, params.companyId);
    }
    async get(params) {
        return await this.scheduleService.get(params.id);
    }
    async put(params, body) {
        return await this.scheduleService.update(params.id, body);
    }
    async delete(params) {
        return await this.scheduleService.delete(params.id);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(201),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_schedule_dto_1.NewScheduleDto]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "post", null);
__decorate([
    common_1.Get(),
    common_1.HttpCode(200),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "list", null);
__decorate([
    common_1.Get(':id'),
    common_1.HttpCode(200),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "get", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(200),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, schedule_entity_1.Schedule]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "put", null);
__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(200),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "delete", null);
ScheduleController = __decorate([
    common_1.Controller('schedules'),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleController);
exports.ScheduleController = ScheduleController;
//# sourceMappingURL=schedule.controller.js.map