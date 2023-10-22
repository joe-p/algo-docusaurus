rm -rf docs/py-algorand-sdk
cd submodules/py-algorand-sdk/ && \
    rm -rf .venv && \
    rm -rf docs/_build && \
    python -m venv .venv && \
    . .venv/bin/activate && \
    pip install -r requirements.txt && \
    pip install -r docs/requirements.txt && 
    cd docs/ && \
    make markdown && \
    mv _build/markdown/ ../../../docs/py-algorand-sdk && \
    rm -rf ../../../docs/py-algorand-sdk/.venv

