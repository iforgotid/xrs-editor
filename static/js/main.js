/**
 * Created by xuejiaqi on 2018/12/22.
 */
var html = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
    throwOnError: false
});
$("body").append(html);