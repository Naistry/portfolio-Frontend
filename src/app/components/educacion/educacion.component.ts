
import { Component, OnInit } from '@angular/core';
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
  public editEducation: Educacion | undefined;
  public deleteEducation: Educacion |undefined;
  nombreE: string = '';
  descripcionE: string = '';
  edu: Educacion = null;
  imgEducation: string ='';
 
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

  public onOpenModal(mode:String, educacion?: Educacion):void {
    
     if(mode==='delete'){
      this.deleteEducation = educacion;
   console.log(this.deleteEducation);
    }else if (mode==='edit'){

      this.editEducation = educacion;
     
    }

  }

  cargarEducation():void{
    this.sEducation.lista().subscribe(data => {this.education = data;})
  }

  onCreate(): void{
    const edu = new Educacion(this.nombreE, this.descripcionE, this.imgEducation);
    this.sEducation.save(edu).subscribe(
      data =>{alert('Educación añadida');
      this.cargarEducation();
    }, err =>{ 
      alert('Falló');
    });
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

  onUpDateEducation(educacion: Educacion){
   
    this.sEducation.update(educacion.id, educacion).subscribe(data=>{
      this.cargarEducation();
    }, err=>{
      alert("No se pudo editar la educación");
    });
  }


}

