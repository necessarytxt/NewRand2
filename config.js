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

var stuData =`
蒋淑,
王琮瑞,
郭靖,
杨亚铮,
杨雯博,
苏熙航,
乔浩,
孙奥涵,
段哲南,
王怡晨,
周逸凡,
许豫,
徐超杰,
崔轶玮,
赵赫,
岳荻展,
张艺慧,
火明宇,
王祎,
秦琦航,
卢竟一,
王金想,
王以萌,
刘双豪,
王涵,
杨睿忻,
王婉茗,
刘沛燕,
陈璐璐,
郑寒冰,
周静铂,
李冠如贞,
范培豪,
李紫萍,
王家明,
李秋燕,
汪在玉,
黄新雨,
于梦柯,
武祎伟,
毛永恒,
黄冰雨,
马航,
王晓艺,
刘馨语,
王红雨,
赵英豪,
杜子厚,
位旭鹏,
张舒天,
杜娅婷,
郭益嘉,
丁克强,
刘年鑫
`;

//获取信息函数，请勿修改
function getData(type) {
  var stu = stuData.replace(/\r*\n*\t*\s/g,'').split(',');
  return type==0 ? musicData : stu;
}
