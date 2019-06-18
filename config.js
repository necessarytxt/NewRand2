/* 背景音乐数据，属性包括name和url，
*  name填要显示出来的名字；url填歌曲文件名（包括后缀名）
*  建议复制第一行加在最前面进行修改，注意逗号,
*  最后一个{ }后面不要有逗号,属性的值要用引号括起来
*/
var musicData =[
  { name: '恋愛サーキュレーション', url: 'love_loop.mp3'},
  { name: 'crossing field ', url: 'crossfield.mp3'},
  { name: 'LOL S2', url: 'LOL.mp3'}
];

var stuData = `
苏昂,
丁文杰,
刘博文,
郑润泽,
郭文杰,
王文迪,
徐明杨,
徐珊珊,
秦玉玺,
周洁,
樊家同,
师晨曦,
孔鹏飞,
刘锡嘉,
罗鑫杰,
俎昊明,
盛楷,
赵燕培,
贠盈颖,
徐晨昊,
赵梓涵,
刘怡薇,
刘聪聪,
崔嘉明,
魏子涵,
李艳,
王莹莹,
张果果,
代媛行,
娄燕,
蒋奕仁,
郭超帆,
苏静婉,
闫帆,
赵帅博,
姬晨欣,
王梦雨,
贾涵迪,
宋嘉琦,
王纯,
杨子畅,
杜鑫亚,
郝蕴琪,
徐旭,
旦望云,
刘爽爽,
罗蕴婧,
孙玟,
王嘉垚
`;

//获取信息函数，请勿修改
function getData(type) {
  var stu = stuData.replace(/\r*\n*\t*\s/g,'').split(',');
  return type==0 ? musicData : stu;
}
