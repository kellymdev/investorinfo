describe("CompanyModel", function() {
  var company;

  beforeEach(function() {
    company = new CompanyModel();
  });

  describe("calculateNumberOfShares", function() {
    it("returns the number of shares that can be purchased", function() {
      var shares = company.calculateNumberOfShares(6.19, 10000);
      expect(shares).toBe(1615);
    });

    it("returns 0 if 0 is passed in as one of the parameters", function() {
      var shares = company.calculateNumberOfShares(0, 10000);
      expect(shares).toBe('0');
    });

    it("returns 0 if blank values are passed in", function() {
      var shares = company.calculateNumberOfShares('', '');
      expect(shares).toBe('0');
    });
  });

  describe("calculateRateOfReturn", function() {
    it("returns the rate of return for the current price", function() {
      var rate = company.calculateRateOfReturn(0.36, 5.77);
      expect(rate).toBe('6.24');
    });

    it("returns 0.00 if 0 is passed in as one of the parameters", function() {
      var rate = company.calculateRateOfReturn(0, 5.77);
      expect(rate).toBe('0.00');
    });

    it ("returns 0.00 if blank values are passed in", function() {
      var rate = company.calculateRateOfReturn('', '');
      expect(rate).toBe('0.00');
    });
  });
});