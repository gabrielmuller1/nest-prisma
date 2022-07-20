import { PrismaService } from 'src/database/PrismaService';
import { BookDTO } from './book.dto';
export declare class BookService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: BookDTO): Promise<import(".prisma/client").Book>;
    findAll(): Promise<import(".prisma/client").Book[]>;
    update(id: string, data: BookDTO): Promise<import(".prisma/client").Book>;
    delete(id: string): Promise<import(".prisma/client").Book>;
}
