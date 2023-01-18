class Facility{
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.fMap = {};
        this.fJson =  {
            id: this.id,
            name: this.name,
        }
    }

    getFacilate(id){
        return this.fMap[id];
    }
    createFacility(){
        this.fMap[this.id]= this.fJson
    }

}

module.exports = Facility