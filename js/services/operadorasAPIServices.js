app.service("operadorasAPI", function ($http, config) {
	this.getOperadoras = function () {
		return $http.get(config.baseUrl + "/operadoras2.json");
	};
});