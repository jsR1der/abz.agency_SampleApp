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
exports.S3Service = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
let S3Service = class S3Service {
    constructor(configService) {
        this.configService = configService;
        this.s3Client = new client_s3_1.S3Client({
            region: this.configService.get('S3REGION'),
        });
        this.bucketName = this.configService.get('S3BUCKETNAME');
    }
    async uploadFile(file) {
        const date = new Date().getTime();
        const Key = date + file.originalname;
        const options = {
            Bucket: this.bucketName,
            Key,
            Body: file.buffer,
            ContentType: file.mimetype,
        };
        const putObjectCommand = new client_s3_1.PutObjectCommand(options);
        const result = await this.s3Client.send(putObjectCommand);
        return result.$metadata.httpStatusCode === 200
            ? this.generateS3Url(Key)
            : null;
    }
    generateS3Url(key) {
        return `https://${this.bucketName}.s3.${this.configService.get('S3REGION')}.amazonaws.com/${key}`;
    }
};
exports.S3Service = S3Service;
exports.S3Service = S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], S3Service);
//# sourceMappingURL=s3.service.js.map