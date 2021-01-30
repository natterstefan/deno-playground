import { assertEquals } from "assertions";
import { createOutput, createUrl } from "./utils.ts";

Deno.test("creates the correct URL", () => {
  assertEquals(
    createUrl("BTC", "USD"),
    new URL(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=USD",
    ),
  );
});

Deno.test("gets the quoted price from the data", () => {
  const data = {
    data: {
      BTC: {
        quote: {
          USD: {
            price: 34180.60329256775,
          },
        },
      },
    },
  };

  assertEquals(
    createOutput(data, { symbol: "BTC", currency: "USD" }),
    "The latest BTC's quote is 34180.60 USD",
  );
});
