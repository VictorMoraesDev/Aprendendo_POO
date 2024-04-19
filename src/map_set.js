let meuMap = new Map();
meuMap.set("nome", "gian");
meuMap.set("stack", "html", "css", "js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

// meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let {chave, valor} of meuMap.entries()) {
console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap)

const cpfs = new Set();

cpfs.add('68449790026')
cpfs.add('81031002006')
cpfs.add('35354218020')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.(valor);
})

const array = ['Gian Paulo', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)