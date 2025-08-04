import { Controller,Post,Body,Get,Put, ParseIntPipe ,Param,Delete} from '@nestjs/common';
import { ToursService } from './tours.service';
import { Tour } from './tour.interface';

@Controller('tours')
export class ToursController {
    constructor(private tourservice: ToursService){}


    @Get()
    getAllTours(): Tour[]{
        return this.tourservice.getTours();
    }

    @Post()
    createTour(@Body() tourdata: Omit<Tour, 'id'>): string {
        return this.tourservice.create(tourdata);
    }

    @Put(':id')
    updateTour(@Param('id',ParseIntPipe) id: number, @Body() data: Partial<Tour>): string {
        return this.tourservice.update(id, data);
    }

    @Delete(':id')
    deleteTour(@Param('id', ParseIntPipe) id: number): string {
        return this.tourservice.delete(id);
    }

}
