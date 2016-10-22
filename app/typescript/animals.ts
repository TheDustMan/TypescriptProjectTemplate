export interface Edible {
    onEat();
}

export interface Slaughterable {
    onSlaughter();
} 

export class Animal implements Edible, Slaughterable {
    private name:string
    
    constructor(name:string) {
        this.name = name;
    }
    
    roar() : string {
        return this.name;
    }
    
    onEat() {
        console.log("i am being eaten " + this.name + " " + this.name);
    }
    
    onSlaughter() {
        console.log("now i am dead " + this.name + " " + this.name);
    }
}

export class Butcher {
    private edibles:Edible[]
    private slaughterables:Slaughterable[]
    private name:string
    
    constructor(name:string) {
        this.name = name;
        this.edibles = [];
        this.slaughterables = [];
    }
    
    addEdible(edible:Edible) {
        this.edibles.push(edible);
    }
    
    addSlaughterable(slaughterable:Slaughterable) {
        this.slaughterables.push(slaughterable);
    }
    
    doSlaughter() {
        for (let slaughterable of this.slaughterables) {
            slaughterable.onSlaughter();
        }
    }
    
    doEat() {
        for (let edible of this.edibles) {
            edible.onEat();
        }
    }
    
}