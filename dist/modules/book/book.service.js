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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../database/PrismaService");
let BookService = class BookService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const bookExists = await this.prisma.book.findFirst({
            where: {
                bar_code: data.bar_code,
            },
        });
        if (bookExists) {
            throw new Error('Book already exists');
        }
        const book = await this.prisma.book.create({
            data,
        });
        return book;
    }
    async findAll() {
        return this.prisma.book.findMany();
    }
    async update(id, data) {
        const bookExists = await this.prisma.book.findUnique({
            where: {
                id,
            },
        });
        if (!bookExists) {
            throw new Error('Book does not exists!');
        }
        return await this.prisma.book.update({
            data,
            where: {
                id,
            },
        });
    }
    async delete(id) {
        const bookExists = await this.prisma.book.findUnique({
            where: {
                id,
            },
        });
        if (!bookExists) {
            throw new Error('Book does not exists!');
        }
        return await this.prisma.book.delete({
            where: {
                id,
            },
        });
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map