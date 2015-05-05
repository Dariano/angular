var app = angular.module("listaTelefonica", []);

app.controller("listaTelefonicaCtrl", function ($scope, $http) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	
	var carregarContatos = function () {		
		$http.get("Server/contatos.json").success(function (dados) {
			$scope.contatos = dados;
		});
	};	
	
	$scope.operadoras = [];
	var carregarOperadoras = function () {
		$http.get("Server/operadoras.json").success(function (dados) {
			$scope.operadoras = dados;
		});
	};

	$scope.adicionarContato = function (contato) {
		$scope.contatos.push(contato);
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};
	
	$scope.apagarContatos = function (contatos) {
		var contatosSelecionados = contatos.filter(function (contato) {
			if(!contato.selecionado) return contato;
		});
		
	 	$scope.contatos = contatosSelecionados;
	};
	
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	$scope.classe = "selecionado";
	
	carregarContatos();
	carregarOperadoras();
});

