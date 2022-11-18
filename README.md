# Binance-ETH

- [Cron Schedule](https://cloud.google.com/scheduler)
- [Cloud Function](https://cloud.google.com/functions/docs/running/function-frameworks)
- [Binance API](https://binance-docs.github.io/apidocs/spot/en/#new-order-trade)

步驟
1. Cron scheule排程
2. 觸發function tradeETH
3. 查詢telegram策略 近6筆訊息
4. 找到最近的作單方向 多/空
5. 發送Binance API調整方向 
  - BUY
    - 有多單 -> 不動
    - 有空單 -> 2倍多
  - SELL
    - 有多單 -> 2倍空
    - 有空單 -> 不動