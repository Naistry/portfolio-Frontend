export class persona{

    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    descripcion:String;
    titulo:String;

    constructor(nombre: String, apellido: String, titulo: String, descripcion: String, img:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo= titulo;
        this.descripcion= descripcion;
        this.img= img;
    }

}