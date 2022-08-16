export class Educacion {

    id?: number;
    nombreE: string;
    descripcionE: string;
    imgEducation: string;

    constructor(nombreE: string, descripcionE: string, imgEducation: string){

        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgEducation = imgEducation;
    }
}
