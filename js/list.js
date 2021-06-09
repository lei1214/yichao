var dts=document.querySelectorAll("dl dt"),dds=document.querySelectorAll("dl dd");for(let i=0;i<dts.length;i++)dts[i].onclick=function(){for(var e=0;e<dds.length;e++)dts[e].className=".filter-type",setStyle(dts[e],{height:"37px",backgroundColor:"#e5dedb",lineHeight:"37px",borderBottom:" 1px solid #fff",fontSize:"14px",paddingLeft:"36px",fontWeight:"bold",color:"#333",backgroundImage:"url(../images/right_buttom.png)",backgroundRepeat:" no-repeat",backgroundPosition:"22px 17px",cursor:"pointer"});dts[i].className=".filter-type current",setStyle(dts[i],{height:"37px",lineHeight:"37px",borderBottom:" 1px solid #fff",fontSize:"14px",paddingLeft:"36px",fontWeight:"bold",color:"#fff",backgroundColor:"#444",backgroundImage:"url(../images/down_buttom.png)",backgroundRepeat:" no-repeat",backgroundPosition:"22px 17px",cursor:"pointer"}),"none"==getStyle(dds[i],"display")?setStyle(dds[i],{display:"block"}):setStyle(dds[i],{display:"none"})};var listimgs=document.querySelectorAll(".listing a img"),imgs1=document.querySelectorAll(".bcolor img");for(let i=0;i<imgs1.length;i++)imgs1[i].onclick=function(){var e=this.getAttribute("src");listimgs[i].setAttribute("src",e)};var list=document.querySelector(".list"),pagination=document.querySelector(".pagination");function tab(){document.querySelector(".listing").lastElementChild.lastElementChild;var t=document.querySelectorAll(".gc-switchable b img");for(let e=0;e<t.length;e++)t[e].onclick=function(){this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild.src=this.src}}!async function(){var arr=await promiseAjax({url:"../php/list.php"}),arr=eval("("+arr+")"),obj={pageInfo:{pagenum:1,pagesize:12,totalsize:arr.length,totalpage:Math.ceil(arr.length/12)},textInfo:{first:"首页",prve:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,obj,e=>{var e=arr.slice(12*(e-1),12*e),t="";e.forEach(e=>{t+=`
            <li class="cell" >
                <div class="listing">
                    <a href="./detail.html?id=${e.id}"><img src="${e.url1}" class="img">
                    </a>
                </div>
                <div class="gc clearfix">
                    <div class="gc-wrap">
                        <p class="gc-switchable">
                            <b class="bcolor"><img src="${e.url1}"></b>
                            <b class="bcolor"><img src="${e.url2}"></b>
                            <b class="bcolor"><img src="${e.url3}"></b>
                            <b class="bcolor"><img src="${e.url4}"></b>
                        </p>
                    </div>
                </div>
                <p class="listprice">
                    <b>
                        <i>￥</i>
                        <i class="saleprice">${e.c_price}</i>
                    </b>
                    <del>${e.o_price}</del>
                </p>
                <h3 class="title">
                    <a href="javascript:;">${e.goods_name}</a>
                </h3>
            </li>
            `}),list.innerHTML=t,tab()})}();