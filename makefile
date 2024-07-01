run-dev: 
	docker-compose --file docker-compose.development.yml up --detach --build

stop-dev:
	docker-compose --file docker-compose.development.yml down

run-prod: 
	docker-compose --file docker-compose.production.yml up --detach --build

stop-prod:
	docker-compose --file docker-compose.production.yml down