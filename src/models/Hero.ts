export class Hero {

    private Id: number;
    public get id() : number {
        return this.Id;
    }
    public set id(v : number) {
        this.Id = v;
    }
    

    private _power: string;
    public get power(): string { return this._power; }
    public set power(v: string) { this._power = v; }

    private _country: string;
    public get country(): string { return this._country; }
    public set country(v: string) { this._country = v; }

    private _age: number;
    public get age(): number { return this._age; }
    public set age(v: number) { this._age = v; }

    private _name: string;
    public get name(): string { return this._name; }
    public set name(v: string) { this._name = v; }

    constructor(id: number, name: string, age: number, power: string, country: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.power = power;
        this.country = country;
    }

}
