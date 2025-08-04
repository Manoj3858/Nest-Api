import { Injectable , NotAcceptableException} from '@nestjs/common';
import { Stay } from './stay.interface';

@Injectable()
export class StayService {
    private stays: Stay[] = [];
    private idCounter = 1;

    getAllStays(): Stay[] {
        return this.stays;
    }

    create (StayData: Omit<Stay,'id'>): string {
        const newStay: Stay = {
            id: this.idCounter++, ...StayData
        };
        this.stays.push(newStay);
        return 'Stay created Succescfully';
    }

    update(id:number , data: Partial<Stay>) : string {
        const stay = this.stays.find(stay=> stay.id === id)
        if (!stay) throw new NotAcceptableException('Stay not found');
        Object.assign(stay, data);
        return 'Stay Updated Successfully';
    }

    delete(id: number): string {
        const Index = this.stays.findIndex(stay=> stay.id === id);
        if (!Index) throw new NotAcceptableException('Stay not found');
        this.stays.splice(Index,1);
        return 'Stay Deleted Successfully';
    }

}
