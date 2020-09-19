// learn 106. Орчин үеийн Javascript хөгжүүлэлтийн технологитой танилц

/*
Орчин үеийн вэб хөгжүүлэлтэнд:

1. nodeJS - npm интернетээс гое ное labrary татаж ашигладаг. 
2. ES6 болон тэрний дараагийн хувилбар ESNext - ийг ES5 хөрвүүлдэг BABEL ашиглаж бүх брозерт тааруулж ажиллуулдаг. 
3. ES6 Moduled ---> webpack ---> Bundle


Вэб сайт хийхэд 2 төрлийн хавтас үүсдэг. 
1-р: энэд болохоор програмистын хийж байсан бүх зүйл хадгалагдаж байдаг. Дараах зүйлсийг ашиглаж вэб хийдэг. 
src 
javascript 
node_modules
Axios
React 
VueJS
Classes
Components 
Css 
Image 
... гэх мэт 

2-р: 
dist - энэд болохоор вэб сайтад тавигдаг webpack шахаад жижигрүүлсэн хурдан ажилдаг хүн ойлгохооргүй болсон кодыг оруулдаг. 

src ---> dist хөрвүүлдэг маш олон package labrary байдаг. Эдгээр  dev dependency гэдэг ангилалд оруулдаг байгаа. 
1. Guip
2. Grunt
3. BABEL
4. webpack
5.{less}
6. Sass 
7. PostCss гэх мэт 

вэб сайт маань 2 үе шатыг дамждаг.  npm сайтаас татаж авдаг. 
dev dependence--> develop үе шатанд  Guip Grunt BABEL webpack{less} Sass  PostCss гэх мэт ашиглагдана.
dependence    --> фардаакш үе шатанд VueJS Firebase Axios React 
 
Парктик 
1-р алхам testapp гээд folder  үүсгээд дотор bash ажиллуул 

nodeJS -->  node -v
npm    -->  npm -v 
npm сүүлийн хувилбарыг ( npm install npm@latest -g ) гэж суулгана. 
npm init -y гэж оруулангуут testapp гэдэг folder-т package.json суусан байна. Нэг ёсондоо project үүсгэж байна гэсэн үг 
Тэгээд VS code ажиллуулаад харахад key, value 2 тогтсон байна. Тохиргоонууд энэ дотор байж байдаг. Ялангуяа npm юу татаж ашиглаж байна мөн манай project хэрхэн bult хийхүү зэрэг тохиргоонууд  package.json дотор байж байдаг.  Төрөл бүрийн нэмэмт тохиргоонууд нэмж бичдэг. 
Жишээ нь: 
npmjs.com -- оос fractional--> бутархай тоо бичдэг labrory татаж суулгы 
суулгахдаа : npm install fractional

package.json дотор суулаа гэж гарч ирнэ. Энэ бол dependencies буюу фардаакш байдлаар суусан  
"dependencies": {
    "fractional": "^1.0.0"
  }

dev dependence байдлаар суух нь Жишээ нь суулгы 
суулгахдаа : npm install webpack --save-dev 
dependencies суулгахын араас ямар  labrory-г --save-dev залгаал команд өгөхөд dev dependence байдлаар сууна. 

package.json дотор суулаа гэж гарч ирнэ. node_modules folder бас сууна. Энэ бол devDependencies буюу develop байдлаар суусан  

"devDependencies": {
  "webpack": "^4.44.1"
}

dev dependence--> татаж суулгаал ажлаад бай 
dependence  --> энэгээр суулгах юм бол вэб сайтай цуг onlian болно. 

node_modules folder нь манай fractional код дотор орж ирнэ. web дамжуулахадаа node_modules хүлдээгээд явуулчихдаг. Авсан хүн node_modules татаж суулгаал ажиллуулчихна. 
суулгахдаа : 
npm install гэж суулана. Тэгэхэд node_modules дотор хэрэгтэй бүх npm цуг сууна. Юу вэ гэхээр package.json дотор байж байдаг тэр нэрээр нь хэрэгтэй npm labrory-уудаа node_modules дотор давхар татаад суулгачихдаг. */
