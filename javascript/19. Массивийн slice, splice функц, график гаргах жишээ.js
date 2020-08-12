// learn 19a. Массивийн slice, splice функц 

var m = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]

var m1 = new Array('hi', 'hello', 'how aer you');
console.log(m1[2]); //Массивийг ингэж бас зарлаж болно. 
// massive -> үлэмж их хэмжээний
// Array -> 	өгөгдлийн цуваа 


// Массиваас өгөгдөл устгах 
//slice-> хэрчих 
// m.slice(1, 10); // 1 - 10 сар хүртэл устгаж байна. 
// m.slice(3, 2,); // 1 сараас эхлээд нэг сар утга гэж байна. Feb устав.  

// Массиваас өгөгдөл гаргаж авч хэвлэх 
// /splice->холбох залгах 
var x = m.splice(1, 6); // 2 сараас 6 сар гаргаж авч байна. 
console.log(x);
console.log(m);


var mount = []; //хоосон массив зарлаад тэрэнрүүгээ өгөгдөл хийж болно. 
mount.push('Jan');
mount.push('Feb');
console.log(mount);

var x = [1, true, 'hello', { name: 'Amraa' }, null]; // массивруу юу ч хамаагүй хийж болдог. 

// Массив болон объектын илүү төвөгтэй хослолыг үзүүлэх гэж байна.  
var course = {
    name: 'Javascript хэлийг эхнээс нь дуустал',
    price: 199000,
    lessons: [// массив дотор объект хийж байна. 
        {
            name: ' Энэ сургалтаар бид юу сурч эзэмших вэ!',
            lenght: '11:18',
            tags: ['javascript', 'history', 'plan']
        },
        {
            name: 'Javascript хэл үүссэн түүх, хөгжлийн явц, броузерийн дайн, Ecmascript стандарт ',
            lenght: '32:08'
        }
    ]

}
console.log(course.name + ' сургалтын үнэ : ' + course.price + ' төг байна. Хичээл №1: "' + course.lessons[0].name + '" видеоны урт: ' + course.lessons[0].lenght + ': ' + course.lessons[0].tags[1]);
console.log(course.name + ' сургалтын үнэ : ' + course.price + ' төг байна. Хичээл №2: "' + course.lessons[1].name + '" видеоны урт: ' + course.lessons[1].lenght);