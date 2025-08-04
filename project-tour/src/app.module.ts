import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ToursModule } from './tours/tours.module';
import { StayModule } from './stay/stay.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [AuthModule, ToursModule, StayModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
