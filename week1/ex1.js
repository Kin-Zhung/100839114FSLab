const capitalize = (sentence) =>{

    let out = "";
    let words = sentence.split(" ");
    for (i of words ) {
        out += i[0].toUpperCase() + i.slice(1) + " "
    }
    return out;
}

console.log(capitalize("hello my name is bob"))