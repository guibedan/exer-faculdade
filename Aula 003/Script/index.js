
var ref = 0
var cadProd = {
    name: [String],
    price: [Number],
    id: [Number]
}

const list = () => {

    for(let i = 0 ;i<ref; i++) {
        console.log(`ID: ${cadProd.id[i]} Nome: ${cadProd.name[i]} Price: ${cadProd.price[i]}`)
    }

}

const numbGenerator = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var idProd = document.getElementById('ID');
var numb = numbGenerator(0,999)
idProd.innerText = numb

const view = () => {

    cadProd.id[ref] = numb
    console.log(numb)

    let nameProd = document.getElementById('name');
    let nameProdValue = String(nameProd.value)

    cadProd.name[ref] = nameProdValue
    console.log(`${cadProd.name[ref]}`)

    let priceProd = document.getElementById('price');
    let priceProdValue = Number(priceProd.value)

    cadProd.price[ref] = priceProdValue
    console.log(`${cadProd.price[ref]}`)

    nameProd.value = ""
    priceProd.value = ""
    numb = numbGenerator(0,999)
    idProd.innerText = numb
    ref++;

}

const test = () => {
    for(let i = 0 ;i<ref; i++) {
        console.log(`ID: ${cadProd.id[i]} Nome: ${cadProd.name[i]} Price: ${cadProd.price[i]}`)
    }
}

