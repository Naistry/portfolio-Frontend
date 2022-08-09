import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona: persona = new persona("", "", "","","");
  person: persona;
  nombre:String = '';
  apellido:String ='';
  descripcion:String ='';
  img:String ='';
  titulo:String ='';

  constructor(public personaService: PersonaService,  private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.getPersona();

    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }

    getPersona():void{
      this.personaService.getPersona().subscribe(data =>{
        this.persona = data;
       
      })
    }

  
    
    onUpDatePersona(personaEdit: persona){
      
      this.person = personaEdit;
      console.log(this.person);
      this.personaService.upDatePersona(this.person.id,this.person).subscribe(data=>{
        this.getPersona();
      }, err=>{
        alert("No se pudo editar la educación");
      })
    }
}
