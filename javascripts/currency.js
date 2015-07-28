function CurrencyModel() {
}

CurrencyModel.prototype.requestCurrencyQuote = function(exchange, successFunction) {
  if ( exchange === 'asx' ) {
    $.getJSON("http://free.currencyconverterapi.com/api/v3/convert?q=NZD_AUD&compact=y&callback=?", function(data){
      successFunction(data.NZD_AUD.val);
    });
  } else {
    $.getJSON("http://free.currencyconverterapi.com/api/v3/convert?q=NZD_USD&compact=y&callback=?", function(data){
      successFunction(data.NZD_USD.val);
    });
  }
};

CurrencyModel.prototype.calculateCurrencyConversion = function(rate, amount) {
  var conversion = (amount / rate).toFixed(2);

  if (isFinite(conversion)) {
    return conversion;
  } else {
    return '0.00';
  }
};