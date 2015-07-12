/**
 * 页面ready方法
 */
$(document).ready(function() {
    generateContent();
    hljs.initHighlightingOnLoad();
    share();
});

/**
 * 侧边目录
 */
function generateContent() {
    var toc = $("#markdown-toc").html();
    if (typeof toc != "undefined") {
        $(".content-navigation").addClass("col-sm-3").show();
        $(".content").addClass("col-sm-9");
        $(".content-navigation .content-navigation-text").html("<ul>" + toc + "</ul>");
    }
}

function share(){
    window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};
    with(document)0[body.appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
}