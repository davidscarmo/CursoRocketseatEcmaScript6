"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//ex 1
var Usuario =
/*#__PURE__*/
function () {
  function Usuario() {
    _classCallCheck(this, Usuario);

    this.email = '';
    this.senha = '';
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      if (this.admin) return 'É administrador';else return 'Não é administrador';
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email.@teste.com', '12345');
var Admin1 = new Admin('email.@teste.com', '123465');
console.log(User1.isAdmin());
console.log(Admin1.isAdmin()); //ex2 

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Ana',
  idade: 30,
  empresa: 'Facebook'
}]; //map 

var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades); //filter

var rocketseatWorkers = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(rocketseatWorkers); //find 

var workAtGoogle = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
var workAtFacebook = usuarios.find(function (item) {
  return item.empresa === 'Facebook';
});
console.log(workAtGoogle);
console.log(workAtFacebook); //unindo operações 

var unindoOperacoes = usuarios.map(function (item) {
  item.idade *= 2;
  return item;
}).filter(function (item) {
  return item.idade <= 50;
});
;
console.log(unindoOperacoes); //ex3 
//3.1

var arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) {
  return item + 10;
})); //3.2

var usuario = {
  nome: 'David',
  idade: 24
};

var mostrarIdade = function mostrarIdade(item) {
  return item.idade;
};

console.log(mostrarIdade(usuario)); //3.3 

var nome0 = 'David';
var idade0 = 24;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'David';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome0, idade0));
console.log(mostraUsuario(nome0)); //3.4 

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve('Hello World');
  });
};

console.log(promise()); //ex4
//3.1

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); //4.2

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos");
};

console.log(mostraInfo({
  nome: 'David',
  idade: '24'
})); //ex5 
//5.1 

var arrNumbers = [1, 2, 3, 4, 5, 6];
var x = arrNumbers[0],
    y = arrNumbers.slice(1);
console.log(x);
console.log(y);

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (item, next) {
    return item + next;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));
var user = {
  nome: 'David',
  idade: 24,
  endereco: {
    cidade: 'Jales',
    uf: 'SP',
    pais: 'Brasil'
  }
};

var user2 = _objectSpread({}, user, {
  nome: 'Gabriel'
});

console.log(user2);

var user3 = _objectSpread({}, user, {
  endereco: _objectSpread({}, user.endereco, {
    cidade: 'Rio Preto'
  })
});

console.log(user3); //ex6 

var userName = 'David';
var userAge = 24;
console.log("O usu\xE1rio ".concat(userName, " possui ").concat(userAge, " anos")); //ex

var name = 'David';
var age = 24;
var userEx = {
  name: name,
  age: age,
  empresa: 'DJS'
};
console.log(userEx);
