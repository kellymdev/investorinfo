describe("View", function() {
  var mockPage;
  var view;

  beforeEach(function() {
    mockPage = document.createElement('div');
    mockPage.id = "content";
    document.body.appendChild(mockPage);
    view = new View();
  });

  afterEach(function() {
    document.body.removeChild(mockPage);
  });

  describe("displaySnowflake", function() {
    var mockSnowflakeDiv;

    beforeEach(function() {
      mockSnowflakeDiv = document.createElement('div');
      mockSnowflakeDiv.id = "snowflake";
      mockPage.appendChild(mockSnowflakeDiv);

      var data = {
                  "companyName" : "Village Roadshow",
                  "primaryExchangeSymbol" : "ASX",
                  "primaryTickerSymbol" : "VRL",
                  "snowflakeTileURL" : "http:\\/\\/cdn.simplywall.st\\/snowflake\\/ASX-VRL.png"
                  };
      view.displaySnowflake(data);
    });

    it("appends an image to the snowflake div", function() {
      expect($('#snowflake img')).toBeInDOM();
    });

    var mockCompanyDataDiv;

    beforeEach(function() {
      mockCompanyDataDiv = document.createElement('div');
      mockCompanyDataDiv.id = "companyData";
      mockPage.appendChild(mockCompanyDataDiv);
      var data = {
                  "companyName" : "Village Roadshow",
                  "primaryExchangeSymbol" : "ASX",
                  "primaryTickerSymbol" : "VRL",
                  "snowflakeTileURL" : "http:\\/\\/cdn.simplywall.st\\/snowflake\\/ASX-VRL.png"
                  };
      view.displaySnowflake(data);
    });

    it("appends an h2 with the company name to the company data div", function() {
      expect($('#companyData h2')).toContainText("Village Roadshow");
    });

    it("appends a paragraph with the stock exchange to the company data div", function() {
      expect($('#companyData p:first')).toContainText("ASX");
    });

    it("appends the ticker symbol to the company data div", function() {
      expect($('#companyData p')).toContainText("VRL");
    });
  });

  describe("displayQuote", function() {
    beforeEach(function() {
      mockQuoteDataDiv = document.createElement('div');
      mockQuoteDataDiv.id = "quoteData";
      mockPage.appendChild(mockQuoteDataDiv);
      mockCalculatorDiv = document.createElement('div');
      mockCalculatorDiv.id = "calculator";
      mockPage.appendChild(mockCalculatorDiv);

      var quoteData = {
                        "query" : {
                          "results" : {
                            "quote" : {
                              "Ask" : "6.60",
                              "Bid" : "6.05",
                              "DaysRange" : "6.23 - 6.45",
                              "YearRange" : "5.08 - 8.17",
                              "BookValue" : "3.15",
                              "EarningsShare" : "0.25",
                              "PEGRatio" : "-10.98",
                              "PERatio" : "24.65",
                              "PriceBook" : "2.08",
                              "PriceSales" : "1.09"
                            }
                          }
                        }
                      };

      view.displayQuote(quoteData);
    });

    it("displays the Ask quote", function() {
      expect($('#quoteData')).toContainHtml('<p>Ask Quote (delayed): 6.60</p>');
    });

    it("displays the Bid quote", function() {
      expect($('#quoteData')).toContainHtml('<p>Bid Quote (delayed): 6.05</p>');
    });

    it("displays the Days Range", function() {
      expect($('#quoteData')).toContainHtml('<p>Days Range: 6.23 - 6.45</p>');
    });

    it("displays the Year Range", function() {
      expect($('#quoteData')).toContainHtml('<p>Year Range: 5.08 - 8.17</p>');
    });

    it("displays the Book Value", function() {
      expect($('#quoteData')).toContainHtml('<p>Book Value: 3.15</p>');
    });

    it("displays the Earnings Per Share", function() {
      expect($('#quoteData')).toContainHtml('<p>EPS: 0.25</p>');
    });

    it("displays the Price to Earnings Growth ratio", function() {
      expect($('#quoteData')).toContainHtml('<p>PEG Ratio: -10.98</p>');
    });

    it("displays the Price Earnings ratio", function() {
      expect($('#quoteData')).toContainHtml('<p>PE Ratio: 24.65</p>');
    });

    it("displays the Price to Book ratio", function() {
      expect($('#quoteData')).toContainHtml('<p>Price to Book Ratio: 2.08</p>');
    });

    it("displays the Price to Sales ratio", function() {
      expect($('#quoteData')).toContainHtml('<p>Price to Sales Ratio: 1.09</p>');
    });

    it("sets the calculator div to display", function() {
      expect($('#calculator')).toHaveCss({display: "inline-block"});
    });

    it("displays data values as '---' if a null value is received", function() {
      var quoteDataWithNulls = {
                        "query" : {
                          "results" : {
                            "quote" : {
                              "Ask" : "6.60",
                              "Bid" : "6.05",
                              "DaysRange" : "6.23 - 6.45",
                              "YearRange" : "5.08 - 8.17",
                              "BookValue" : "3.15",
                              "EarningsShare" : null,
                              "PEGRatio" : "-10.98",
                              "PERatio" : null,
                              "PriceBook" : "2.08",
                              "PriceSales" : "1.09"
                            }
                          }
                        }
                      };

      view.displayQuote(quoteDataWithNulls);
      expect($('#quoteData')).toContainHtml('<p>EPS: ---</p>');
    });
  });

  describe("displayCurrencyQuote", function() {
    beforeEach(function() {
      mockCurrencyDataDiv = document.createElement('div');
      mockCurrencyDataDiv.id = "currencyData";
      mockPage.appendChild(mockCurrencyDataDiv);
      var exchangeRate = "0.8942";
      view.displayCurrencyQuote(exchangeRate);
    });

    it("displays the currency in the currency data div", function() {
      expect($('#currencyData')).toHaveHtml('<p>Exchange Rate (delayed): 0.8942</p>');
    });
  });

  describe("displayNumberOfShares", function() {
    beforeEach(function() {
      mockResultDiv = document.createElement('div');
      mockResultDiv.id = "calculatorResult";
      mockPage.appendChild(mockResultDiv);
    });

    it("displays the number of shares that can be purchased", function() {
      view.displayNumberOfShares(1905);
      expect($('#calculatorResult')).toContainHtml('<p>You can purchase 1905 shares</p>');
    });

    it("displays 1 share without an s if the numbers of shares is 1", function() {
      view.displayNumberOfShares(1);
      expect($('#calculatorResult')).toContainHtml('<p>You can purchase 1 share</p>');
    });
  });

  describe("displayRateOfReturn", function() {
    beforeEach(function() {
      mockRorResultDiv = document.createElement('div');
      mockRorResultDiv.id = "rorResult";
      mockPage.appendChild(mockRorResultDiv);
      view.displayRateOfReturn('5.98');
    });

    it("displays the initial rate of return", function() {
      expect($('#rorResult')).toContainHtml('<p>The initial rate of return is 5.98%</p>');
    });
  });

  describe("displayCurrencyConversion", function() {
    beforeEach(function() {
      mockCurrencyResultDiv = document.createElement('div');
      mockCurrencyResultDiv.id = "currencyResult";
      mockPage.appendChild(mockCurrencyResultDiv);
      view.displayCurrencyConversion('13592.19');
    });

    it("displays the converted amount", function() {
      expect($('#currencyResult')).toContainHtml('<p>Converted amount: NZD 13592.19</p>');
    });
  });
});