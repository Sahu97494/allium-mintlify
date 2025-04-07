const fs = require('fs');

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

const docsJson = {
    "$schema": "https://mintlify.com/docs.json",
    "theme": "mint",
    "name": "Allium Documentation Hub",
    "colors": {
      "primary": "#be59c0",
      "light": "#ffffff",
      "dark": "#0a0a0a"
    },
    "favicon": "/favicon.png",
    "navigation": {
      "tabs": [
        {
          "tab": "Welcome",
          "pages": ["homepage"]
        },
        {
          "tab": "Guides",
          "groups": [
            {
              "group": "Welcome to Allium",
              "pages": [
                "guides/index"
              ]
            },
            {
              "group": "Data Products – Real-Time",
              "pages": [
                "guides/data-products-real-time/allium-developer",
                {
                  "group": "Wallet APIs",
                  "pages": [
                    "guides/data-products-real-time/allium-developer/wallet-apis",
                    "guides/data-products-real-time/allium-developer/nft-apis",
                    "guides/data-products-real-time/allium-developer/token-prices-apis"
                  ]
                },
                {
                  "group": "Allium Datastreams",
                  "pages": [
                    "guides/data-products-real-time/allium-datastreams",
                    "guides/data-products-real-time/allium-datastreams/kafka-pubsub",
                    "guides/data-products-real-time/allium-datastreams/kafka-pubsub/getting-started-with-google-pub-sub"
                  ]
                }
              ]
            },
            {
              "group": "Data Products – Analytics",
              "pages": [
                "guides/data-products-analytics/allium-explorer",
                {
                  "group": "Explorer API",
                  "pages": [
                    "guides/data-products-analytics/allium-explorer/explorer-api",
                    {
                      "group": "Explorer API User Tutorial",
                      "pages": [
                        "guides/data-products-analytics/allium-explorer/explorer-api/explorer-api-user-tutorial",
                        "guides/data-products-analytics/allium-explorer/explorer-api/post-get-requests"
                      ]
                    },
                    "guides/data-products-analytics/allium-explorer/query-runner",
                    "guides/data-products-analytics/allium-explorer/data-upload",
                    "guides/data-products-analytics/allium-explorer/visualisations",
                    "guides/data-products-analytics/allium-explorer/allium-ai-assistant"
                  ]
                },
                {
                  "group": "Allium Datashares",
                  "pages": [
                    "guides/data-products-analytics/allium-datashares",
                    "guides/data-products-analytics/allium-datashares/databricks",
                    "guides/data-products-analytics/allium-datashares/snowflake",
                    "guides/data-products-analytics/allium-datashares/bigquery",
                    "guides/data-products-analytics/allium-datashares/s3-gcs",
                    "guides/data-products-analytics/allium-datashares/bi-visualization-tools"
                  ]
                }
              ]
            },
            {
              "group": "Featured Solutions",
              "pages": [
                "guides/featured-solutions/wallets",
                "guides/featured-solutions/dexs",
                "guides/featured-solutions/stablecoins"
              ]
            },
            {
              "group": "Real-time Data (Chains)",
              "pages": [
                "guides/realtime/overview",
                "guides/realtime/overview/data-tips",
                {
                  "group": "[Developer] Supported Chains (13+ chains)",
                  "pages": [
                    "guides/realtime/supported-blockchains",
                    "guides/realtime/supported-blockchains/bitcoin",
                    {
                      "group": "Raw",
                      "pages": [
                        "guides/realtime/supported-blockchains/bitcoin/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/realtime/supported-blockchains/bitcoin/raw/blocks",
                            "guides/realtime/supported-blockchains/bitcoin/raw/transactions",
                            "guides/realtime/supported-blockchains/bitcoin/raw/inputs",
                            "guides/realtime/supported-blockchains/bitcoin/raw/enriched-inputs",
                            "guides/realtime/supported-blockchains/bitcoin/raw/outputs"
                          ]
                        },
                        {
                          "group": "Inscriptions and Rare Sats",
                          "pages": [
                            "guides/realtime/supported-blockchains/bitcoin/inscriptions-and-rare-sats",
                            "guides/realtime/supported-blockchains/bitcoin/inscriptions-and-rare-sats/ordinals-inscription-mints",
                            "guides/realtime/supported-blockchains/bitcoin/inscriptions-and-rare-sats/ordinals-inscription-transfers",
                            "guides/realtime/supported-blockchains/bitcoin/inscriptions-and-rare-sats/ordinals-token-transfers",
                            "guides/realtime/supported-blockchains/bitcoin/inscriptions-and-rare-sats/utxos-with-rare-sats"
                          ]
                        },
                        {
                          "group": "Mempool",
                          "pages": [
                            "guides/realtime/supported-blockchains/bitcoin/mempool",
                            "guides/realtime/supported-blockchains/bitcoin/mempool/transactions",
                            "guides/realtime/supported-blockchains/bitcoin/mempool/inputs",
                            "guides/realtime/supported-blockchains/bitcoin/mempool/outputs"
                          ]
                        }
                      ]
                    },
                    {
                      "group": "Ethereum",
                      "pages": [
                        "guides/realtime/supported-blockchains/ethereum",
                        "guides/realtime/supported-blockchains/ethereum/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/realtime/supported-blockchains/ethereum/raw/blocks",
                            "guides/realtime/supported-blockchains/ethereum/raw/transactions",
                            "guides/realtime/supported-blockchains/ethereum/raw/logs",
                            "guides/realtime/supported-blockchains/ethereum/raw/traces",
                            "guides/realtime/supported-blockchains/ethereum/raw/tokens-data"
                          ]
                        },
                        {
                          "group": "Decoded",
                          "pages": [
                            "guides/realtime/supported-blockchains/ethereum/decoded",
                            "guides/realtime/supported-blockchains/ethereum/decoded/decoded-logs",
                            "guides/realtime/supported-blockchains/ethereum/decoded/decoded-traces"
                          ]
                        },
                        {
                          "group": "Transfers",
                          "pages": [
                            "guides/realtime/supported-blockchains/ethereum/transfers",
                            "guides/realtime/supported-blockchains/ethereum/transfers/erc20-token-transfer",
                            "guides/realtime/supported-blockchains/ethereum/transfers/erc721-token-transfers",
                            "guides/realtime/supported-blockchains/ethereum/transfers/erc1155-token-transfers"
                          ]
                        },
                        {
                          "group": "DEX",
                          "pages": [
                            "guides/realtime/supported-blockchains/ethereum/dex",
                            "guides/realtime/supported-blockchains/ethereum/dex/dex-trades"
                          ]
                        },
                        {
                          "group": "NFTs",
                          "pages": [
                            "guides/realtime/supported-blockchains/ethereum/nfts",
                            "guides/realtime/supported-blockchains/ethereum/nfts/nft-trades"
                          ]
                        },
                        {
                          "group": "Balances",
                          "pages": [
                            "guides/realtime/supported-blockchains/ethereum/balances",
                            "guides/realtime/supported-blockchains/ethereum/balances/fungible-balances",
                            "guides/realtime/supported-blockchains/ethereum/balances/nft-balances"
                          ]
                        }
                      ]
                    },
                    {
                      "group": "Polygon",
                      "pages": [
                        "guides/realtime/supported-blockchains/polygon",
                        "guides/realtime/supported-blockchains/polygon/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/realtime/supported-blockchains/polygon/raw/blocks",
                            "guides/realtime/supported-blockchains/polygon/raw/transactions",
                            "guides/realtime/supported-blockchains/polygon/raw/logs",
                            "guides/realtime/supported-blockchains/polygon/raw/traces",
                            "guides/realtime/supported-blockchains/polygon/raw/tokens-data"
                          ]
                        },
                        {
                          "group": "Decoded",
                          "pages": [
                            "guides/realtime/supported-blockchains/polygon/decoded",
                            "guides/realtime/supported-blockchains/polygon/decoded/decoded-logs",
                            "guides/realtime/supported-blockchains/polygon/decoded/decoded-traces"
                          ]
                        },
                        {
                          "group": "Transfers",
                          "pages": [
                            "guides/realtime/supported-blockchains/polygon/transfers",
                            "guides/realtime/supported-blockchains/polygon/transfers/erc20-token-transfer",
                            "guides/realtime/supported-blockchains/polygon/transfers/erc721-token-transfers",
                            "guides/realtime/supported-blockchains/polygon/transfers/erc1155-token-transfers"
                          ]
                        },
                        {
                          "group": "Balances",
                          "pages": [
                            "guides/realtime/supported-blockchains/polygon/balances",
                            "guides/realtime/supported-blockchains/polygon/balances/fungible-balances",
                            "guides/realtime/supported-blockchains/polygon/balances/nft-balances"
                          ]
                        }
                      ]
                    },
                    {
                      "group": "Arbitrum",
                      "pages": [
                        "guides/realtime/supported-blockchains/arbitrum",
                        "guides/realtime/supported-blockchains/arbitrum/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/realtime/supported-blockchains/arbitrum/raw/blocks",
                            "guides/realtime/supported-blockchains/arbitrum/raw/transactions",
                            "guides/realtime/supported-blockchains/arbitrum/raw/logs",
                            "guides/realtime/supported-blockchains/arbitrum/raw/traces",
                            "guides/realtime/supported-blockchains/arbitrum/raw/tokens-data"
                          ]
                        },
                        {
                          "group": "Transfers",
                          "pages": [
                            "guides/realtime/supported-blockchains/arbitrum/transfers",
                            "guides/realtime/supported-blockchains/arbitrum/transfers/erc20-token-transfer",
                            "guides/realtime/supported-blockchains/arbitrum/transfers/erc721-token-transfers",
                            "guides/realtime/supported-blockchains/arbitrum/transfers/erc1155-token-transfers"
                          ]
                        },
                        {
                          "group": "Balances (beta)",
                          "pages": [
                            "guides/realtime/supported-blockchains/arbitrum/balances-beta",
                            "guides/realtime/supported-blockchains/arbitrum/balances-beta/fungible-balances",
                            "guides/realtime/supported-blockchains/arbitrum/balances-beta/nft-balances"
                          ]
                        }
                      ]
                    },
                    {
                      "group": "Base",
                      "pages": [
                        "guides/realtime/supported-blockchains/base",
                        "guides/realtime/supported-blockchains/base/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/realtime/supported-blockchains/base/raw/blocks",
                            "guides/realtime/supported-blockchains/base/raw/transactions",
                            "guides/realtime/supported-blockchains/base/raw/logs",
                            "guides/realtime/supported-blockchains/base/raw/traces",
                            "guides/realtime/supported-blockchains/base/raw/tokens-data"
                          ]
                        },
                        {
                          "group": "Balances (beta)",
                          "pages": [
                            "guides/realtime/supported-blockchains/base/balances-beta",
                            "guides/realtime/supported-blockchains/base/balances-beta/fungible-balances",
                            "guides/realtime/supported-blockchains/base/balances-beta/nft-balances"
                          ]
                        }
                      ]
                    },
                    {
                      "group": "Optimism",
                      "pages": [
                        "guides/realtime/supported-blockchains/optimism",
                        "guides/realtime/supported-blockchains/optimism/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/realtime/supported-blockchains/optimism/raw/blocks",
                            "guides/realtime/supported-blockchains/optimism/raw/transactions",
                            "guides/realtime/supported-blockchains/optimism/raw/logs",
                            "guides/realtime/supported-blockchains/optimism/raw/traces",
                            "guides/realtime/supported-blockchains/optimism/raw/tokens-data"
                          ]
                        },
                        {
                          "group": "Balances (beta)",
                          "pages": [
                            "guides/realtime/supported-blockchains/optimism/balances-beta",
                            "guides/realtime/supported-blockchains/optimism/balances-beta/fungible-balances",
                            "guides/realtime/supported-blockchains/optimism/balances-beta/nft-balances"
                          ]
                        }
                      ]
                    },
                    {
                      "group": "Oasys",
                      "pages": [
                        "guides/realtime/supported-blockchains/oasys",
                        "guides/realtime/supported-blockchains/oasys/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/realtime/supported-blockchains/oasys/raw/blocks",
                            "guides/realtime/supported-blockchains/oasys/raw/transactions",
                            "guides/realtime/supported-blockchains/oasys/raw/logs"
                          ]
                        }
                      ]
                    },
                    {
                      "group": "Solana",
                      "pages": [
                        "guides/realtime/supported-blockchains/solana",
                        "guides/realtime/supported-blockchains/solana/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/realtime/supported-blockchains/solana/raw/blocks",
                            "guides/realtime/supported-blockchains/solana/raw/transactions",
                            "guides/realtime/supported-blockchains/solana/raw/instructions",
                            "guides/realtime/supported-blockchains/solana/raw/inner-instructions",
                            "guides/realtime/supported-blockchains/solana/raw/pubkey-maps"
                          ]
                        },
                        {
                          "group": "Enriched",
                          "pages": [
                            "guides/realtime/supported-blockchains/solana/enriched",
                            "guides/realtime/supported-blockchains/solana/enriched/assets-fungible-balances-latest",
                            "guides/realtime/supported-blockchains/solana/enriched/token-transfers"
                          ]
                        },
                        "guides/realtime/supported-blockchains/solana/on-demand-datasets"
                      ]
                    }
                  ]
                },
                "guides/realtime/kafka-blockchains-70",
                "guides/realtime/data-delivery-options",
                {
                  "group": "Use Cases",
                  "pages": [
                    "guides/realtime/common-queries",
                    "guides/realtime/common-queries/user-based-common-bitcoin-queries"
                  ]
                }
              ]
            },
            {
              "group": "Historical Data (Chains)",
              "pages": [
                "guides/historical-chains/overview",
                {
                  "group": "Data Quality Verification",
                  "pages": [
                    "guides/historical-chains/overview/data-quality-verification",
                    "guides/historical-chains/overview/data-caveats",
                    "guides/historical-chains/overview/data-freshness",
                    "guides/historical-chains/overview/data-faq",
                    {
                      "group": "Prices",
                      "pages": [
                        "guides/historical-chains/overview/data-faq/prices",
                        "guides/historical-chains/overview/data-faq/decoding",
                        {
                          "group": "Generic Decoded Schema vs Project-Specific Decoding",
                          "pages": [
                            "guides/historical-chains/overview/data-faq/decoding/generic-decoded-schema-vs-project-specific-decoding",
                            "guides/historical-chains/overview/data-faq/decoding/identifying-erc404-tokens",
                            "guides/historical-chains/overview/data-faq/decoding/erc20-erc721-and-erc1155-tokens-coverage",
                            "guides/historical-chains/overview/data-faq/decoding/converting-hexadecimal-strings-to-integers"
                          ]
                        },
                        "guides/historical-chains/overview/data-faq/traces-id-and-address"
                      ]
                    }
                  ]
                },
                {
                  "group": "[Explorer / Datashares] Blockchains (80+)",
                  "pages": [
                    "guides/historical-chains/supported-blockchains",
                    "guides/historical-chains/supported-blockchains/evm",
                    {
                      "group": "🔹Core Schemas",
                      "pages": [
                        "guides/historical-chains/supported-blockchains/evm/core-schemas",
                        {
                          "group": "Raw",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/core-schemas/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/raw/contracts",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/raw/traces-evm-transfers",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/raw/erc20-tokens",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/raw/erc721-tokens",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/raw/erc1155-tokens"
                              ]
                            },
                            {
                              "group": "Decoded",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/decoded",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/decoded/decoded-logs",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/decoded/decoded-traces"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/assets",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances-latest",
                                {
                                  "group": "Native Balances Latest",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances-latest/native-balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances-latest/erc20-balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances-latest/erc721-balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances-latest/erc1155-balances-latest"
                                  ]
                                },
                                {
                                  "group": "Balances",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances/native-balances",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances/erc20-balances",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances/erc721-balances",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/balances/erc1155-balances"
                                  ]
                                },
                                {
                                  "group": "Token Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/transfers",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/transfers/native-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/transfers/erc20-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/transfers/erc721-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/transfers/erc1155-token-transfers"
                                  ]
                                },
                                {
                                  "group": "Credit Debit",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/credit-debit/native-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/credit-debit/erc20-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/credit-debit/erc721-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/assets/credit-debit/erc1155-credit-debit"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "Bridges",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/bridges",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/bridges/transfers"
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/dex",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/core-schemas/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/dex/token-prices-hourly"
                              ]
                            },
                            {
                              "group": "Lending",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/lending",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/lending/tvl-daily",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/lending/interest-rates",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/lending/deposits",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/lending/withdrawals",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/lending/loans",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/lending/repayments",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/lending/liquidations"
                              ]
                            },
                            {
                              "group": "NFTs",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/nfts",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/nfts/mints",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/nfts/trades",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/nfts/wash-trading-flag",
                                "guides/historical-chains/supported-blockchains/evm/core-schemas/nfts/transfers"
                              ]
                            },
                            "guides/historical-chains/supported-blockchains/evm/core-schemas/metrics"
                          ]
                        },
                        {
                          "group": "🔹Ethereum",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/ethereum",
                            "guides/historical-chains/supported-blockchains/evm/ethereum/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ethereum/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/raw/block-reward",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/raw/contracts",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/raw/erc20-tokens",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/raw/erc721-tokens",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/raw/erc1155-tokens"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ethereum/assets",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances",
                                {
                                  "group": "ETH Balances",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances/eth-balances",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances/erc20-balances",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances/erc721-balances",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances/erc1155-balances"
                                  ]
                                },
                                {
                                  "group": "Balances Latest",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances-latest/eth-balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances-latest/erc20-balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances-latest/erc721-balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/balances-latest/erc1155-balances-latest"
                                  ]
                                },
                                {
                                  "group": "Credit Debit",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/credit-debit/eth-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/credit-debit/erc20-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/credit-debit/erc721-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/credit-debit/erc1155-credit-debit"
                                  ]
                                },
                                {
                                  "group": "Token Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/token-transfers/eth-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "Decoded",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ethereum/decoded",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/decoded/decoded-logs",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/decoded/decoded-traces"
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ethereum/dex",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/dex/order-flow",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/dex/uniswap-x-trades",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/dex/dex-pool-events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/dex/dex-pool-events/uniswap-v2",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/dex/dex-pool-events/uniswap-v3",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/dex/dex-pool-events/uniswap-v3/uniswap-v3-virtual-liquidity",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/dex/dex-pool-events/uniswap-v4"
                                  ]
                                },
                                {
                                  "group": "Liquidity Pools",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/dex/liquidity-pools",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/dex/liquidity-pools/uniswap-v2",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/dex/liquidity-pools/uniswap-v3",
                                    "guides/historical-chains/supported-blockchains/evm/ethereum/dex/liquidity-pools/uniswap-v4"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/ethereum/dex/sandwich-trades",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/dex/just-in-time-jit-liquidity-events"
                              ]
                            },
                            "guides/historical-chains/supported-blockchains/evm/ethereum/ens",
                            {
                              "group": "NFTs",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ethereum/nfts",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/nfts/mints",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/nfts/trades",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/nfts/trades/multi-currency-trades",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/nfts/wash-trading-flag",
                                "guides/historical-chains/supported-blockchains/evm/ethereum/nfts/nft-flags"
                              ]
                            },
                            "guides/historical-chains/supported-blockchains/evm/core-schemas/lending",
                            "guides/historical-chains/supported-blockchains/evm/ethereum/wallet-360"
                          ]
                        },
                        {
                          "group": "🔹Beacon Chain",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/beacon-chain",
                            "guides/historical-chains/supported-blockchains/evm/beacon-chain/metrics",
                            "guides/historical-chains/supported-blockchains/evm/beacon-chain/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/raw/block-rewards",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/raw/attestation-rewards",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/raw/attestations",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/raw/deposits",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/raw/sync-committee-rewards",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/raw/validator-duties",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/raw/withdrawals"
                              ]
                            },
                            {
                              "group": "Validator",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/validator",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/validator/queue",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/validator/queue-latest",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/validator/balances",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/validator/balances-latest",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/validator/consensus-income",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/validator/income",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/validator/index",
                                "guides/historical-chains/supported-blockchains/evm/beacon-chain/validator/entities"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Holesky 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/holesky",
                            "guides/historical-chains/supported-blockchains/evm/holesky/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/holesky/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/holesky/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/holesky/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/holesky/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/holesky/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Abstract",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/abstract",
                            "guides/historical-chains/supported-blockchains/evm/abstract/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/abstract/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/abstract/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/abstract/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/abstract/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/abstract/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹ALIENX",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/alienx",
                            "guides/historical-chains/supported-blockchains/evm/alienx/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/alienx/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/alienx/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/alienx/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/alienx/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/alienx/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Aleph Zero",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/aleph-zero",
                            "guides/historical-chains/supported-blockchains/evm/aleph-zero/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/aleph-zero/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/aleph-zero/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/aleph-zero/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/aleph-zero/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/aleph-zero/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Apechain",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/apechain",
                            "guides/historical-chains/supported-blockchains/evm/apechain/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/apechain/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/apechain/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/apechain/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/apechain/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/apechain/raw/contracts"
                              ]
                            },
                            {
                              "group": "NFTs",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/apechain/nfts",
                                "guides/historical-chains/supported-blockchains/evm/apechain/nfts/trades"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Arbitrum",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/arbitrum",
                            "guides/historical-chains/supported-blockchains/evm/arbitrum/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/raw/contracts",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/raw/erc20-tokens",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/raw/erc721-tokens",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/raw/erc1155-tokens"
                              ]
                            },
                            {
                              "group": "Decoded",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/decoded",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/decoded/decoded-logs",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/decoded/decoded-traces"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/assets",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/assets/token-transfers",
                                {
                                  "group": "ETH Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/arbitrum/assets/token-transfers/eth-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/arbitrum/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/arbitrum/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/arbitrum/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/dex",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/arbitrum/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/arbitrum/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/arbitrum/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/dex/token-prices-hourly"
                              ]
                            },
                            {
                              "group": "NFTs",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/nfts",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum/nfts/trades"
                              ]
                            },
                            "guides/historical-chains/supported-blockchains/evm/core-schemas/lending"
                          ]
                        },                
                        {
                          "group": "🔹Arbitrum Nova",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/arbitrum-nova",
                            "guides/historical-chains/supported-blockchains/evm/arbitrum-nova/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-nova/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-nova/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-nova/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-nova/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-nova/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Arbitrum Sepolia",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/arbitrum-sepolia",
                            "guides/historical-chains/supported-blockchains/evm/arbitrum-sepolia/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-sepolia/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-sepolia/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-sepolia/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-sepolia/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/arbitrum-sepolia/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Astar 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/astar",
                            "guides/historical-chains/supported-blockchains/evm/astar/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/astar/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/astar/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/astar/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/astar/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/astar/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Avalanche",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/avalanche",
                            "guides/historical-chains/supported-blockchains/evm/avalanche/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/avalanche/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/raw/subnet-transactions",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/raw/contracts",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/raw/erc20-tokens",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/raw/erc721-tokens",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/raw/erc1155-tokens"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/avalanche/assets",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/assets/token-transfers",
                                {
                                  "group": "AVAX Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/token-transfers/avax-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/token-transfers/erc1155-transfers"
                                  ]
                                },
                                {
                                  "group": "Balances",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/balances",
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/balances/erc721-balances",
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/balances/erc1155-balances"
                                  ]
                                },
                                {
                                  "group": "Balances Latest",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/balances-latest/erc721-balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/assets/balances-latest/erc1155-balances-latest"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "Decoded",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/avalanche/decoded",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/decoded/decoded-logs",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/decoded/decoded-traces"
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/avalanche/dex",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/avalanche/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/avalanche/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/avalanche/dex/token-prices-hourly"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹B3",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/b3",
                            "guides/historical-chains/supported-blockchains/evm/b3/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/b3/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/b3/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/b3/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/b3/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/b3/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/b3/assets",
                                "guides/historical-chains/supported-blockchains/evm/b3/assets/token-transfers",
                                "guides/historical-chains/supported-blockchains/evm/b3/assets/balances",
                                "guides/historical-chains/supported-blockchains/evm/b3/assets/credit-debit"
                              ]
                            },
                            {
                              "group": "NFTs",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/b3/nfts",
                                "guides/historical-chains/supported-blockchains/evm/b3/nfts/trades",
                                "guides/historical-chains/supported-blockchains/evm/b3/nfts/mints"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Base",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/base",
                            "guides/historical-chains/supported-blockchains/evm/base/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/base/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/base/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/base/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/base/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/base/raw/contracts"
                              ]
                            },
                            {
                              "group": "Decoded",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/base/decoded",
                                "guides/historical-chains/supported-blockchains/evm/base/decoded/decoded-logs",
                                "guides/historical-chains/supported-blockchains/evm/base/decoded/decoded-traces"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/base/assets",
                                "guides/historical-chains/supported-blockchains/evm/base/assets/balances",
                                {
                                  "group": "Balances Latest",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/base/assets/balances/balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/base/assets/balances/balances"
                                  ]
                                },
                                {
                                  "group": "Token Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/base/assets/token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/base/assets/token-transfers/eth-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/base/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/base/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/base/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/base/dex",
                                "guides/historical-chains/supported-blockchains/evm/base/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/base/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/base/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/base/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/base/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/base/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/base/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/base/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/base/dex/token-prices-hourly"
                              ]
                            },
                            {
                              "group": "NFTs",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/base/nfts",
                                "guides/historical-chains/supported-blockchains/evm/base/nfts/mints",
                                "guides/historical-chains/supported-blockchains/evm/base/nfts/trades"
                              ]
                            },
                            "guides/historical-chains/supported-blockchains/evm/core-schemas/lending",
                            "guides/historical-chains/supported-blockchains/evm/base/wallet-360"
                          ]
                        },
                        {
                          "group": "🔹Berachain",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/berachain",
                            "guides/historical-chains/supported-blockchains/evm/berachain/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/berachain/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/berachain/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/berachain/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/berachain/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/berachain/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/berachain/assets",
                                "guides/historical-chains/supported-blockchains/evm/berachain/assets/token-transfers"
                              ]
                            },
                            {
                              "group": "NFTs",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/berachain/nfts",
                                "guides/historical-chains/supported-blockchains/evm/berachain/nfts/trades"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Blast",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/blast",
                            "guides/historical-chains/supported-blockchains/evm/blast/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/blast/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/blast/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/blast/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/blast/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/blast/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/blast/assets",
                                "guides/historical-chains/supported-blockchains/evm/blast/assets/token-transfers",
                                {
                                  "group": "ERC20 Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/blast/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/blast/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/blast/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/blast/dex",
                                "guides/historical-chains/supported-blockchains/evm/blast/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/blast/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/blast/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/blast/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/blast/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/blast/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/blast/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/blast/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/blast/dex/token-prices-hourly"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹BNB Smart Chain (BSC)",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc",
                            "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/raw/contracts",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/raw/erc20-tokens",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/raw/erc721-token",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/raw/erc1155-tokens"
                              ]
                            },
                            {
                              "group": "Decoded",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/decoded",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/decoded/decoded-logs",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/decoded/decoded-traces"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/assets",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/assets/token-transfers",
                                {
                                  "group": "BNB Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/assets/token-transfers/bnb-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/bnb-smart-chain-bsc/dex/token-prices-hourly"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Celo",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/celo",
                            "guides/historical-chains/supported-blockchains/evm/celo/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/celo/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/celo/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/celo/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/celo/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/celo/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/celo/assets",
                                "guides/historical-chains/supported-blockchains/evm/celo/assets/token-transfers",
                                {
                                  "group": "ERC20 Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/celo/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/celo/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/celo/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/celo/dex",
                                "guides/historical-chains/supported-blockchains/evm/celo/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/celo/dex/pools"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Degen",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/degen",
                            "guides/historical-chains/supported-blockchains/evm/degen/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/degen/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/degen/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/degen/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/degen/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/degen/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Fantom",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/fantom",
                            "guides/historical-chains/supported-blockchains/evm/fantom/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/fantom/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/fantom/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/fantom/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/fantom/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/fantom/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/fantom/assets",
                                "guides/historical-chains/supported-blockchains/evm/fantom/assets/token-transfers",
                                {
                                  "group": "ERC20 Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/fantom/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/fantom/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/fantom/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/fantom/dex",
                                "guides/historical-chains/supported-blockchains/evm/fantom/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/fantom/dex/pools"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Fraxtal",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/fraxtal",
                            "guides/historical-chains/supported-blockchains/evm/fraxtal/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/fraxtal/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/fraxtal/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/fraxtal/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/fraxtal/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/fraxtal/raw/contracts"
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/fraxtal/dex",
                                "guides/historical-chains/supported-blockchains/evm/fraxtal/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/fraxtal/dex/pools"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Gnosis",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/gnosis",
                            "guides/historical-chains/supported-blockchains/evm/gnosis/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/gnosis/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/gnosis/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/gnosis/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/gnosis/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/gnosis/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/gnosis/assets",
                                "guides/historical-chains/supported-blockchains/evm/gnosis/assets/token-transfers",
                                {
                                  "group": "ERC20 Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/gnosis/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/gnosis/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/gnosis/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            }
                          ]
                        },                
                        {
                          "group": "🔹HyperEVM 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/hyperevm",
                            "guides/historical-chains/supported-blockchains/evm/hyperevm/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/hyperevm/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/hyperevm/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/hyperevm/raw/logs"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹IMX zkEVM",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/imx-zkevm",
                            "guides/historical-chains/supported-blockchains/evm/imx-zkevm/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/imx-zkevm/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/imx-zkevm/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/imx-zkevm/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/imx-zkevm/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/imx-zkevm/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/imx-zkevm/assets",
                                "guides/historical-chains/supported-blockchains/evm/imx-zkevm/assets/token-transfers",
                                {
                                  "group": "ERC20 Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/imx-zkevm/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/imx-zkevm/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/imx-zkevm/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Ink",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/ink",
                            "guides/historical-chains/supported-blockchains/evm/ink/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ink/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/ink/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/ink/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/ink/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/ink/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ink/assets",
                                "guides/historical-chains/supported-blockchains/evm/ink/assets/transfers",
                                {
                                  "group": "Native Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ink/assets/transfers/native-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/ink/assets/transfers/erc20-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/ink/assets/transfers/erc721-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/ink/assets/transfers/erc1155-token-transfers"
                                  ]
                                },
                                {
                                  "group": "Credit Debit",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ink/assets/credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/ink/assets/credit-debit/native-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/ink/assets/credit-debit/erc20-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/ink/assets/credit-debit/erc721-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/ink/assets/credit-debit/erc1155-credit-debit"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ink/dex",
                                "guides/historical-chains/supported-blockchains/evm/ink/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/ink/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/ink/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/ink/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ink/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/ink/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/ink/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/ink/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/ink/dex/token-prices-hourly"
                              ]
                            },
                            "historical-chains/supported-blockchains/evm/core-schemas/lending"
                          ]
                        },
                        {
                          "group": "🔹Manta Pacific",
                          "pages": [
                            "guide/historical-chains/supported-blockchains/evm/manta-pacific",
                            "guide/historical-chains/supported-blockchains/evm/manta-pacific/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guide/historical-chains/supported-blockchains/evm/manta-pacific/raw/blocks",
                                "guide/historical-chains/supported-blockchains/evm/manta-pacific/raw/transactions",
                                "guide/historical-chains/supported-blockchains/evm/manta-pacific/raw/logs",
                                "guide/historical-chains/supported-blockchains/evm/manta-pacific/raw/traces",
                                "guide/historical-chains/supported-blockchains/evm/manta-pacific/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Mantle 🌱",
                          "pages": [
                            "guide/historical-chains/supported-blockchains/evm/mantle",
                            "guide/historical-chains/supported-blockchains/evm/mantle/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guide/historical-chains/supported-blockchains/evm/mantle/raw/blocks",
                                "guide/historical-chains/supported-blockchains/evm/mantle/raw/transactions",
                                "guide/historical-chains/supported-blockchains/evm/mantle/raw/logs",
                                "guide/historical-chains/supported-blockchains/evm/mantle/raw/traces",
                                "guide/historical-chains/supported-blockchains/evm/mantle/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Metis",
                          "pages": [
                            "guide/historical-chains/supported-blockchains/evm/metis",
                            "guide/historical-chains/supported-blockchains/evm/metis/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guide/historical-chains/supported-blockchains/evm/metis/raw/blocks",
                                "guide/historical-chains/supported-blockchains/evm/metis/raw/transactions",
                                "guide/historical-chains/supported-blockchains/evm/metis/raw/logs",
                                "guide/historical-chains/supported-blockchains/evm/metis/raw/traces",
                                "guide/historical-chains/supported-blockchains/evm/metis/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Mode",
                          "pages": [
                            "guide/historical-chains/supported-blockchains/evm/mode",
                            "guide/historical-chains/supported-blockchains/evm/mode/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guide/historical-chains/supported-blockchains/evm/mode/raw/blocks",
                                "guide/historical-chains/supported-blockchains/evm/mode/raw/transactions",
                                "guide/historical-chains/supported-blockchains/evm/mode/raw/logs",
                                "guide/historical-chains/supported-blockchains/evm/mode/raw/traces",
                                "guide/historical-chains/supported-blockchains/evm/mode/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Polygon",
                          "pages": [
                            "guide/historical-chains/supported-blockchains/evm/polygon",
                            "guide/historical-chains/supported-blockchains/evm/polygon/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guide/historical-chains/supported-blockchains/evm/polygon/raw/blocks",
                                "guide/historical-chains/supported-blockchains/evm/polygon/raw/transactions",
                                "guide/historical-chains/supported-blockchains/evm/polygon/raw/logs",
                                "guide/historical-chains/supported-blockchains/evm/polygon/raw/traces",
                                "guide/historical-chains/supported-blockchains/evm/polygon/raw/contracts",
                                "guide/historical-chains/supported-blockchains/evm/polygon/raw/erc20-tokens",
                                "guide/historical-chains/supported-blockchains/evm/polygon/raw/erc721-tokens",
                                "guide/historical-chains/supported-blockchains/evm/polygon/raw/erc1155-tokens"
                              ]
                            },
                            {
                              "group": "Decoded",
                              "pages": [
                                "guide/historical-chains/supported-blockchains/evm/polygon/decoded",
                                "guide/historical-chains/supported-blockchains/evm/polygon/decoded/decoded-logs",
                                "guide/historical-chains/supported-blockchains/evm/polygon/decoded/decoded-traces"
                              ]
                            },
                            "guide/historical-chains/supported-blockchains/evm/polygon/wallet-360",
                            {
                              "group": "Assets",
                              "pages": [
                                "guide/historical-chains/supported-blockchains/evm/polygon/assets",
                                "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances",
                                {
                                  "group": "MATIC Balances",
                                  "pages": [
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances/matic-balances",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances/erc20-balances",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances/erc721-balances",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances/erc1155-balances"
                                  ]
                                },
                                {
                                  "group": "Balances Latest",
                                  "pages": [
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances-latest",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances-latest/eth-balances-latest",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances-latest/erc20-balances-latest",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances-latest/erc721-balances-latest",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/balances-latest/erc1155-balances-latest"
                                  ]
                                },
                                {
                                  "group": "Credit Debit",
                                  "pages": [
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/credit-debit",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/credit-debit/matic-credit-debit",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/credit-debit/erc20-credit-debit",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/credit-debit/erc721-credit-debit",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/credit-debit/erc1155-credit-debit"
                                  ]
                                },
                                {
                                  "group": "Token Transfers",
                                  "pages": [
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/token-transfers",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/token-transfers/matic-transfers",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/token-transfers/erc20-transfers",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/token-transfers/erc721-transfer",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guide/historical-chains/supported-blockchains/evm/polygon/dex",
                                "guide/historical-chains/supported-blockchains/evm/polygon/dex/trades",
                                "guide/historical-chains/supported-blockchains/evm/polygon/dex/pools",
                                "guide/historical-chains/supported-blockchains/evm/polygon/dex/aggregator-trades",
                                "guide/historical-chains/supported-blockchains/evm/polygon/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guide/historical-chains/supported-blockchains/evm/polygon/dex/events/uniswap-v2-events",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/dex/events/uniswap-v3-events",
                                    "guide/historical-chains/supported-blockchains/evm/polygon/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guide/historical-chains/supported-blockchains/evm/polygon/dex/orderflow",
                                "guide/historical-chains/supported-blockchains/evm/polygon/dex/token-prices-hourly"
                              ]
                            },
                            {
                              "group": "NFTs",
                              "pages": [
                                "guide/historical-chains/supported-blockchains/evm/polygon/nfts",
                                "guide/historical-chains/supported-blockchains/evm/polygon/nfts/mints",
                                "guide/historical-chains/supported-blockchains/evm/polygon/nfts/trades",
                                "guide/historical-chains/supported-blockchains/evm/polygon/nfts/wash-trading-flag",
                                "guide/historical-chains/supported-blockchains/evm/polygon/nfts/nft-flags"
                              ]
                            }
                          ]
                        },                
                        {
                          "group": "🔹Polygon zkEVM",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/polygon-zkevm",
                            "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/assets",
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/assets/token-transfers",
                                {
                                  "group": "ETH Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/assets/token-transfers/eth-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/dex",
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/polygon-zkevm/dex/pools"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Proof of Play Apex 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/proof-of-play-apex",
                            "guides/historical-chains/supported-blockchains/evm/proof-of-play-apex/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-apex/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-apex/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-apex/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-apex/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-apex/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Proof of Play Boss 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/proof-of-play-boss",
                            "guides/historical-chains/supported-blockchains/evm/proof-of-play-boss/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-boss/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-boss/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-boss/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-boss/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/proof-of-play-boss/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Real",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/real",
                            "guides/historical-chains/supported-blockchains/evm/real/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/real/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/real/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/real/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/real/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/real/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Reya",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/reya",
                            "guides/historical-chains/supported-blockchains/evm/reya/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/reya/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/reya/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/reya/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/reya/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/reya/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Ronin 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/ronin",
                            "guides/historical-chains/supported-blockchains/evm/ronin/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ronin/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/ronin/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/ronin/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/ronin/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/ronin/raw/contracts"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/ronin/assets",
                                "guides/historical-chains/supported-blockchains/evm/ronin/assets/token-transfers",
                                {
                                  "group": "ERC20 Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/ronin/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/ronin/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/ronin/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Sanko",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/sanko",
                            "guides/historical-chains/supported-blockchains/evm/sanko/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/sanko/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/sanko/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/sanko/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/sanko/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/sanko/raw/contracts"
                              ]
                            }
                          ]
                        },                
                        {
                          "group": "🔹Scroll",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/scroll",
                            "guides/historical-chains/supported-blockchains/evm/scroll/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/scroll/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/scroll/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/scroll/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/scroll/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/scroll/raw/contracts"
                              ]
                            },
                            {
                              "group": "Decoded",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/scroll/decoded",
                                "guides/historical-chains/supported-blockchains/evm/scroll/decoded/decoded-traces"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/scroll/assets",
                                "guides/historical-chains/supported-blockchains/evm/scroll/assets/token-transfers",
                                {
                                  "group": "ETH Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/scroll/assets/token-transfers/eth-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/scroll/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/scroll/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/scroll/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/scroll/dex",
                                "guides/historical-chains/supported-blockchains/evm/scroll/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/scroll/dex/pools"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Scroll Sepolia",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/scroll-sepolia",
                            "guides/historical-chains/supported-blockchains/evm/scroll-sepolia/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/scroll-sepolia/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/scroll-sepolia/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/scroll-sepolia/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/scroll-sepolia/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/scroll-sepolia/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Sei 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/sei",
                            "guides/historical-chains/supported-blockchains/evm/sei/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/sei/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/sei/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/sei/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/sei/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/sei/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Soneium",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/soneium",
                            "guides/historical-chains/supported-blockchains/evm/soneium/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/soneium/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/soneium/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/soneium/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/soneium/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/soneium/raw/contracts"
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/soneium/dex",
                                "guides/historical-chains/supported-blockchains/evm/soneium/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/soneium/dex/token-prices-hourly"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Sonic",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/sonic",
                            "guides/historical-chains/supported-blockchains/evm/sonic/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/sonic/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/sonic/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/sonic/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/sonic/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/sonic/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Superposition",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/superposition",
                            "guides/historical-chains/supported-blockchains/evm/superposition/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/superposition/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/superposition/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/superposition/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/superposition/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/superposition/raw/contracts"
                              ]
                            }
                          ]
                        },                
                        {
                          "group": "🔹Starknet 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/starknet",
                            "guides/historical-chains/supported-blockchains/evm/starknet/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/starknet/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/starknet/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/starknet/raw/messages",
                                "guides/historical-chains/supported-blockchains/evm/starknet/raw/events"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Tron",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/tron",
                            "guides/historical-chains/supported-blockchains/evm/tron/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/tron/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/tron/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/tron/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/tron/raw/contracts",
                                "guides/historical-chains/supported-blockchains/evm/tron/raw/traces-native",
                                "guides/historical-chains/supported-blockchains/evm/tron/raw/transactions-native"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/tron/assets",
                                "guides/historical-chains/supported-blockchains/evm/tron/assets/balances",
                                {
                                  "group": "TRX Balances",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/balances/trx-balances",
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/balances/trc20-balances"
                                  ]
                                },
                                {
                                  "group": "Balances Latest",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/balances-latest",
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/balances-latest/trc20-balances-latest"
                                  ]
                                },
                                {
                                  "group": "Credit Debit",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/credit-debit/trx-credit-debit"
                                  ]
                                },
                                {
                                  "group": "Token Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/token-transfers/trx-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/token-transfers/trc10-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/tron/assets/token-transfers/trc20-token-transfers"
                                  ]
                                }
                              ]
                            },
                            "guides/historical-chains/supported-blockchains/evm/tron/staking",
                            "guides/historical-chains/supported-blockchains/evm/tron/identity",
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/tron/dex",
                                "guides/historical-chains/supported-blockchains/evm/tron/dex/trades"
                              ]
                            }
                          ]
                        },                
                        {
                          "group": "🔹Unichain",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/unichain",
                            "guides/historical-chains/supported-blockchains/evm/unichain/assets",
                            {
                              "group": "Balances",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/unichain/assets/balances",
                                {
                                  "group": "Native Balances",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/balances/native-balances",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/balances/erc20-balances"
                                  ]
                                },
                                {
                                  "group": "Token Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/transfers",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/transfers/native-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/transfers/erc20-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/transfers/erc721-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/transfers/erc1155-token-transfers"
                                  ]
                                },
                                {
                                  "group": "Credit Debit",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/credit-debit/native-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/credit-debit/erc20-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/credit-debit/erc721-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/assets/credit-debit/erc1155-credit-debit"
                                  ]
                                }
                              ]
                            },
                            "guides/historical-chains/supported-blockchains/evm/unichain/metrics",
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/unichain/dex",
                                "guides/historical-chains/supported-blockchains/evm/unichain/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/unichain/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/unichain/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/unichain/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/unichain/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/unichain/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/unichain/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/unichain/dex/token-prices-hourly"
                              ]
                            },
                            {
                              "group": "Bridges",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/unichain/bridges",
                                "guides/historical-chains/supported-blockchains/evm/unichain/bridges/transfers"
                              ]
                            }
                          ]
                        },                
                        {
                          "group": "🔹WeMix 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/wemix",
                            "guides/historical-chains/supported-blockchains/evm/wemix/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/wemix/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/wemix/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/wemix/raw/logs"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Worldchain",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/worldchain",
                            "guides/historical-chains/supported-blockchains/evm/worldchain/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/worldchain/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/raw/contracts",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/raw/erc20-tokens",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/raw/erc721-tokens",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/raw/erc1155-tokens"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/worldchain/assets",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/assets/transfers",
                                {
                                  "group": "Native Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/assets/transfers/native-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/assets/transfers/erc20-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/assets/transfers/erc721-token-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/assets/transfers/erc1155-token-transfers"
                                  ]
                                },
                                {
                                  "group": "Credit Debit",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/assets/credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/assets/credit-debit/native-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/assets/credit-debit/erc20-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/assets/credit-debit/erc721-credit-debit",
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/assets/credit-debit/erc1155-credit-debit"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "Bridges",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/worldchain/bridges",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/bridges/transfers"
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/worldchain/dex",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/worldchain/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/worldchain/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/worldchain/dex/token-prices-hourly"
                              ]
                            },
                            "guides/historical-chains/supported-blockchains/evm/worldchain/metrics"
                          ]
                        },
                        {
                          "group": "🔹zkSync",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/zksync",
                            "guides/historical-chains/supported-blockchains/evm/zksync/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/zksync/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/zksync/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/zksync/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/zksync/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/zksync/raw/contracts"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Zora",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/evm/zora",
                            "guides/historical-chains/supported-blockchains/evm/zora/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/zora/raw/blocks",
                                "guides/historical-chains/supported-blockchains/evm/zora/raw/transactions",
                                "guides/historical-chains/supported-blockchains/evm/zora/raw/logs",
                                "guides/historical-chains/supported-blockchains/evm/zora/raw/traces",
                                "guides/historical-chains/supported-blockchains/evm/zora/raw/contracts"
                              ]
                            },
                            {
                              "group": "Decoded",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/zora/decoded",
                                "guides/historical-chains/supported-blockchains/evm/zora/decoded/decoded-logs"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/zora/assets",
                                "guides/historical-chains/supported-blockchains/evm/zora/assets/token-transfers",
                                {
                                  "group": "ERC20 Transfers",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/zora/assets/token-transfers/erc20-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/zora/assets/token-transfers/erc721-transfers",
                                    "guides/historical-chains/supported-blockchains/evm/zora/assets/token-transfers/erc1155-transfers"
                                  ]
                                }
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/zora/dex",
                                "guides/historical-chains/supported-blockchains/evm/zora/dex/trades",
                                "guides/historical-chains/supported-blockchains/evm/zora/dex/pools",
                                "guides/historical-chains/supported-blockchains/evm/zora/dex/aggregator-trades",
                                "guides/historical-chains/supported-blockchains/evm/zora/dex/events",
                                {
                                  "group": "Uniswap v2",
                                  "pages": [
                                    "guides/historical-chains/supported-blockchains/evm/zora/dex/events/uniswap-v2-events",
                                    "guides/historical-chains/supported-blockchains/evm/zora/dex/events/uniswap-v3-events",
                                    "guides/historical-chains/supported-blockchains/evm/zora/dex/events/uniswap-v4-events"
                                  ]
                                },
                                "guides/historical-chains/supported-blockchains/evm/zora/dex/orderflow",
                                "guides/historical-chains/supported-blockchains/evm/zora/dex/token-prices-hourly"
                              ]
                            },
                            {
                              "group": "NFTs",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/evm/zora/nfts",
                                "guides/historical-chains/supported-blockchains/evm/zora/nfts/mints",
                                "guides/historical-chains/supported-blockchains/evm/zora/nfts/transfers",
                                "guides/historical-chains/supported-blockchains/evm/zora/nfts/transfers"
                              ]
                            }
                          ]
                        }                
                      ]
                    },
                    {
                      "group": "Cosmos Ecosystem",
                      "pages": [
                        "guides/historical-chains/supported-blockchains/cosmos-ecosystem",
                        "guides/historical-chains/supported-blockchains/cosmos-ecosystem/cosmos",
                        {
                          "group": "Raw",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/cosmos-ecosystem/cosmos/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/cosmos/raw/blocks",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/cosmos/raw/transactions",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/cosmos/raw/events",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/cosmos/raw/event-attributes"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔸Provenance",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/cosmos-ecosystem/provenance",
                            "guides/historical-chains/supported-blockchains/cosmos-ecosystem/provenance/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/provenance/raw/blocks",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/provenance/raw/transactions",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/provenance/raw/events",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/provenance/raw/event-attributes"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔸Osmosis 🌱",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/cosmos-ecosystem/osmosis",
                            "guides/historical-chains/supported-blockchains/cosmos-ecosystem/osmosis/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/osmosis/raw/blocks",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/osmosis/raw/transactions",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/osmosis/raw/events",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/osmosis/raw/event-attributes",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/osmosis/raw/block-events",
                                "guides/historical-chains/supported-blockchains/cosmos-ecosystem/osmosis/raw/block-event-attributes"
                              ]
                            }
                          ]
                        }
                      ]
                    },            
                    {
                      "group": "Bitcoin Ecosystem",
                      "pages": [
                        "guides/historical-chains/supported-blockchains/bitcoin-ecosystem",
                        "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin",
                        {
                          "group": "Raw",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/raw/blocks",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/raw/transactions",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/raw/inputs",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/raw/outputs"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/assets",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/assets/inscription-transfers",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/assets/balances",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/assets/credit-debit",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/assets/latest-balances"
                              ]
                            },
                            {
                              "group": "NFTs",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/nfts",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/nfts/trades",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/nfts/mints",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/nfts/ordinals-inscriptions",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/bitcoin/nfts/ordinals-collections"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔸Stacks",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/stacks",
                            "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/stacks/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/stacks/raw/blocks",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/stacks/raw/transactions",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/stacks/raw/events"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔹Rootstock",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/rootstock",
                            "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/rootstock/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/rootstock/raw/blocks",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/rootstock/raw/transactions",
                                "guides/historical-chains/supported-blockchains/bitcoin-ecosystem/rootstock/raw/logs"
                              ]
                            }
                          ]
                        }
                      ]
                    },            
                    {
                      "group": "Move Ecosystem",
                      "pages": [
                        "guides/historical-chains/supported-blockchains/move-ecosystem",
                        "guides/historical-chains/supported-blockchains/move-ecosystem/aptos",
                        {
                          "group": "Raw",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/move-ecosystem/aptos/raw",
                            {
                              "group": "Blocks",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/move-ecosystem/aptos/raw/blocks",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/aptos/raw/transactions",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/aptos/raw/events",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/aptos/raw/changes"
                              ]
                            }
                          ]
                        },
                        {
                          "group": "🔸Sui",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/move-ecosystem/sui",
                            "guides/historical-chains/supported-blockchains/move-ecosystem/sui/raw",
                            {
                              "group": "Checkpoints",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/raw/checkpoints",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/raw/transaction-blocks",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/raw/transactions",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/raw/events",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/raw/object-changes",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/raw/balance-changes",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/raw/fungible-tokens"
                              ]
                            },
                            {
                              "group": "Assets",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/assets",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/assets/fungible-transfers"
                              ]
                            },
                            {
                              "group": "DEX",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/dex",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/dex/trades",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/dex/token-prices-hourly"
                              ]
                            },
                            {
                              "group": "Staking",
                              "pages": [
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/staking",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/staking/overview",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/staking/validator-rewards",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/staking/validator-stake-latest",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/staking/deposits",
                                "guides/historical-chains/supported-blockchains/move-ecosystem/sui/staking/withdrawals"
                              ]
                            }
                          ]
                        }
                      ]
                    },            
                    {
                      "group": "Solana",
                      "pages": [
                        "guides/historical-chains/supported-blockchains/solana",
                        "guides/historical-chains/supported-blockchains/solana/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/solana/raw/blocks",
                            "guides/historical-chains/supported-blockchains/solana/raw/transactions",
                            "guides/historical-chains/supported-blockchains/solana/raw/instructions",
                            "guides/historical-chains/supported-blockchains/solana/raw/inner-instructions",
                            "guides/historical-chains/supported-blockchains/solana/raw/rewards",
                            "guides/historical-chains/supported-blockchains/solana/raw/fees"
                          ]
                        },
                        {
                          "group": "Decoded",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/solana/decoded",
                            "guides/historical-chains/supported-blockchains/solana/decoded/decoded-instructions",
                            "guides/historical-chains/supported-blockchains/solana/decoded/decoded-events"
                          ]
                        },
                        {
                          "group": "Assets",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/solana/assets",
                            "guides/historical-chains/supported-blockchains/solana/assets/balances",
                            "guides/historical-chains/supported-blockchains/solana/assets/transfers",
                            "guides/historical-chains/supported-blockchains/solana/assets/credit-debit",
                            "guides/historical-chains/supported-blockchains/solana/assets/balance-changes"
                          ]
                        },
                        {
                          "group": "NFTs",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/solana/nfts",
                            "guides/historical-chains/supported-blockchains/solana/nfts/mints",
                            "guides/historical-chains/supported-blockchains/solana/nfts/trades"
                          ]
                        },
                        {
                          "group": "Prices",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/solana/prices",
                            "guides/historical-chains/supported-blockchains/solana/prices/dex-token-prices-hourly"
                          ]
                        },
                        {
                          "group": "Dex",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/solana/dex",
                            "guides/historical-chains/supported-blockchains/solana/dex/trades",
                            "guides/historical-chains/supported-blockchains/solana/dex/aggregator-trades",
                            "guides/historical-chains/supported-blockchains/solana/dex/pools",
                            "guides/historical-chains/supported-blockchains/solana/dex/tvl-total-value-locked"
                          ]
                        },
                        {
                          "group": "Defi",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/solana/defi",
                            "guides/historical-chains/supported-blockchains/solana/defi/farms",
                            "guides/historical-chains/supported-blockchains/solana/defi/rewards-claimed",
                            "guides/historical-chains/supported-blockchains/solana/defi/fees-claimed"
                          ]
                        }
                      ]
                    },            
                    {
                      "group": "Near",
                      "pages": [
                        "guides/historical-chains/supported-blockchains/near",
                        "guides/historical-chains/supported-blockchains/near/assets",
                        {
                          "group": "NEAR Token Transfers",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/near/assets/near-token-transfers",
                            "guides/historical-chains/supported-blockchains/near/assets/ft-token-transfers"
                          ]
                        },
                        {
                          "group": "Raw",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/near/raw",
                            "guides/historical-chains/supported-blockchains/near/raw/blocks",
                            "guides/historical-chains/supported-blockchains/near/raw/chunks",
                            "guides/historical-chains/supported-blockchains/near/raw/transactions",
                            "guides/historical-chains/supported-blockchains/near/raw/receipts",
                            "guides/historical-chains/supported-blockchains/near/raw/transaction-actions",
                            "guides/historical-chains/supported-blockchains/near/raw/receipt-outcomes"
                          ]
                        }
                      ]
                    },
                    {
                      "group": "TON",
                      "pages": [
                        "guides/historical-chains/supported-blockchains/ton",
                        "guides/historical-chains/supported-blockchains/ton/raw",
                        {
                          "group": "Blocks",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/ton/raw/blocks",
                            "guides/historical-chains/supported-blockchains/ton/raw/transactions",
                            "guides/historical-chains/supported-blockchains/ton/raw/messages"
                          ]
                        },
                        {
                          "group": "Assets",
                          "pages": [
                            "guides/historical-chains/supported-blockchains/ton/assets",
                            "guides/historical-chains/supported-blockchains/ton/assets/ton-transfers",
                            "guides/historical-chains/supported-blockchains/ton/assets/jetton-transfers"
                          ]
                        }
                      ]
                    },
                    "guides/historical-chains/supported-blockchains/hedera",
                    "guides/historical-chains/supported-blockchains/hyperliquid"
                  ]
                },
                "guides/historical-chains/data-delivery-interfaces"
              ]
            },
            {
              "group": "Historical Data (Verticals)",
              "pages": [
                "guides/historical-verticals/wallet-360",
                "guides/historical-verticals/wallet-360/table-columns",
                "guides/historical-verticals/chain-metrics",
                "guides/historical-verticals/stablecoins",
                {
                  "group": "Bridges",
                  "pages": [
                    "guides/historical-verticals/bridges",
                    "guides/historical-verticals/bridges/wormhole"
                  ]
                },
                "guides/historical-verticals/lending",
                "guides/historical-verticals/dex-trades",
                {
                  "group": "NFT Trades",
                  "pages": [
                    "guides/historical-verticals/nft-trades",
                    "guides/historical-verticals/nft-trades/wash-trading-flags"
                  ]
                },
                "guides/historical-verticals/token-transfers",
                "guides/historical-verticals/balances",
                {
                  "group": "Prices",
                  "pages": [
                    "guides/historical-verticals/prices",
                    "guides/historical-verticals/prices/token-prices-hourly",
                    "guides/historical-verticals/prices/dex-token-prices-hourly"
                  ]
                },
                "guides/historical-verticals/identity",
                "guides/historical-verticals/decoded",
                {
                  "group": "DefiLlama",
                  "pages": [
                    "guides/historical-verticals/defillama",
                    "guides/historical-verticals/defillama/tvl",
                    {
                      "group": "Historical Token Amounts per Protocol",
                      "pages": [
                        "guides/historical-verticals/defillama/tvl/historical-token-amounts-per-protocol",
                        "guides/historical-verticals/defillama/tvl/historical-token-values-per-protocol",
                        "guides/historical-verticals/defillama/tvl/historical-tvl-per-protocol",
                        "guides/historical-verticals/defillama/tvl/historical-token-amounts-per-chain",
                        "guides/historical-verticals/defillama/tvl/historical-token-values-per-chain",
                        "guides/historical-verticals/defillama/tvl/historical-tvl-per-chain"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "tab": "API Reference",
          "groups": [
            {
              "group": "Getting Started",
              "pages": [
                "api-reference/overview",
                "api-reference/making-your-first-api-call"
              ]
            },
            {
              "group": "Allium API",
              "pages": [
                {
                  "group": "Prices",
                  "pages": [
                    "api-reference/pricesapi-overview",
                    "api-reference/prices-endpoint/token-latest-price",
                    "api-reference/prices-endpoint/token-price-history"
                  ]
                },
                {
                  "group": "NFTs",
                  "pages": [
                    "api-reference/nftapi-overview",
                    "api-reference/nft-endpoint/get-nft-by-contract",
                    "api-reference/nft-endpoint/nft-token-by-contract",
                    "api-reference/nft-endpoint/nft-contract",
                    "api-reference/nft-endpoint/nft-collections",
                    "api-reference/nft-endpoint/nft-listings",
                    "api-reference/nft-endpoint/nft-listings-by-token",
                    "api-reference/nft-endpoint/nft-transfer-by-token",
                    "api-reference/nft-endpoint/nft-transfer-by-contract",
                    "api-reference/nft-endpoint/nft-activities-token",
                    "api-reference/nft-endpoint/nft-activities-contract"
                  ]
                },
                {
                  "group": "Wallets",
                  "pages": [
                    "api-reference/walletapi-overview",
                    "api-reference/wallet-endpoint/activities",
                    "api-reference/wallet-endpoint/latest-token-balances",
                    "api-reference/wallet-endpoint/latest-nft-balances",
                    "api-reference/wallet-endpoint/latest-sol-balances",
                    "api-reference/wallet-endpoint/historical-token-balances",
                    "api-reference/wallet-endpoint/pnl",
                    "api-reference/wallet-endpoint/cost-basis"
                  ]
                },
                {
                  "group": "Stream Filters",
                  "pages": [
                    "api-reference/streamapi-overview",
                    "api-reference/stream-endpoint/all-filters",
                    "api-reference/stream-endpoint/create-filters",
                    "api-reference/stream-endpoint/add-value-filters"
                  ]
                },
                {
                  "group": "Holdings",
                  "pages": [
                    "api-reference/holdingsapi-overview",
                    "api-reference/holdings-endpoint/holdings-history"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "logo": {
      "light": "/logo/light.svg",
      "dark": "/logo/dark.svg"
    },
    "navbar": {
      "links": [
        {
          "label": "Blog",
          "href": "https://www.allium.so/blog"
        }
      ],
      "primary": {
        "type": "button",
        "label": "Book a Demo",
        "href": "https://www.allium.so/contact"
      }
    },
    "footer": {
      "socials": {
        "x": "https://x.com/alliumlabs",
        "linkedin": "https://www.linkedin.com/company/alliumlabs/"
      }
    }
  };


console.log(JSON.stringify(docsJson, getCircularReplacer(), 2));

//write to file
const outputPath = 'docs-rev.json';

fs.writeFile(outputPath, JSON.stringify(docsJson, getCircularReplacer(), 2), (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File successfully written to', outputPath);
    }
});
