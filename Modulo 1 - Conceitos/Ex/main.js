//ex 1

class Usuario{
    constructor()
    {
        this.email = ''; 
        this.senha = '';
    }
    isAdmin()
    {
        if(this.admin)
            return 'É administrador';
        else 
            return 'Não é administrador'; 

    }
}

class Admin extends Usuario
{
    constructor()
    {
        super(); 
        this.admin = true; 
    }
}

const User1 = new Usuario('email.@teste.com', '12345');
const Admin1 = new Admin('email.@teste.com','123465'); 

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

//ex2 
const usuarios = 
[
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Ana', idade: 30, empresa: 'Facebook'},
]

//map 
const idades = usuarios.map((item) => item.idade); 

console.log(idades);

//filter
const rocketseatWorkers = usuarios.filter((item)=>{
    return item.idade > 18 && item.empresa === 'Rocketseat'; 
}); 

console.log(rocketseatWorkers);

//find 

const workAtGoogle = usuarios.find((item)=> item.empresa === 'Google'); 
const workAtFacebook = usuarios.find((item)=> item.empresa === 'Facebook' ); 

console.log(workAtGoogle);
console.log(workAtFacebook);

//unindo operações 

const unindoOperacoes = usuarios.map((item)=> 
{
    item.idade *=  2; 
    return item; 
}).filter((item)=> item.idade <= 50);;


console.log(unindoOperacoes);

//ex3 

//3.1
const arr = [1,2,3,4,5]; 

console.log(arr.map((item)=> item +10));

//3.2

const usuario = {nome:'David', idade: 24}; 
const mostrarIdade = (item) => item.idade; 

console.log(mostrarIdade(usuario));
 
//3.3 

const nome0 = 'David'; 
const idade0 = 24; 

const mostraUsuario = (nome = 'David', idade = 18) => ({nome, idade}); 

console.log(mostraUsuario(nome0, idade0));
console.log(mostraUsuario(nome0));

//3.4 

const promise = () => new Promise((resolve,reject)=> resolve('Hello World'));
console.log(promise());

//ex4
//3.1
const empresa = 
{
    nome: 'Rocketseat', 
    endereco: 
    {
        cidade: 'Rio do Sul',
        estado: 'SC', 
    }
}; 

const {nome, endereco:{cidade, estado}} = empresa; 

console.log(nome);
console.log(cidade);
console.log(estado);

//4.2
const mostraInfo = ({nome, idade}) => `${nome} tem ${idade} anos`;  

console.log(mostraInfo({nome: 'David', idade: '24'}));

//ex5 
//5.1 
const arrNumbers = [1,2,3,4,5,6]; 

const [x,...y] = arrNumbers; 

console.log(x);
console.log(y);

const soma = (...params)=> params.reduce((item, next)=> item + next); 

console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));

const user = 
{
    nome: 'David',
    idade: 24, 
    endereco: 
    {
        cidade: 'Jales',
        uf: 'SP',
        pais: 'Brasil',
    }
}; 

const user2 = {...user, nome:'Gabriel'}; 
console.log(user2);

const user3 = {...user, endereco: {...user.endereco, cidade: 'Rio Preto'}}; 
console.log(user3);

//ex6 
const userName = 'David'; 
const userAge = 24; 

console.log(`O usuário ${userName} possui ${userAge} anos`); 

//ex

const name = 'David';
const age = 24;

const userEx = 
{
    name, 
    age, 
    empresa: 'DJS'
}; 

console.log(userEx);

