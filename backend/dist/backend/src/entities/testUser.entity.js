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
exports.TestUser = void 0;
const typeorm_1 = require("typeorm");
let TestUser = class TestUser {
};
exports.TestUser = TestUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TestUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    __metadata("design:type", String)
], TestUser.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    __metadata("design:type", String)
], TestUser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 13, nullable: false }),
    __metadata("design:type", String)
], TestUser.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], TestUser.prototype, "position_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 255 }),
    __metadata("design:type", String)
], TestUser.prototype, "photo", void 0);
exports.TestUser = TestUser = __decorate([
    (0, typeorm_1.Entity)({ name: 'testUsers' })
], TestUser);
//# sourceMappingURL=testUser.entity.js.map