describe ("CurrencyModel", function() {
  var currency;

  beforeEach(function() {
    currency = new CurrencyModel();
  });

  describe("calculateCurrencyConversion", function() {
    it("returns the converted amount", function() {
      var conversion = currency.calculateCurrencyConversion(0.8809, 1000);
      expect(conversion).toBe('1135.20');
    });

    it("returns 0.00 if 0 is passed in as one of the parameters", function() {
      var conversion = currency.calculateCurrencyConversion(0, 1000);
      expect(conversion).toBe('0.00');
    });

    it("returns 0.00 if blank values are passed in", function() {
      var conversion = currency.calculateCurrencyConversion('', '');
      expect(conversion).toBe('0.00');
    });
  });

});