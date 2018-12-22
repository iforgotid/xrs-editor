/**
 * Created by xuejiaqi on 2018/12/22.
 */
function encodeData(str) {
    var reg = /\$\$.*?\$\$/;
    
}

function decodeData(str) {

}

var originData = "<p>由题意得：$$95-n$$是完全平方数且$$0\leqslant x\leqslant 95$$，</p> <p>故$$95-n$$可取$$0$$、$$1$$、$$4$$、$$9$$、$$16$$、$$25$$、$$36$$、$$49$$、$$64$$、$$81$$，共$$10$$个，$$n$$可取$$10$$个数．</p>";
var reg = /\$\$.*?\$\$/g;

while((match=reg.exec(originData))!=null){
    console.log(match[0]);
}