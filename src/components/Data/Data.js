class Data {

    static lastId = 0;

    constructor(text){
        
        this.id = Item.lastId++;
        this.name = text;
        this.wordsCount = 0;
        


    }
}

export default Data;