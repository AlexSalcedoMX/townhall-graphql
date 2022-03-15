# on:
#   push:
#     branches:
#       - "master"
# jobs:
#   BO:
#     name: Deploy to Bolivia
#     runs-on: ubuntu-latest
#     steps:
#     - name: Checkout
#       uses: actions/checkout@v2
#     - name: Setup Node.js
#       uses: actions/setup-node@v2
#       with:
#         node-version: '14'
#     - name: Prepare Node Package
#       run: |
#         npm i && 
#         npm ci && 
#         npm i @apollo/rover
#     - name: Install SLS Plugins and Deploy
#       uses: serverless/github-action@v2
#       with:
#         args: -c "sls plugin install -n serverless-offline && sls deploy --verbose -s prod --country bo --region us-west-2"
#         entrypoint: /bin/sh
#       env:
#         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID_PROD_BO }}
#         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY_PROD_BO }}
#   CO:
#     name: Deploy to Colombia
#     runs-on: ubuntu-latest
#     steps:
#     - name: Checkout
#       uses: actions/checkout@v2
#     - name: Setup Node.js
#       uses: actions/setup-node@v2
#       with:
#         node-version: '14'
#     - name: Prepare Node Package
#       run: |
#         npm i && 
#         npm ci && 
#         npm i @apollo/rover
#     - name: Install SLS Plugins and Deploy
#       uses: serverless/github-action@v2
#       with:
#         args: -c "sls plugin install -n serverless-offline && sls deploy --verbose -s prod --country co --region us-west-2"
#         entrypoint: /bin/sh
#       env:
#         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID_PROD_CO }}
#         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY_PROD_CO }}
#   DO:
#     name: Deploy to Dominican Republic
#     runs-on: ubuntu-latest
#     steps:
#     - name: Checkout
#       uses: actions/checkout@v2
#     - name: Setup Node.js
#       uses: actions/setup-node@v2
#       with:
#         node-version: '14'
#     - name: Prepare Node Package
#       run: |
#         npm i && 
#         npm ci && 
#         npm i @apollo/rover
#     - name: Install SLS Plugins and Deploy
#       uses: serverless/github-action@v2
#       with:
#         args: -c "sls plugin install -n serverless-offline && sls deploy --verbose -s prod --country do --region us-east-1"
#         entrypoint: /bin/sh
#       env:
#         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID_PROD_DO }}
#         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY_PROD_DO }}
#   EC:
#     name: Deploy to Ecuador
#     runs-on: ubuntu-latest
#     steps:
#     - name: Checkout
#       uses: actions/checkout@v2
#     - name: Setup Node.js
#       uses: actions/setup-node@v2
#       with:
#         node-version: '14'
#     - name: Prepare Node Package
#       run: |
#         npm i && 
#         npm ci && 
#         npm i @apollo/rover
#     - name: Install SLS Plugins and Deploy
#       uses: serverless/github-action@v2
#       with:
#         args: -c "sls plugin install -n serverless-offline && sls deploy --verbose -s prod --country ec --region sa-east-1"
#         entrypoint: /bin/sh
#       env:
#         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID_PROD_EC }}
#         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY_PROD_EC }}
#   MX:
#     name: Deploy to Mexico
#     runs-on: ubuntu-latest
#     steps:
#     - name: Checkout
#       uses: actions/checkout@v3
#     - name: Setup Node.js
#       uses: actions/setup-node@v2
#       with:
#         node-version: '14'
#     - name: Prepare Node Package
#       run: |
#         npm i && 
#         npm ci && 
#         npm i @apollo/rover
#     - name: Install SLS Plugins and Deploy
#       uses: serverless/github-action@v2
#       with:
#         args: -c "sls plugin install -n serverless-offline && sls deploy --verbose -s prod --country mx --region us-west-2"
#         entrypoint: /bin/sh
#       env:
#         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID_PROD_MX }}
#         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY_PROD_MX }}
#   PA:
#     name: Deploy to Panama
#     runs-on: ubuntu-latest
#     steps:
#     - name: Checkout
#       uses: actions/checkout@v2
#     - name: Setup Node.js
#       uses: actions/setup-node@v2
#       with:
#         node-version: '14'
#     - name: Prepare Node Package
#       run: |
#         npm i && 
#         npm ci && 
#         npm i @apollo/rover
#     - name: Install SLS Plugins and Deploy
#       uses: serverless/github-action@v2
#       with:
#         args: -c "sls plugin install -n serverless-offline && sls deploy --verbose -s prod --country pa --region us-west-2"
#         entrypoint: /bin/sh
#       env:
#         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID_PROD_PA }}
#         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY_PROD_PA }}
#   PE:
#     name: Deploy to Peru
#     runs-on: ubuntu-latest
#     steps:
#     - name: Checkout
#       uses: actions/checkout@v2
#     - name: Setup Node.js
#       uses: actions/setup-node@v2
#       with:
#         node-version: '14'
#     - name: Prepare Node Package
#       run: |
#         npm i && 
#         npm ci && 
#         npm i @apollo/rover
#     - name: Install SLS Plugins and Deploy
#       uses: serverless/github-action@v2
#       with:
#         args: -c "sls plugin install -n serverless-offline && sls deploy --verbose -s prod --country pe --region sa-east-1"
#         entrypoint: /bin/sh
#       env:
#         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID_PROD_PE }}
#         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY_PROD_PE }}
#   PY:
#     name: Deploy to Paraguay
#     runs-on: ubuntu-latest
#     steps:
#     - name: Checkout
#       uses: actions/checkout@v2
#     - name: Setup Node.js
#       uses: actions/setup-node@v2
#       with:
#         node-version: '14'
#     - name: Prepare Node Package
#       run: |
#         npm i && 
#         npm ci && 
#         npm i @apollo/rover
#     - name: Install SLS Plugins and Deploy
#       uses: serverless/github-action@v2
#       with:
#         args: -c "sls plugin install -n serverless-offline && sls deploy --verbose -s prod --country py --region us-west-2"
#         entrypoint: /bin/sh
#       env:
#         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID_PROD_PY }}
#         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY_PROD_PY }}
