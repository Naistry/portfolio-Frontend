export class Skill {

    id?: number;
    percent: number;
    imgSkill: String;

    constructor(percent: number, imgSkill: String){

        this.percent = percent;
        this.imgSkill = imgSkill;

    }
}
