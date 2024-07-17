import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  dictRoman:any = {};
  exp = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  constructor() {
    this.setDict()
  }

  changeRomanValue(value:string){
    let decimal = 0;
    for(let i = 0;i < value.length; i++){
      let index = value[i];
      const currentValue = this.dictRoman[index];
      const nextValue = this.dictRoman[value[i+1]];
      if(nextValue && nextValue > currentValue){
        decimal += nextValue - currentValue;
        i++;
      }
      else {
        decimal += currentValue;
      }
    }
    return decimal;
  }
  setDict(){
    this.dictRoman = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    };

  }

}
