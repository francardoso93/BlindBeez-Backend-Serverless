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
const typeorm_1 = require("typeorm");
const massotherapist_entity_1 = require("../massotherapists/massotherapist.entity");
const company_entity_1 = require("../companies/company.entity");
const client_entity_1 = require("../clients/client.entity");
let Schedule = class Schedule {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Schedule.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Schedule.prototype, "datetime", void 0);
__decorate([
    typeorm_1.OneToOne(type => massotherapist_entity_1.Massotherapist),
    typeorm_1.JoinColumn(),
    __metadata("design:type", massotherapist_entity_1.Massotherapist)
], Schedule.prototype, "massotherapist", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.Company),
    typeorm_1.JoinColumn(),
    __metadata("design:type", company_entity_1.Company)
], Schedule.prototype, "company", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_entity_1.Client),
    typeorm_1.JoinColumn(),
    __metadata("design:type", client_entity_1.Client)
], Schedule.prototype, "client", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "reserved", void 0);
Schedule = __decorate([
    typeorm_1.Entity()
], Schedule);
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.entity.js.map