import { BookDTO } from './book.dto';
import { BookService } from './book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(data: BookDTO): Promise<import(".prisma/client").Book>;
    findAll(): Promise<import(".prisma/client").Book[]>;
    update(id: string, data: BookDTO): Promise<import(".prisma/client").Book>;
    delete(id: string): Promise<import(".prisma/client").Book>;
}
