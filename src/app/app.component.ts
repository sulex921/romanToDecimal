import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from './services/main.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //standalone: true,
  //imports:[FormsModule]
})
export class AppComponent {
  roman:string = '';
  decimal: number = 0;
  // dictRoman:any = {};
  errors: string [] = [];
   exp = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  localStorage: any [] = [];

  constructor(private mainService: MainService) {}

  ngOnInit() {
    // this.setDict()
  }

  deleteItem(i:number){
    this.localStorage.splice(i, 1);
  }
  getDecimal(){
    this.errors = [];
    this.roman = this.roman?.toUpperCase();
    if(this.validations(this.roman)){
      if(this.localStorage.length == 6){
        this.localStorage.pop();
      }
      let decimal = this.mainService.changeRomanValue(this.roman);
      this.localStorage.unshift({input:this.roman,output:decimal});
    }

    this.roman = '';
    //console.log(this.localStorage);

    }
    // setDict(){
    //   this.dictRoman = {
    //     'I':1,
    //     'V':5,
    //     'X':10,
    //     'L':50,
    //     'C':100,
    //     'D':500,
    //     'M':1000
    //   };

    // }
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
    deleteAll(){
      this.localStorage = [];
    }
    clearInput(){
      this.roman = '';
    }
}
