import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nofoto'
})
export class NofotoPipe implements PipeTransform {

    transform(value: any[]): string {

        let noimage = "assets/img/noimage.png";

        if ( !value ) {
            return noimage;
        }
        
        return ( value.length > 0) ? value[1].url : noimage ;
    }

}
