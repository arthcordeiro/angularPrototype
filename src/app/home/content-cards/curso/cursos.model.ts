export class Cursos{
    id: number;
    title: string
    category: string
    description: string
    price: number
    start: string
    finish: string
    consultant: {
        avatar: string
        name: string
    }
    address: {
        street:string
        number:string
        neighborhood:string
        city:string
    }
}