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
const schedule_entity_1 = require("./schedule.entity");
const typeorm_2 = require("typeorm");
const moment = require("moment");
let ScheduleService = class ScheduleService {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async BulkCreateAvailableSchedules(newSchedule) {
        const startDate = new Date(newSchedule.initialDate);
        let currentMoment = new Date(newSchedule.initialDate);
        const endDate = new Date(newSchedule.finalDate);
        while (currentMoment < endDate) {
            while (this.getTime(moment.utc(currentMoment)) < this.getTime(moment.utc(endDate))) {
                currentMoment = moment(currentMoment)
                    .add(newSchedule.minuteInterval, 'minutes')
                    .utc().utcOffset('-03:00').toDate();
                const schedule = {
                    id: 0,
                    company: newSchedule.company,
                    datetime: currentMoment,
                    reserved: false,
                };
                this.save(schedule);
            }
            currentMoment = moment(currentMoment)
                .add(1, 'days')
                .hours(startDate.getHours())
                .minutes(startDate.getMinutes())
                .utc().utcOffset('-03:00').toDate();
        }
    }
    getTime(dateTime) {
        return moment({ h: dateTime.hours(), m: dateTime.minutes() });
    }
    async save(schedule) {
        return await this.scheduleRepository.save(schedule);
    }
    async list(onlyAvailableTime, date, companyId) {
        const scheduleDtoList = [];
        const whereCondition = {};
        if (onlyAvailableTime) {
            whereCondition.reserved = false;
        }
        if (date) {
            whereCondition.datetime = typeorm_2.Between(moment(date, ['DD/MM/YYYY', 'YYYY-MM-DD']).format('YYYY-MM-DD') + 'T00:00:00', moment(date, ['DD/MM/YYYY', 'YYYY-MM-DD']).format('YYYY-MM-DD') + 'T23:59:59');
        }
        if (companyId) {
            whereCondition.company = {
                id: companyId,
            };
        }
        const scheduleList = await this.scheduleRepository.find({
            where: [whereCondition],
            order: {
                datetime: 'ASC',
            },
        });
        scheduleList.map(a => {
            scheduleDtoList.push({
                id: a.id,
                company: a.company,
                date: a.date = moment(a.datetime).utc().utcOffset('-03:00').format('YYYY-MM-DD'),
                time: a.time = moment(a.datetime).utc().utcOffset('-03:00').format('HH:mm:ss'),
                reserved: a.reserved,
                client: a.client,
                massotherapist: a.massotherapist,
            });
        });
        return scheduleDtoList;
    }
    async get(id) {
        return await this.scheduleRepository.findOne(id);
    }
    async delete(id) {
        return await this.scheduleRepository.delete(id);
    }
    async update(id, schedule) {
        const existingSchedule = await this.get(id);
        existingSchedule.client = schedule.client;
        existingSchedule.company = schedule.company;
        existingSchedule.datetime = schedule.datetime;
        existingSchedule.massotherapist = schedule.massotherapist;
        existingSchedule.reserved = schedule.reserved;
        return await this.save(existingSchedule);
    }
};
ScheduleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(schedule_entity_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map