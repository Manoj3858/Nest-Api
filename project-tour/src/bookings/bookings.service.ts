import { Injectable } from '@nestjs/common';
import { Booking } from './booking.interface';

@Injectable()
export class BookingsService {
    private bookings : Booking[] = [];
    private idCounter = 1;

    getBookings(): any{
        return this.bookings;
    }

    create(userId:number , type:string ,itemId:number): string {
        const newBooking: Booking = {
            id: this.idCounter++,userId: userId.toString(), type, itemId, date: new Date().toISOString()
        };
        this.bookings.push(newBooking);
        return 'Booking Created Sucessfull for ${type} id: $(itemId)';  
    }
}
