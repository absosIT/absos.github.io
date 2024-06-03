"# absos2" 
`
npm init -y
npm install react@17.0.1 react-dom@17.0.1
npm install webpack@latest webpack-cli@latest webpack-dev-server@latest --save-dev
npm install style-loader css-loader --save-dev
npm install typescript@latest ts-loader@latest --save-dev
npm install file-loader --save-dev
npm install html-webpack-plugin --save-dev

#Cleanup and reinstall dependencies
npm cache clean --force
npm install

npm i --save-dev @types/react
npm i --save-dev @types/react-dom
`
