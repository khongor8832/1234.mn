// learn 83. let, const ашиглан хувьсагч зарлах.
var level = 2;
var mouseLegCount = 4;
var zombieLegCount = 2;
if (level === 1) {
  var mouse = 200;
  console.log(mouseLegCount + " хөлтэй " + mouse + " ш хулганууд дайрлаа ");
} else if (level === 2) {
  var zombie = 1500;
  console.log(zombieLegCount + " хөлтэй " + zombie + " ш зомби дайрлаа ");
}
// энэ кодон дээр ирээдүйд үүсэж болох асуудал байгаа юм.
// харин хувьсагчийг const болгож өгч байна.
//  const нь тухайн утгыг өөрчилж болдоггүй ганцхан утга агуулдаг.
// let нь тухайн block дотороо хүчинтэй байдаг. Өөр газар ашиглаж болдоггүй.
let level1 = 2;
const mouseLegCount1 = 4;
const zombieLegCount1 = 2;
if (level1 === 1) {
  let mouse1 = 400;
  console.log(mouseLegCount1 + " хөлтэй " + mouse1 + " ш хулганууд дайрлаа ");
} else if (level1 === 2) {
  let zombie1 = 2500;
  console.log(zombieLegCount1 + " хөлтэй " + zombie1 + " ш зомби дайрлаа ");
}
