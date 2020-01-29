// class + constructor e class e static 

class List 
{
    constructor()
    {
        this.data = [];
    }

    add(data)
    {
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List
{
    constructor()
    {
        super(); //chamar o constructor da classe pai 
        this.usuario = 'David';

    }
    mostraUsuario()
    {
        console.log(this.usuario);
    }
}

var MinhaLista = new ToDoList(); 

document.querySelector('#novotodo').onclick = function()
{
    MinhaLista.add('Novo To Do');
}

MinhaLista.mostraUsuario();

class Matematica
{
    static soma(a, b)
    {
        return a + b; 
    }
}


console.log(Matematica.soma(1,3)); 

// const e let 
const usuario = {nome: 'David'}; 

usuario.nome = 'Bianca'; 

console.log(usuario.nome);

function teste(x)
{
    let y = 2; 
    if(x>5)
        console.log(x, y);
}

teste(10); 

// arrays 

const arr = [1,3,4,5,8,9,9] 

const newArr = arr.map(
    function(item, index) {
        return item + index; 
    }
); 

console.log(newArr);

const sum = arr.reduce(function(total, next)
{
    return total + next; 
    //reduce 
    //soma os valores das iterações 
    //soma o total com o next  
    //primeira iteração total = 0 e next = 1
    //segunda iteração total 1 e next = 4
});

console.log(sum);

const filter = arr.filter(function(item)
{
    // filter retorna true ou false 
    //operação pra ver se o número é par 
    return item % 2===0; 
}); 

console.log(filter); 

const find = arr.find(function(item)
{
    //find retorna o primeiro valor encotrado no array de acordo com o paramêtro passado, caso não encontre retorna undefined 
    return  item === 9; 
});

console.log(find);

// arrow functions 

const arr2 = [1,3,4,5,6]; 

const newArr2 = arr2.map(item=> item * 2); 

console.log(newArr2);

const teste2 = ()=> { 
    return 'teste'; 
}; 

const teste3 = () =>({nome: 'David '}); 

console.log(teste3());


// valores padrão 

function soma(a = 2 , b = 7)
{
    return a + b; 
}

console.log(soma(1));//substitui o primeiro valor da function 
console.log(soma());

//arrow function
const soma1 = (a = 2, b =5) => a+b ; 

console.log(soma1());

//desustruturação de objetos 

const usuario2 = 
{
    nome: 'David',
    idade: 24,
    endereco : 
    {
        cidade: 'Jales',
        estado: 'SC',
    },
}; 

const {nome, idade, endereco: {cidade}} = usuario2; 

console.log(nome); 
console.log(idade)
console.log(cidade);

function mostraNome({nome, idade})
{
    console.log(nome, idade); 
}

mostraNome(usuario2); //passando o objeto usuario2 para a função mostraNome 

// operador rest e spread 

//rest serve para pegar o resto das propriedas 

const usuario3 = 
{
    nome2: 'David Carmo', 
    idade2: 24,
    empresa: 'DJS'
}; 
const {nome2, ...resto} = usuario3; //desestruturação, nome2 é separado do objeto e o restando do objeto é armazenado em resto

console.log(nome2); 
console.log(resto);

const arr3 = [1,2,3,4]; 
const [a, b, ...c] = arr3; 

console.log(a);
console.log(b);
console.log(c);


function soma3(...params)
{
    return params.reduce((item, next)=> item + next); 
}

console.log(soma3(1,2,3,4));

//spread 
//repassa, propaga as informações de um objeto ou um array para outra estrutura de dados 

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2]; 

console.log(array3);

const usuario4 = 
{
    nome: 'David ',
    idade: 25,
    empresa: 'DJS', 
}; 

const usuario5 = {...usuario4, nome: 'David Carmo'}; 

console.log(usuario5);


//template literals 

const name = 'David'; 
const age = 24; 

console.log(`Meu nome é ${name} e tenho ${age} anos`);


//object short syntax 

const name2 ='David';
const age2 = 23; 

const usuario6 = 
{
    nome2,
    age2,
    company: 'DJS',
}; 
console.log(usuario6);
