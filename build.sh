cd ui && npm ci && npm run build

cd ..
cd srv && npm ci && cd .. && rm -rf build && cp -R srv build