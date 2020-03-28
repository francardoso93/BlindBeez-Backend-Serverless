"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const client_scheduler_controller_1 = require("./client-scheduler.controller");
const client_scheduler_service_1 = require("./client-scheduler.service");
const admin_domain_module_1 = require("../admin-domain/admin-domain.module");
let ClientSchedulerModule = class ClientSchedulerModule {
};
ClientSchedulerModule = __decorate([
    common_1.Module({
        imports: [admin_domain_module_1.AdminDomainModule],
        controllers: [client_scheduler_controller_1.ClientSchedulerController],
        providers: [client_scheduler_service_1.ClientSchedulerService]
    })
], ClientSchedulerModule);
exports.ClientSchedulerModule = ClientSchedulerModule;
//# sourceMappingURL=client-scheduler.module.js.map