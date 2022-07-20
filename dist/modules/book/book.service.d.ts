import { PrismaClient } from '@prisma/client';
import { BookDTO } from './book.dto';
export declare class BookService {
    private prisma;
    constructor(prisma: PrismaClient);
    create(data: BookDTO): Promise<import(".prisma/client").Book>;
    findAll(): Promise<void>;
    update(id: string, data: BookDTO): Promise<import(".prisma/client").Book>;
    delete(id: string): Promise<import(".prisma/client").Book>;
}
