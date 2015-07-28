#Investor Info Centre

##Usage Instructions
This site allows users to request information for a stock listed on the ASX, NASDAQ or NYSE, by selecting the exchange and entering a Ticker Symbol.

Example Ticker Codes:
- ASX: BHP, NAB, VRL
- NASDAQ: GOOG, YHOO
- NYSE: MMM, BRK.B

The information provided includes:
- An Investment Snowflake which provides analysis of a stock based on Value, Future, Past, Income and Health.
- The Company name, Primary Exchange and Ticker Symbol
- The exchange rate (delayed) against the NZD for the currency used by that exchange
- Fundamentals for the stock, including Ask quote (delayed), Bid quote (delayed), Days range, Year range, Book value, EPS (Earnings per Share), PEG Ratio (Price to Earnings Growth ratio), PE Ratio (Price to Earnings ratio), Price to Book ratio and Price to Sales ratio.

###Calculators
- Stock Purchase Calculator - the number of shares that can be purchased at the specified price
- Initial Rate of Return - the rate of return for the specified price and earnings per share
- Currency Converter - converts the specified amount to New Zealand Dollars (NZD) at the specified exchange rate

###Example Screenshot
![Investor Info Centre Screen](/img/AppScreenshot.png)

##Data Providers
- The Investment Snowflake is provided by [Simply Wall St](https://www.simplywall.st/)
- The Currency data is provided by [Free Currency Converter API](http://free.currencyconverterapi.com)
- The Stock Fundamentals data is provided by [Yahoo Finance](http://finance.yahoo.com/)

##Technical Details
This site uses Javascript, JQuery and AJAX.

Yahoo Finance requires ticker symbols that include a "." to be passed in using a "-" instead. The app includes a method to perform this conversion.