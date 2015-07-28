function View() {
}

View.prototype.resetScreen = function() {
  $('#exchange').val('asx');
  $('#tickerSymbol').val('');
  $('#snowflake, #companyData, #currencyData, #quoteData').html('');
  $('#calculator, #rorCalculator, .additionalHeading, #currencyCalculator').css({
    "display" : "none"
  });
};

View.prototype.displaySnowflake = function(snowflakeData) {
  $('#exchange').val('asx');
  $('#tickerSymbol').val('');
  $('#snowflake, #companyData').html("");

  var snowflakeHTML = '<img src="' + snowflakeData.snowflakeTileURL + '">';
  $('#snowflake').append(snowflakeHTML);

  var companyNameHTML = '<h2>' + snowflakeData.companyName + '</h2>';
  $('#companyData').append(companyNameHTML);

  var exchangeHTML = '<p>Primary Exchange: ' + (snowflakeData.primaryExchangeSymbol || '---') + '</p>';
  $('#companyData').append(exchangeHTML);

  var tickerHTML = '<p>Ticker Symbol: ' + (snowflakeData.primaryTickerSymbol || '---') + '</p>';
  $('#companyData').append(tickerHTML);
};

View.prototype.displayQuote = function(quoteData) {
  $('#quoteData, #calculatorResult, #rorResult').html("");

  var quoteHTML = '<p>Ask Quote (delayed): ' + (quoteData.query.results.quote.Ask || '---') + '</p>' +
                    '<p>Bid Quote (delayed): ' + (quoteData.query.results.quote.Bid || '---') + '</p>' +
                    '<p>Days Range: ' + (quoteData.query.results.quote.DaysRange || '---') + '</p>' +
                    '<p>Year Range: ' + (quoteData.query.results.quote.YearRange || '---') + '</p>' +
                    '<p>Book Value: ' + (quoteData.query.results.quote.BookValue || '---') + '</p>' +
                    '<p>EPS: ' + (quoteData.query.results.quote.EarningsShare || '---') + '</p>' +
                    '<p>PEG Ratio: ' + (quoteData.query.results.quote.PEGRatio || '---') + '</p>' +
                    '<p>PE Ratio: ' + (quoteData.query.results.quote.PERatio || '---') + '</p>' +
                    '<p>Price to Book Ratio: ' + (quoteData.query.results.quote.PriceBook || '---') + '</p>' +
                    '<p>Price to Sales Ratio: ' + (quoteData.query.results.quote.PriceSales || '---') + '</p>';
  $('#quoteData').append(quoteHTML);

  $('#stockPrice').val(quoteData.query.results.quote.Bid);
  $('#eps').val(quoteData.query.results.quote.EarningsShare);
  $('#price').val(quoteData.query.results.quote.Bid);
  $('#calculator, #rorCalculator').css({
    "display" : "inline-block"
  });
  $('.additionalHeading').css({
    "display" : "block"
  });
};

View.prototype.displayCurrencyQuote = function(exchangeRate) {
  $('#currencyData, #currencyResult').html("");

  var currencyHTML = '<p>Exchange Rate (delayed): ' + (exchangeRate || '---') + '</p>';
  $('#currencyData').append(currencyHTML);

  $('#currencyRate').val(exchangeRate);
  $('#currencyData, #currencyCalculator').css({
    "display" : "inline-block"
  });
};

View.prototype.displayNumberOfShares = function(numberOfShares) {
  $('#calculatorResult').html("");
  $('#amountToInvest').val('');

  if (numberOfShares === 1) {
    $('#calculatorResult').append('<p>You can purchase 1 share</p>');
  } else {
    $('#calculatorResult').append('<p>You can purchase ' + numberOfShares + ' shares</p>');
  }
};

View.prototype.displayRateOfReturn = function(rateOfReturn) {
  $('#rorResult').html("");
  $('#rorResult').append('<p>The initial rate of return is ' + rateOfReturn + '%</p>');
};

View.prototype.displayCurrencyConversion = function(conversion) {
  $('#currencyResult').html("");
  $('#amountToConvert').val('');
  $('#currencyResult').append('<p>Converted amount: NZD ' + conversion + '</p>');
};