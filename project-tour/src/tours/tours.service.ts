import { Injectable , NotFoundException} from '@nestjs/common';
import { Tour } from './tour.interface';


@Injectable()
export class ToursService {
    private tours : Tour[] =[];
    private idCounter = 1;

    
    getTours(): Tour[] {
    return this.tours;}

    create(tourData: Omit<Tour, 'id'>): string {
        const newTour: Tour = {
            id:this.idCounter++,...tourData
        };
        this.tours.push(newTour);
        return 'Tour created successfully';
    }

    update(id:number, data: Partial<Tour>): string {
        const tour= this.tours.find(tour => tour.id === id);
        if (!tour) throw new NotFoundException('Tour not found');

        Object.assign(tour,data)
        return 'Tour updated sucessfully';   

      
    }

    delete(id:number): string {
        const tourIndex = this.tours.findIndex(tour=> tour.id === id);
        if (tourIndex === -1) throw new NotFoundException('Tour not found');
        this.tours.splice(tourIndex, 1);
        return 'Tour deleted sucessfully';
    }

       
}

