$(document).ready(function() {
  var controller = new CompanyController();

  $("#stockForm").on('submit', function(e) {
    e.preventDefault();
    var ticker = $('#tickerSymbol').val();
    var exchange = $('#exchange').val();
    controller.createCompanyRequest(ticker, exchange);
  });

  $("#calculatorForm").on('submit', function(e) {
    e.preventDefault();
    var price = $('#stockPrice').val();
    var amount = $('#amountToInvest').val();
    controller.calculateShares(price, amount);
  });

  $("#rorForm").on('submit', function(e) {
    e.preventDefault();
    var eps = $('#eps').val();
    var price = $('#price').val();
    controller.calculateReturn(eps, price);
  });

  $("#currencyForm").on('submit', function(e) {
    e.preventDefault();
    var rate = $('#currencyRate').val();
    var amount = $('#amountToConvert').val();
    controller.calculateCurrency(rate, amount);
  });
});