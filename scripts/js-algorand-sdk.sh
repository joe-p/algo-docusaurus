rm -rf docs/js-algorand-sdk/*
mkdir -p docs/js-algorand-sdk/examples
cd submodules/js-algorand-sdk && \
    npm install --ignore-scripts && \
    cat FAQ.md | sed 's/README/index/g' > ../../docs/js-algorand-sdk/FAQ.md
