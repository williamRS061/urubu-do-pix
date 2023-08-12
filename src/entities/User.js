import crypto from "node:crypto";

export default class User {
    id;
    name;
    cpf;

    constructor(id, name, cpf) {
        this.id = id ?? crypto.randomUUID();
        this.name = name;
        this.cpf = cpf;
    }

}

