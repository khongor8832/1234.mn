//  Хоердугаар бүлэг = Javascript цаанаа яг яаж ажиллаад байдгыг бүтэц талаас үзэцгээе.

// learn 28 Javascript хөшигний цаана - Javascript engine, Глобаль объектийн тухай

/*Javascript engine гэж юу вэ ? 
    1. Javascript engine  нь Javascript кодыг ажиллуулах тусгай зориулалтын програм юм 
    2. Google V8 engine (2008) Өмнө байгуулагдаж байсан engine-үүдээс гайхалтай хүчтэй engine болсон. Үүний улмаас Chrome асар өндөр амжилтанд хүрсэн байгаа.  
        -Chrome Edge   Edge  V8 engine ашиглахаар болсон. 
        -Nodejs           Цаанаа V8 engine ашиглаж байгаа 
        -Electron         Цаанаа V8 engine ашиглаж байгаа  Javascript-ашиглаж Desktop програм зохиодог. 
        - ...
    3. SpiderMonkey (Brendan Eich)
        - Firefox (Mozilla) ===>  Анх Javascript зохиогч Brendan Eich Javascript engine үүсгэн байгуулаад хөгжсөөр байгаад Mozilla-гаас хөгжүүлсээр байгаад Firefox-д хэрэглэдэг SpiderMonkey engine болж хөгжсөн байгаа. Одоог хүртэл Firefox бол SpiderMonkey хэрэглэж байгаа. 
    4. Nitro (Apple)
        Safari


Javascript engine --> Javascript кодыг ажиллуулж үр дүнгийн машины кодруу хөрвүүлж  үр дүнг гаргаж өгдөг програм байгаа юм. 
        Дотороо: Parse---> Кодны зөв бурууг шалгана. 
                 Execute --> Машины хэл рүү хөрвүүлээд дараа ажлуулдаг байгаа */

/*Javascript код ажиллахад Глобал Объект заавал үүсдэг. 
    1. Javascript код ажиллахад заавал нэг глобал объект үүссэн байх шаардлагатай. 
    2. Энэ объект javascript  кодод ажиллах орчных нь талаар мэдээлэл өгдөг. 
    3. Бүх кодоос ашиглаж болох өгөгдөл функцаар хангана. 
    4. Энэ объект доторх хувьсагч функцийг  дуудахад объектын нэрийг ашиглах албагүй байдаг. 
    5. Энэ объект доторх зарлагдсан хувьсагч, функцүүдийг глобал
     хувьсагч, функц гэдэг. 
        Глобал хувьсагчийг хэрэглээг аль болох бага байлгахыг хичээх хэрэгтэй. 

1. broser дээр ажиллаж байхад энэ глобал объект нь WINDOW гэдэг
объект байдаг. 
2. Nodejs дээр ажиллахад глобал объект нь global гэдэг объект байдаг. 
3. Сүүлийн стандарт globalThis гэдэг нэртэй байхаар заасан. 

4. var lastname = 'Jhon'
    -console,log(window.lastname)           //jhon
    -console,log(globalThis.lastname)       //jhon*/
var lastname = "boldoo";
console.log(lastname);
console.log(window.lastname);
console.log(globalThis.lastname);

function huniiMedeelel() {
  console.log("Энэ хүний овог: " + lastname);
}
