var rule = {
    title:'JRKAN鐩存挱',
    host:'http://www.jrkan2022.com/?lan=1',
    // JRKAN澶囩敤鍩熷悕:www.jrkankan.com / www.jrkan365.com / jrsyyds.com / www.jryyds.com / jrskan.com / jrsbxj.com /Jrkan澶囩敤鍩熷悕1: www.jrkan2022.com 澶囩敤鍩熷悕2: www.jrs23.com 澶囩敤鍩熷悕2: www.jrskk.com 鏈€鏂扮綉鍧€鍙戝竷:www.qiumi1314.co
    
    url:'/fyclass',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'鍏ㄩ儴',
    class_url:'/',
    //class_url:'?live',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:"",
    limit:6,
    double:false,
    鎺ㄨ崘:'*',
    // 涓€绾�:'.loc_match:eq(2) ul;li:gt(1):lt(4)&&Text;img&&src;li:lt(2)&&Text;a:eq(1)&&href',//play.sportsteam333.com
    涓€绾�:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.d-touch');tabs.forEach(function(it){var pz=pdfh(it,'.name:eq(1)&&Text');var ps=pdfh(it,'.name:eq(0)&&Text');var pk=pdfh(it,'.name:eq(2)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.lab_time&&Text');var url=pd(it,'a.me&&href');items.push({desc:timer+'馃弳'+ps,title:pz+'馃啔'+pk,pic_url:img,url:url})});setResult(items);",
    浜岀骇:{
        "title":".sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text",
        "img":"img&&src",
        "desc":";;;.lab_team_home&&Text;.lab_team_away&&Text",
        "content":".sub_list ul&&Text",
        "tabs":"js:TABS=['瀹炴椂鐩存挱']",
        "lists":"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.sub_playlist&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'strong&&Text');let url=pd(it,'a&&data-play');return name+'$'+url});LISTS.push(d)});",
    },
    鎼滅储:'',
}
