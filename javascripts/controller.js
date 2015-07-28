function CompanyController() {
  this.companyModel = new CompanyModel();
  this.currencyModel = new CurrencyModel();
  this.view = new View();
}

CompanyController.prototype.createCompanyRequest = function(tickerSymbol, exchange) {
  this.companyModel.requestSnowflake(tickerSymbol, exchange, this.view.displaySnowflake, this.view.resetScreen);
  this.companyModel.requestStockQuote(tickerSymbol, exchange, this.view.displayQuote);
  this.currencyModel.requestCurrencyQuote(exchange, this.view.displayCurrencyQuote);
};

CompanyController.prototype.calculateShares = function(price, amount) {
  var shareCount = this.companyModel.calculateNumberOfShares(price, amount);
  this.view.displayNumberOfShares(shareCount);
};

CompanyController.prototype.calculateReturn = function(eps, price) {
  var rate = this.companyModel.calculateRateOfReturn(eps, price);
  this.view.displayRateOfReturn(rate);
};

CompanyController.prototype.calculateCurrency = function(rate, amount) {
  var conversion = this.currencyModel.calculateCurrencyConversion(rate, amount);
  this.view.displayCurrencyConversion(conversion);
};