import { IBaseDto } from "../contracts/IBaseDto";


export class RatingStatsDto{
    constructor(average: number, best: number, worst: number){
        this.Average = average;
        this.Best = best;
        this.Worst = worst;
    }

    Average: number;
    Best: number;
    Worst: number;
}