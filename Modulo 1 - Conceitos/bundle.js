"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class + constructor e class e static 
var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var ToDoList =
/*#__PURE__*/
function (_List) {
  _inherits(ToDoList, _List);

  function ToDoList() {
    var _this;

    _classCallCheck(this, ToDoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToDoList).call(this)); //chamar o constructor da classe pai 

    _this.usuario = 'David';
    return _this;
  }

  _createClass(ToDoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return ToDoList;
}(List);

var MinhaLista = new ToDoList();

document.querySelector('#novotodo').onclick = function () {
  MinhaLista.add('Novo To Do');
};

MinhaLista.mostraUsuario();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 3)); // const e let 

var usuario = {
  nome: 'David'
};
usuario.nome = 'Bianca';
console.log(usuario.nome);

function teste(x) {
  var y = 2;
  if (x > 5) console.log(x, y);
}

teste(10); // arrays 

var arr = [1, 3, 4, 5, 8, 9, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next; //reduce 
  //soma os valores das iterações 
  //soma o total com o next  
  //primeira iteração total = 0 e next = 1
  //segunda iteração total 1 e next = 4
});
console.log(sum);
var filter = arr.filter(function (item) {
  // filter retorna true ou false 
  //operação pra ver se o número é par 
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  //find retorna o primeiro valor encotrado no array de acordo com o paramêtro passado, caso não encontre retorna undefined 
  return item === 9;
});
console.log(find); // arrow functions 

var arr2 = [1, 3, 4, 5, 6];
var newArr2 = arr2.map(function (item) {
  return item * 2;
});
console.log(newArr2);

var teste2 = function teste2() {
  return 'teste';
};

var teste3 = function teste3() {
  return {
    nome: 'David '
  };
};

console.log(teste3()); // valores padrão 

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  return a + b;
}

console.log(soma(1)); //substitui o primeiro valor da function 

console.log(soma()); //arrow function

var soma1 = function soma1() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
};

console.log(soma1()); //desustruturação de objetos 

var usuario2 = {
  nome: 'David',
  idade: 24,
  endereco: {
    cidade: 'Jales',
    estado: 'SC'
  }
};
var nome = usuario2.nome,
    idade = usuario2.idade,
    cidade = usuario2.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario2); //passando o objeto usuario2 para a função mostraNome 
// operador rest e spread 
//rest serve para pegar o resto das propriedas 

var usuario3 = {
  nome2: 'David Carmo',
  idade2: 24,
  empresa: 'DJS'
};

var nome2 = usuario3.nome2,
    resto = _objectWithoutProperties(usuario3, ["nome2"]); //desestruturação, nome2 é separado do objeto e o restando do objeto é armazenado em resto


console.log(nome2);
console.log(resto);
var arr3 = [1, 2, 3, 4];
var a = arr3[0],
    b = arr3[1],
    c = arr3.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma3() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (item, next) {
    return item + next;
  });
}

console.log(soma3(1, 2, 3, 4)); //spread 
//repassa, propaga as informações de um objeto ou um array para outra estrutura de dados 

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [].concat(array1, array2);
console.log(array3);
var usuario4 = {
  nome: 'David ',
  idade: 25,
  empresa: 'DJS'
};

var usuario5 = _objectSpread({}, usuario4, {
  nome: 'David Carmo'
});

console.log(usuario5); //template literals 

var name = 'David';
var age = 24;
console.log("Meu nome \xE9 ".concat(name, " e tenho ").concat(age, " anos")); //object short syntax 

var name2 = 'David';
var age2 = 23;
var usuario6 = {
  nome2: nome2,
  age2: age2,
  company: 'DJS'
};
console.log(usuario6);
