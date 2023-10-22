rm -rf docs/py-algorand-sdk
cd submodules/py-algorand-sdk/docs/ && \
    rm -rf .venv && \
    rm -rf _build && \
    python -m venv .venv && \
    . .venv/bin/activate && \
    pip install -r requirements.txt && \
    make markdown && \
    mv _build/markdown/ ../../../docs/py-algorand-sdk && \
    rm -rf ../../../docs/py-algorand-sdk/.venv

