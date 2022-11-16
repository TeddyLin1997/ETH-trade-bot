# Binance-ETH

步驟
- 1. Cron scheule排程
- 2. 觸發function tradeETH 
- 3. 查詢telegram策略 近6筆訊息
- 4. 找到最近的作單方向 多/空
- 5. 發送Binance API調整方向 [文檔連結](https://binance-docs.github.io/apidocs/spot/en/#new-order-trade)
  - 多
    - 有多單 -> 不動
    - 有空單 -> 下2倍多
  - 空
    - 有多單 -> 兩倍空
    - 有空單 -> 不動


未來優化步驟
- 1. Cron scheule排程
- 2. 觸發function tradeETH 
- 3. 打Johnny API查詢方向 多/空
- 4. 發送Binance API調整方向

