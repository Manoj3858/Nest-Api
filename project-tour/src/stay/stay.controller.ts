import { Controller,Get,Post,Put,Param,Delete ,Body, ParseIntPipe, UseGuards} from '@nestjs/common';
import { StayService } from './stay.service';
import { Stay } from './stay.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('stay')
export class StayController {
    constructor(private readonly stayService: StayService){}
    
    @Get()
    getAllStays(): any{
        return this.stayService.getAllStays();}

    @Post()
    create(@Body() stayData: Omit<Stay, 'id'>): string{
        return this.stayService.create(stayData);
    }

    @Put(':id')
    update(@Param('id',ParseIntPipe) id: number, @Body() data: Partial<Stay>): string {
        return this.stayService.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number): string {
        return this.stayService.delete(id);
    }
}
