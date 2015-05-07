app.controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];

	var carregarContatos = function () {
		contatosAPI.getContatos().success(function (dados) {
			$scope.contatos = dados;
		});
	};

	$scope.operadoras = [];
	var carregarOperadoras = function () {
		operadorasAPI.getOperadoras().success(function (dados) {
			$scope.operadoras = dados;
		}).error(function (data, status) {
			$scope.error = "Não foi possivel carregar os dados";
		});
	};

	$scope.adicionarContato = function (contato) {		
		contato.serial = serialGenerator.generate();
		console.log("seial = " + contato.serial);
		// Criar uma factory para fazer um POST
		$scope.contatos.push(contato);
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};

	$scope.apagarContatos = function (contatos) {
		var contatosSelecionados = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
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