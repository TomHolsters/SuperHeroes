export interface IHero {
    Id: number;
    Age: number;
    Name: string;
    Power: string;
    Country: string;
    ImgUri: string;
    LogoImgUri: string;
}

export class Hero { //implements IHero {
    private _id: number;
    public get Id(): number { return this._id; }
    public set Id(v: number) { this._id = v; }

    constructor(
        private Name: string,
        private Age: number,
        private Power: string,
        private Country: string,
        private ImgUri: string,
        private LogoImgUri: string) { }
}
