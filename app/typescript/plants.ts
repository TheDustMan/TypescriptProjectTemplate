export interface Munchable {
    onEat();
}

export interface Harvestable {
    onSlaughter();
} 

export class Plant implements Munchable, Harvestable {
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

export class Farmer {
    private edibles:Munchable[]
    private slaughterables:Harvestable[]
    private name:string
    
    constructor(name:string) {
        this.name = name;
        this.edibles = [];
        this.slaughterables = [];
    }
    
    addMunchable(edible:Munchable) {
        this.edibles.push(edible);
    }
    
    addHarvestable(slaughterable:Harvestable) {
        this.slaughterables.push(slaughterable);
    }
    
    doHarvest() {
        for (let slaughterable of this.slaughterables) {
            slaughterable.onSlaughter();
        }
    }
    
    doMunch() {
        for (let edible of this.edibles) {
            edible.onEat();
        }
    }
    
}