import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  roman:string = '';
  errors: string [] = [];
  localStorage: any [] = [];
  dictRoman:any = {};

  exp = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  ngOnInit() {
    this.setDict()
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
  getDecimal(){
    this.errors = [];
    this.roman = this.roman?.toUpperCase();

    if(this.validations(this.roman)){
      if(this.localStorage.length == 6){
        this.localStorage.pop();
      }
      let decimal = this.changeRomanValue(this.roman);
      this.localStorage.unshift({input:this.roman,output:decimal});
    }

    this.roman = '';
    //console.log(this.localStorage);

    }
    validations(value:string){
      return  this.validateValue(value) && this.validateExp(value)
    }
    validateValue(value:string){
      if(value === ''){
        return false;
      }
      return true;

    }
    validateExp(value:string){
      if(!this.exp.test(value)){
        this.errors.push(value+" no es un número Romano válido");
        return false;
      }
      return true;
    }
    // deleteAll(){
    //   this.localStorage = [];
    // }
    // clearInput(){
    //   this.roman = '';
    // }
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
    deleteItem(i:number){
      this.localStorage.splice(i, 1);
    }

}
