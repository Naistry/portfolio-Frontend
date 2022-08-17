import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];
  editProyecto: Proyectos | undefined;
  deleteProyecto:Proyectos | undefined;
  tituloProyecto: string;
  fechaProyecto: Date;
  descripcionProyecto: string;
  linkProyecto: string;
  imgProyecto: string;
  fecha: string;
  

  

  constructor(private proyectoService: ProyectoService,  private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
  
    this.getProyectos();
    
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }


  getProyectos():void{
    this.proyectoService.getProyectos().subscribe(data=>{
      this.proyectos = data;
     
      data.forEach(fecha =>{
        const year = new Date(fecha.fechaProyecto).getFullYear();
        const month = new Date(fecha.fechaProyecto).getMonth()+1;
        const day = new Date(fecha.fechaProyecto).getDate();
       
        this.fecha = `${day}/${month}/${year}`;
      
       
        
      })
    })
  }

    
  onCreate(): void{
   
    const proyecto = new Proyectos(this.tituloProyecto, this.fechaProyecto, this.descripcionProyecto, this.linkProyecto, this.imgProyecto);
   
    this.proyectoService.createProyecto(proyecto).subscribe(
      data =>{alert('Proyecto añadido');
      this.getProyectos();
    }, err =>{ 
      alert('Falló');
    });
  }

  public onOpenModal(mode:String, proyecto?: Proyectos):void {
    
    if(mode==='delete'){
     this.deleteProyecto = proyecto;
 
   }else if (mode==='edit'){

     this.editProyecto = proyecto;
    
   }

 }


  delete(id?: number){
    if(id != undefined){
      this.proyectoService.deleteProyecto(id).subscribe(data=>{
        this.getProyectos();
      }, err =>{
        alert("No se pudo eliminar el proyecto");
      });
    }
  }

  onUpDateProyecto(proyecto: Proyectos){
 
    this.proyectoService.upDateProyecto(proyecto.id, proyecto).subscribe(data=>{
      this.getProyectos();
    }, err=>{
      alert("No se pudo editar el proyecto");
    });
  }

  
}
