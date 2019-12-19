serve:
	hugo server \
	--buildDrafts \
	--buildFuture \
	--enableGitInfo

preview-build:
	hugo \
	--baseURL $(DEPLOY_PRIME_URL) \
	--buildDrafts \
	--buildFuture \
	--enableGitInfo \
	--minify

production-build: setup
	hugo \
	--enableGitInfo \
	--minify
