import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: Banner []= [];
  editBanner: Banner | undefined;

  constructor( private tokenService: TokenService,private bannerService: BannerService) { }

  isLogged = false;

  ngOnInit(): void {

    this.getBanner();
    
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }

  getBanner():void{
    this.bannerService.getBanner().subscribe(data =>{
      this.banner = data;
     
    })
  }

    
  
  public onOpenModal(mode:String, banner?: Banner):void {
    
  if (mode==='edit'){

     this.editBanner = banner;

    
   }

 }

 onUpDateProyecto(banner:Banner){
 
  this.bannerService.updateBanner(banner.id, banner).subscribe(data=>{
    this.getBanner();
  }, err=>{
    alert("No se pudo editar la educación");
  });
}


}
