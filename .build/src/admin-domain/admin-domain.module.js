"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const companies_controller_1 = require("./companies/companies.controller");
const schedule_controller_1 = require("./schedule/schedule.controller");
const massotherapists_controller_1 = require("./massotherapists/massotherapists.controller");
const clients_controller_1 = require("./clients/clients.controller");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("./clients/client.entity");
const company_entity_1 = require("./companies/company.entity");
const massotherapist_entity_1 = require("./massotherapists/massotherapist.entity");
const schedule_entity_1 = require("./schedule/schedule.entity");
const companies_service_1 = require("./companies/companies.service");
const schedule_service_1 = require("./schedule/schedule.service");
let AdminDomainModule = class AdminDomainModule {
};
AdminDomainModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([client_entity_1.Client, company_entity_1.Company, massotherapist_entity_1.Massotherapist, schedule_entity_1.Schedule])],
        controllers: [companies_controller_1.CompaniesController, schedule_controller_1.ScheduleController, massotherapists_controller_1.MassotherapistsController, clients_controller_1.ClientsController],
        exports: [typeorm_1.TypeOrmModule],
        providers: [companies_service_1.CompaniesService, schedule_service_1.ScheduleService],
    })
], AdminDomainModule);
exports.AdminDomainModule = AdminDomainModule;
//# sourceMappingURL=admin-domain.module.js.map