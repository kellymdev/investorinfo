function CompanyModel() {
  this.view = new View();
}

CompanyModel.prototype.requestSnowflake = function(tickerSymbol, exchange, successFunction, failureFunction) {
  var requestUrl;

  if ( exchange === 'asx' ) {
    requestUrl = "https://simplywall.st/api/snowflake/ASX:" + tickerSymbol;
  } else {
    requestUrl = "https://simplywall.st/api/snowflake/US:" + tickerSymbol;
  }

  $.ajax({
    type: "GET",
    url: requestUrl,
    success: function(data, status) {
      successFunction(data);
    },
    error: function(error, status) {
      failureFunction();
      alert("Sorry, we couldn't find company data for that stock symbol.");
    }
  });
};

CompanyModel.prototype.requestStockQuote = function(tickerSymbol, exchange, successFunction) {
  // Yahoo doesn't support '.' in tickerSymbols, so it needs to be replaced with a dash
  var regex = /\w+[\.]\w+/;
  if (tickerSymbol.match(regex)) {
    tickerSymbol = tickerSymbol.replace('.', '-');
  }

  if ( exchange === 'asx' ) {
    requestUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20%3D%20'" + tickerSymbol + ".ax'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?"
  } else {
    requestUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20%3D%20'" + tickerSymbol + "'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?"
  }

  $.getJSON(requestUrl, function(data){
    successFunction(data);
  });
};

CompanyModel.prototype.calculateNumberOfShares = function(price, amount) {
  numberOfShares = Math.floor(amount / price);

  if (isFinite(numberOfShares)) {
    return numberOfShares;
  } else {
    return '0';
  }
};

CompanyModel.prototype.calculateRateOfReturn = function(eps, price) {
  rateOfReturn = ((eps / price) * 100).toFixed(2);

  if (isFinite(rateOfReturn)) {
    return rateOfReturn;
  } else {
    return '0.00';
  }
};