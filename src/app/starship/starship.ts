// Se importa la clase People
import { People } from "../people/people";

// Se define la clase Starship que representa los datos de las naves
export class Starship {

    name:string;
    model:string;
    manufacturer:string;
    cost_in_credits:number;
    lenght:number;
    max_atmosphering_speed:number;
    crew:string;
    passengers:number;
    cargo_capacity:number;
    consumables:string;
    hyperdrive_rating:number;
    MGLT:number;
    starship_class:string;
    pilots:People[];
    films:[];
    created:string;
    edited:string;
    url:string;

    // Constructor de la clase
    constructor(

        name:string,
        model:string,
        manufacturer:string,
        cost_in_credits:number,
        lenght:number,
        max_atmosphering_speed:number,
        crew:string,
        passengers:number,
        cargo_capacity:number,
        consumables:string,
        hyperdrive_rating:number,
        MGLT:number,
        starship_class:string,
        pilots:People[],
        films:[],
        created:string,
        edited:string,
        url:string

    )
    // Se asignan los valores como parámetros a las propiedades correspondientes
    {
        this.name=name;
        this.model=model;
        this.manufacturer=manufacturer;
        this.cost_in_credits=cost_in_credits;
        this.lenght=lenght;
        this.max_atmosphering_speed=max_atmosphering_speed;
        this.crew=crew;
        this.passengers=passengers;
        this.cargo_capacity=cargo_capacity;
        this.consumables=consumables;
        this.hyperdrive_rating=hyperdrive_rating;
        this.MGLT=MGLT;
        this.starship_class=starship_class;
        this.pilots=pilots;
        this.films=films;
        this.created=created;
        this.edited=edited;
        this.url=url;
    }
}
