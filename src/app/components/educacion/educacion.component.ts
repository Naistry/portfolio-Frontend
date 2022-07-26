import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { SEducationService } from 'src/app/service/s-education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  education: Educacion[] = [];
 
  constructor(private sEducation: SEducationService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarEducation();
    
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducation():void{
    this.sEducation.lista().subscribe(data => {this.education = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sEducation.delete(id).subscribe(data=>{
        this.cargarEducation();
      }, err =>{
        alert("No se pudo eliminar la educación");
      });
    }
  }
}


