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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("../admin-domain/clients/client.entity");
const schedule_entity_1 = require("../admin-domain/schedule/schedule.entity");
let ClientSchedulerService = class ClientSchedulerService {
    constructor(clientRepository, scheduleRepository) {
        this.clientRepository = clientRepository;
        this.scheduleRepository = scheduleRepository;
    }
    async save(clientScheduler) {
        try {
            let client = await this.clientRepository.findOne({
                where: [
                    {
                        email: clientScheduler.email,
                    },
                ],
            });
            if (!client) {
                client = {
                    id: 0,
                    name: clientScheduler.name,
                    email: clientScheduler.email,
                };
                client = await this.clientRepository.save(client);
            }
            let schedule = await this.scheduleRepository.findOne(clientScheduler.scheduleId);
            if (schedule) {
                schedule.reserved = true;
                schedule.client = client;
                schedule = await this.scheduleRepository.save(schedule);
                if (schedule.reserved === false || schedule.client == null) {
                    throw new common_1.InternalServerErrorException('A reserva de horário não foi realizada corretamente');
                }
            }
            else {
                throw new common_1.NotFoundException('Não foi possivel localizar a agenda informada');
            }
            return clientScheduler;
        }
        catch (ex) {
            console.error(ex);
            throw ex;
        }
    }
};
ClientSchedulerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(client_entity_1.Client)),
    __param(1, typeorm_1.InjectRepository(schedule_entity_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ClientSchedulerService);
exports.ClientSchedulerService = ClientSchedulerService;
//# sourceMappingURL=client-scheduler.service.js.map