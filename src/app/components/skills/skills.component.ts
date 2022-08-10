import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skill[] = [];
  percent: number;
  imgSkill:String ="";
  deleteSkill: Skill | undefined;
  editSkill: Skill | undefined;

  constructor(private skillService: SkillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.getSkills();

    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }


  getSkills():void {

    this.skillService.listaSkills().subscribe(data=>{
      this.skill = data;
    })
  }


  onCreate(): void{
   
    const skill = new Skill(this.percent, this.imgSkill);
    console.log(skill);
    this.skillService.save(skill).subscribe(
      data =>{alert('Educación añadida');
      this.getSkills();
    }, err =>{ 
      alert('Falló');
    });
  }

  public onOpenModal(mode:String, skill?: Skill):void {
    
    if(mode==='delete'){
     this.deleteSkill = skill;
  console.log(this.deleteSkill);
   }else if (mode==='edit'){

     this.editSkill = skill;
     console.log(skill);
   }

 }


  delete(id?: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(data=>{
        this.getSkills();
      }, err =>{
        alert("No se pudo eliminar la educación");
      });
    }
  }

  onUpDateEducation(skill: Skill){
   
    this.skillService.update(skill.id, skill).subscribe(data=>{
      this.getSkills();
    }, err=>{
      alert("No se pudo editar la educación");
    });
  }
}
