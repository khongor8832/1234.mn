// learn 9 Нөхцөл шалгалт IF ELSE, prompt ашиглан хэрэглэгчээс утга авах

// Өнөөдрийн хичээлээр програм дотор хэрхэн шийдвэр гаргадаг талаар үзнэ.
// alert('Сайн байна уу ? \n Өнөөдөр та ямар ажилтай вэ?'); // broser -ын цонхоор шууд гарч ирдэг.
// \n -> нэг enter дарсан гэсэн үг дараагийн мөррүү шилжих

// var age = 37;
// age++;  //  ++ нэгээр нэмэгдүүлнэ age++; энэ нь age = age + 1 гэсэнийг товчилсон
// // age--;    -- нэгээр хасагдан
// age += 10; //  ++ 10 нэмэгдүүлнэ гэж мэт  + - * / үйлдлүүд байдаг.
// // alert("Сайн байна уу \n \n Таны нас :  " + age);

// // prompt  alert-тай ижил гэхдээ хэрэглэгчээс утга авдаг.
// // javascript -н date гэдэг өнөөдөрийн он сар өдөр гаргана.
// console.log('sain uu' + 1 ); //sain uu1
// console.log('sain uu' - 1 ); //NAN

var birthDate = prompt("Таны төрсөн он хэд вэ ?");
if (birthDate !== null) {
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthDate;
  var message = "Сайн байна уу? \n\n Таны нас : " + age;

  /*
    *************  Нөхцөл шалгах бүтэц ******************
    If (CONDITION === TRUE )
    {
        DO THIS
    }
    ELSE
    {
        DO THAT
    }
    */
  if (age > 18) {
    console.log("Та насанд хүрсэн байна.");
  } else if (age > 15) {
    console.log("Уучилаарай, та ахлах ангийн сурагч  байна.");
  } else if (age > 7) {
    console.log("Уучилаарай, та дунд ангийн сурагч  байна.");
  } else {
    console.log("Та сургуульд ороогүй жаал байна");
  }
  alert(message);
  //   alert(message);
} else {
  alert(
    "Уучилаарай та төрсөн огноогоо оруулахыг сайн ойлгогүй байх шиг байна.!! "
  );
}
