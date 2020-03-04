export interface IUser {
    Id: number;
    // Age: number;
    Name: string;
    Password: string;
}

export class User { 
    private _id: number;
    public get Id(): number { return this._id; }
    public set Id(v: number) { this._id = v; }

    constructor(
        private Name: string,
        // private Age: number,
        private Password: string
    ){}
}
