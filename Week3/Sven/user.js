let name = 'Sven';

const setName =(name)=>{
    this.name = name;
}

const getName =()=>{
    return this.name;
}

exports.setName =setName;
exports.getName =getName;