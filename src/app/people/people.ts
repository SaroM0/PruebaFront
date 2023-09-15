import { Starship } from "../starship/starship";

export class People {

    name:string;
    height:number;
    mass:number;
    hair_color:string;
    eye_color:string;
    birth_year:string;
    gender:string;
    homeword:string;
    films:[];
    species:[];
    vehicles:[];
    starships:Starship[];
    created:string;
    edited:string;
    url:string;

    constructor(

        name:string,
        height:number,
        mass:number,
        hair_color:string,
        eye_color:string,
        birth_year:string,
        gender:string,
        homeword:string,
        films:[],
        species:[],
        vehicles:[],
        starships:Starship[],
        created:string,
        edited:string,
        url:string
    ){
        this.name=name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
        this.gender = gender;
        this.homeword = homeword;
        this.films = films;
        this.species = species;
        this.vehicles = vehicles;
        this.starships = starships;
        this.created = created;
        this.edited = edited;
        this.url = url;
    }
}
