// learn 111. Шинэ вэб сайтын webpack, babel тохиргоог гүйцэтгэж шалгах

/*
PizzaProject гэсэн folder үүсгэ дотор нь dist src гэсэн 2 folder үүсгэ. Dist дотор нь  css, image, 2 хий, src folder дотор html хий тэгээд bash ажиллуул. Эхлээд package json файл үүсгэнэ. Доорх командаар 
1. npm init -y 
2.npm i webpack webpack-cli --save-dev

Webpack-ын тохиргоо үүсгэнэ. Webpack веб сайтруу орно. 
3. Get Started 
4. Using a Configuration хэсгээс--> PizzaProject folder дотороо webpack.config.js файл үүсгэ 
5.  webpack.config.js folder-тоо хуулж тавь 
 const path = require("path");
module.exports = {
  entry: "./src/index.js",--> // Энэ бол src-ын үндсэн js болох index.js compaildана
  output: {
    filename: "main.js", --> //main.js бол dist орох js зааж өгч байна.
    path: path.resolve(__dirname, "dist"), 
  },
};

Одоо HTML webpack plugin ашиглы 
6. npmjs.com 
7. HTML-webpack-plugin хайна. 
8. npm i --save-dev html-webpack-plugin --> bash дээрээсээ суулга. 
9. Доош гүүлгээд тохиргооноос энэ тохиргоог авч webpack.config ---> module.exports --> дотор байгаа файлын доороос залгуулж тавь. Энэ Plugin-ы templete-ын ашиглана. 

plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
10. webpack.config дотор 
const HtmlWebpackPlugin = require('html-webpack-plugin')
11. package.json дотор ажиллуулдаг scriptээ бичиж өгөх гэж байна.
"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },--> scripts ийм болго 

  12. Ажиллуулж үзэцгээе bash дээр 
  npm run dev 
13. 
  dist дотор index.html, main.js 2 гарч ирнэ. Устгаад 
npm run build

14 За одоо DEVOLOPER server тохируулы 
https://webpack.js.org/guides/development/ --> package.json 
Анхааралтай унш ???????
"scripts": {
    "dev": "webpack --mode development",
    "watch": "webpack --watch", энэ болохоор өөрчлөлт хийхэд автоматаар dist-ыг өөрчилж байдаг. 
    "build": "webpack --mode production"
    "start": "webpack-dev-server --open", энэд болохоороо dev server оруулж ирлээ одоо bash дээр  dev server суулган 
  },
15. Анхааралтай унш ???????
npm i webpack-dev-server

"devDependencies" хийн гэж замын заагаагүй болохоор "dependencies" гэж суусан байна. Энэ болохоор хэрэглэгчрүү явах учираас усгаад "devDependencies" суулгы 

16. npm uninstall webpack-dev-server
Дахиад суулахдаа 
npm i webpack-dev-server --save-dev


17. dev-server тохиргоог хийж өгий
  webpack.config.js folder  module.exports дотор plugins  дээд талд хуулж тавь 


devServer: {
    contentBase: "./dist",
  },
  18. Одоо ажиллуулж шалгацгаая bash дээр 
  npm run start 
*********************************************************


        Одоо BABEL суулгацгаая...

1. src --> js --> index.js дотор энийг бичиж өгөөд хийж үцэцгээе 
const arr = [23, 44, 12];
let myfunc = (a) => {
  console.log(`too : ${a}`);
};
const arr2 = [...arr, 44, 1223];
myfunc(arr[1]);

2. https://babeljs.io/ -->  getting started guide --> Usage Guide -аас суулгана. 
npm install --save-dev @babel/core @babel/cli @babel/preset-env

энэ polyfill хөрвүүлээд хөрвөөгүйг нь broser дээр нь очиж  функц бичиж өгдөг байгаа 
npm install --save @babel/polyfill


babel.config.json --> src folder-т үүсгээд дотор нь доорх код хий 
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.4",
      }
    ]
  ]
}

дараа нь bash дээр 
./node_modules/.bin/babel src --out-dir dist 
"firefox": "30", дахиад ажиллуул 


Одоо webpack build хийхэд babel ажилж байхаар тохируулы. 
Babel-loader суулгана. 

3. npmjs.com --> babel-loader гэж хайх 
олон юм давхар суух заримын суулгачихсан болохоор гараар бичээд суулгы 
npm i --save-dev babel-loader
4. Тохирноо нь
plugin файлын нь доор хуулж тавь 
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}


npm run dev 
npm run build
npm run start 

*/
