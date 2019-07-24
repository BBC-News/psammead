none:
	@ echo Please specify a target

install:
	npm --version; node --version;
	npm run ci:packages;

code-coverage-before-build:
	curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter;
	chmod +x ./cc-test-reporter;
	./cc-test-reporter before-build;

code-coverage-after-build:
	./cc-test-reporter after-build -t lcov;

tests:
	npm run build;
	npm test;

setup-git:
	git remote set-url origin "https://${GITHUB_TOKEN}@github.com/bbc/psammead.git"
	git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
	git config user.email "D&ENewsFrameworksTeam@bbc.co.uk"
	git config user.name "BBC News Frameworks"

storybook:
	make setup-git;
	npm run deploy-storybook;

bumperBot:
	npm run bumperBot

publish:
	echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
	npm run publish;

change-scanner:
	npm run changeScanner;
