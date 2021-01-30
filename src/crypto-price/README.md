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

```bash
# compile
deno compile --import-map=import_map.json --unstable --allow-read --allow-net -o deno-crypto ./src/crypto-price/index.ts

# run in the same folder where `.env` is located
./deno-crypto --symbol ETH --currency EUR
```
