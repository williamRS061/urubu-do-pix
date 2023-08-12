
 class DataMemory {
    data;

    constructor() {
        this.data = [];
    }

    find() {
        return this.data;
    }

    create(param) {
        this.data.push(param);
    }

    findOne(id) {
        console.log(id);
        const item = this.data.find((el) => id === el.id );

        return item;
    }
}

export const database = new DataMemory();