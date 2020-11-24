# ---------------------------------------------------------------------------

SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

ifeq ($(origin .RECIPEPREFIX), undefined)
	$(error This Make does not support .RECIPEPREFIX. Please use GNU Make 4.0 or later)
endif
.RECIPEPREFIX = >

# ---------------------------------------------------------------------------

IMAGE ?= kodr-react
PORT ?= 3000
SITE_DIR ?= /site

# ---------------------------------------------------------------------------

help:
>	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help

build: ## build production-ready site
>	@make run cmd="yarn build"
.PHONY: build

deploy:  ## deploy built site to surge
> @cp CNAME .$(SITE_DIR)/public/
> @surge .$(SITE_DIR)/build/ --domain https://$(shell cat CNAME)
.PHONY: deploy

dev: ## start React in dev mode
>	@make runp cmd="yarn start"
.PHONY: dev

img: ## build docker image
>	@docker build -t $(IMAGE) docker/
.PHONY: stage

init: ## initialize project
>	@mkdir -p .$(SITE_DIR)
>	@make run cmd="npx create-react-app $(SITE_DIR)"
.PHONY: init

release:  ## build and deploy built site to surge (same as make build && make deploy)
> @make build
> @make deploy
.PHONY: release

runp: ## run arbitrary command (Usage: make run cmd="COMMAND PLUS ARGUMENTS")(Example: make run cmd="node -v"). Default port is mapped
>	@docker run -it -u $(shell id -u):$(shell id -g) --rm -v $(shell pwd)$(SITE_DIR):$(SITE_DIR) -p $(PORT):$(PORT) $(IMAGE) $(cmd)
.PHONY: run

run: ## Same as make runp, but no ports are mapped to avoid conflicts
>	@docker run -it -u $(shell id -u):$(shell id -g) --rm -v $(shell pwd)$(SITE_DIR):$(SITE_DIR) $(IMAGE) $(cmd)
.PHONY: run

shell: ## start shell inside a container with default port mapped
>	@make runp cmd="bash"
.PHONY: shell

test: ## start React in test mode
>	@make run cmd="yarn test"
.PHONY: test
