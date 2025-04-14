CONFIG = .config

all: node

node: node_modules/.bin

node_modules/.bin: package.json
	bun install

lint: node
	@bunx redocly lint --max-problems=200 \
	--config=$(CONFIG)/redocly.yaml \
	$(shell find . -depth 2 -name '*.json' -or -depth 2 -name '*.yml')

to-local: node
	@bun run script/rdme-to-local.ts

to-rdme: node
	@bun run script/local-to-rdme.ts

clean:
	@rm -rf node_modules

re: clean all

.PHONY: all lint to-local to-rdme clean re
