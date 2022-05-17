import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    
    if(!value){
      return null;
    }

    let propWords = [
      'of',
      'the'
    ]

    let words = value.split(' ');
    for(let i=0; i < words.length; i++){
      if(propWords.includes(words[i]) && i !=0){
        words[i] = words[i].toLowerCase();
      }else{
        //words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
        words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
      }
    }
    return words.join(' ');
  }

}
