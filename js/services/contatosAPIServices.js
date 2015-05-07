app.factory("contatosAPI", function ($http) {
	var _getContatos = function () {
		return $http.get("Server/contatos.json");
	};
	
	return {
		getContatos: _getContatos,
	}
});