class role {
    id: string;
    code: string;
    name: string;
    desciption: string;
    inactive: boolean;

    constructor(id:string, code:string, name:string, description:string, inactive:boolean){
        this.id = id;
        this.code = code;
        this.name = name;
        this.desciption = description;
        this.inactive = inactive;
    }
}