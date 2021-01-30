# DENO - Crypo Price

## Setup

- get API key from <https://coinmarketcap.com/api>

## Arguments

- `symbol`: BTC, ETH, ...
- `currency`: USD, EUR, ...

## Commands

```bash
deno run --import-map=import_map.json --allow-read --allow-net --unstable ./src/crypto-price/index.ts --symbol ETH --currency EUR
```

## Compile

- [ ] handle `process.env.COINMARKETCAP_API_KEY`

```bash
deno compile --import-map=import_map.json --unstable ./src/crypto-price/index.ts -o deno-crypto
```
