import { Controller ,UseGuards,Get,Post,Param,ParseIntPipe,Req} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BookingsService } from './bookings.service';


@UseGuards(JwtAuthGuard)

@Controller('bookings')
export class BookingsController {
    constructor(private readonly bookingsService: BookingsService){
        this.bookingsService = bookingsService;
    }

    @Get()
    getAll(@Req() req) {
        return this.bookingsService.getBookings();
    }

    @Post('Id/book')
    bookTour(@Req() req , @Param('id', ParseIntPipe) id:number): string {
        const userId = req.user.id;
        return this.bookingsService.create(userId, 'tour', id);
    }

    @Post('stay/:id')   
    bookStay(@Req() req,@Param ('id', ParseIntPipe)id: number): string {
        const userId = req.user.id;
        return this.bookingsService.create(userId, 'stay', id);
    }

}