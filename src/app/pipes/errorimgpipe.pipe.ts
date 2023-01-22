import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorimgpipe'
})
export class ErrorimgpipePipe implements PipeTransform {

  transform(images:any[]):string  {
    if (!images) {
      console.log('!images');
      return 'assets/Imagenes/dummy-person.jpg'
      
    }
    if (images.length > 0) {
      return images[0].url;
      
    }else{
      return 'assets/Imagenes/dummy-person.jpg'
    }
  }

}
