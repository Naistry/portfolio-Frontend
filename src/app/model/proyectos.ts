export class Proyectos {

    id?: number;
    tituloProyecto: string;
    fechaProyecto: Date;
    descripcionProyecto: string;
    linkProyecto: string;
    imgProyecto: string;

    constructor(tituloProyecto: string, fechaProyecto: Date, descripcionProyecto: string, linkProyecto: string, imgProyecto: string){
        this.tituloProyecto = tituloProyecto;
        this.fechaProyecto = fechaProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.linkProyecto = linkProyecto;
        this.imgProyecto = imgProyecto;
    }

}
