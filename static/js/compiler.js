/**
 * Created by xuejiaqi on 2018/12/22.
 */
function encodeData(originData) {
    var result = originData;
    var reg = /\$\$.*?\$\$/g;
    var matches = originData.match(reg);
    console.log(matches);
    var uniqueData = _.uniq(matches);
    console.log(uniqueData);
    _.each(uniqueData,function(formulaData){
        var pureFormulaData = formulaData.replace(/\$\$/g,"");
        console.log(pureFormulaData);
        var html = katex.renderToString(pureFormulaData, {
            throwOnError: false
        });
        console.log(html);
        while (result.indexOf(formulaData)!=-1) {
            result = result.replace(formulaData, html);
        }
    });
    return result;
}

function decodeData(str) {

}

// var originData = "<p>由题意得：$$95-n$$是完全平方数且$$0\leqslant x\leqslant 95$$，</p> <p>故$$95-n$$可取$$0$$、$$1$$、$$4$$、$$9$$、$$16$$、$$25$$、$$36$$、$$49$$、$$64$$、$$81$$，共$$10$$个，$$n$$可取$$10$$个数．</p>";
// encodeData(originData);
//var reg = /\$\$.*?\$\$/g;

