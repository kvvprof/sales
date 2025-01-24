# SALES

## CRM-система по учету продаж в строительной компании

![Описание GIF](misc/sales.gif)

## Архитектура

![Alt text](misc/architecture.png)

- reverse proxy - swag (https://github.com/linuxserver/docker-swag)
- grafana - observability platform
- logs - loki, promtail
- metrics - node-exporter, cadvisor, prometheus
- sales-client - react app
- sales-guard - authorization (express)
- sales-gateway - supergraph, gateway (apollo server, apollo gateway)
- sales-main - subgraph (apollo server)
- sales-common - subgraph (apollo server)
- sales-pricing - subgraph (apollo server)