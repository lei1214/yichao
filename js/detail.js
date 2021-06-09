var boyer=document.querySelector(".boyer"),search1=location.search,dt,arr,id;function shopScale(){var c=document.getElementsByClassName("middlebox")[0],r=document.getElementsByClassName("mark")[0],s=document.getElementsByClassName("smallbox")[0],p=(document.getElementsByTagName("ul li img"),document.getElementsByClassName("bigbox")[0]),a=s.getElementsByTagName("li"),t=c.getElementsByTagName("img")[0],i=p.getElementsByTagName("img")[0];for(let s=0;s<a.length;s++){const w=a[s];w.onclick=function(){t.src=i.src=this.getElementsByTagName("img")[0].getAttribute("src")}}c.onmouseover=function(){r.style.display="block",p.style.display="block"},c.onmouseout=function(){r.style.display="none",p.style.display="none"},c.onmousemove=function(s){var a,t,i=(s=s||window.event).pageX-c.offsetLeft-parseInt(r.clientWidth/2),l=s.pageY-c.offsetTop-parseInt(r.clientHeight/2),e=c.offsetWidth-r.offsetWidth-1,d=c.offsetHeight-r.offsetHeight-1,s=p.getElementsByTagName("img")[0];i<=0?(r.style.left="0px",a=0):e<=i?r.style.left=e+"px":(r.style.left=i+"px",a=i),l<=0?(r.style.top="0px",t=0):d<=l?r.style.top=d+"px":(r.style.top=l+"px",t=l),s.style.top=-2*t+"px",s.style.left=-2*a+"px"};var l=document.getElementsByClassName("content-tab")[0];window.onscroll=function(){var s=document.documentElement.scrollTop;1020<s&&setStyle(l,{position:"fixed",top:"0px",zIndex:"999999",width:"987px"}),s<1020&&setStyle(l,{position:"relative",top:"0px",zIndex:"999999",width:"987px"})};var e=document.getElementById("selectionguide"),d=document.getElementsByClassName("t-img")[0],n=document.getElementById("divGoodsDescription"),o=document.getElementsByClassName("framefeatures ")[0],v=document.getElementsByClassName("lens-feature")[0],g=document.getElementsByClassName("goodscomment")[0],m=document.getElementsByClassName("pro-reviews-tab")[0],y=document.getElementsByClassName("pro-reviews-list")[0],h=document.getElementsByClassName("shops")[0];l.onclick=function(s){s=(s=s||window.event).target||s.srcElement;"评价晒单2"==s.innerHTML&&(d.style.display=n.style.display=o.style.display=e.style.display=v.style.display="none"),"商品详情"==s.innerHTML&&(e.style.display="none",d.style.display=n.style.display=o.style.display=v.style.display=g.style.display=m.style.display=y.style.display=h.style.display="block"),"选购指南"==s.innerHTML&&(d.style.display=n.style.display=o.style.display=v.style.display=g.style.display=m.style.display=y.style.display="none",h.style.display=e.style.display="block"),"支付物流"!=s.innerHTML&&"实体店"!=s.innerHTML||(d.style.display=n.style.display=o.style.display=v.style.display=g.style.display=m.style.display=y.style.display=e.style.display="none",h.style.display="block")};var u=document.querySelectorAll(".content-tab li a");for(let a=0;a<u.length-1;a++)u[a].onclick=function(){for(var s=0;s<u.length-1;s++)u[s].className="";u[a].className="bg"};var f=document.getElementsByClassName("cl-bd .arrow"),b=document.getElementsByClassName("classify-body"),j=document.getElementsByClassName("filterProperty"),x=document.getElementsByClassName("cl-bd");for(let s=0;s<x.length;s++)b.onmouseover=function(){setStyle(b,{display:"block"})},b.onmouseout=function(){setStyle(b,{display:"none"})},x[s].onmouseover=function(){setStyle(j[s],{display:"block"}),setStyle(f[s],{backgroundPosition:" -54px -17px"})},j[s].onmouseover=function(){setStyle(j[s],{display:"block"})},x[s].onmouseout=function(){setStyle(j[s],{display:"none"}),setStyle(f[s],{backgroundPosition:" -48px -17px"})},j[s].onmouseout=function(){setStyle(j[s],{display:"none"})}}search1?(arr=search1.split("="),"?id"==arr[0]?(id=arr[1],async function(){dt=await promiseAjax({url:"../php/detail.php",data:"id="+id}),dt=eval("("+dt+")");var str=`
            <div class="crumbs">
                <a href="javascript:;">首页</a><i>></i><a href="javascript:;">太阳镜</a>
            </div>
            <div class="detail clearfix">
                <div class="enlarge">
                    <div class="middlebox">
                        <div class="mark"></div>
                        <img src="${dt.url1}">
                    </div>
                    <div class="smallbox">
                        <ul>
                            <li><img src="${dt.url1}"></li>
                            <li><img src="${dt.url2}"></li>
                            <li><img src="${dt.url3}"></li>
                            <li><img src="${dt.url4}"></li>
                        </ul>
                    </div>
                    <div class="bigbox"><img src="${dt.url1}"></div>
                </div>
                <div class="detail-info">
                    <div class="spec-top">
                        <h3>${dt.goods_name}</h3>
                        <div class="spec-top-price">
                            <span>零售价￥</span><span class="fsieze30">${dt.c_price}</span><span>市场价</span><del>${dt.o_price}</del>
                        </div>
                        <ul class="spec-top-appraise">
                            <li>累计评价<span>2</span></li>
                            <li>好评度<span>100%</span></li>
                            <li>送积分<span>458</span></li>
                        </ul>
                    </div>
                    <div class="spec">
                        <div class="spec-row">
                            <span>镜框颜色</span>
                            <button class="btn btn-default focus1" type="button">C1黑</button>
                            <button class="btn btn-default" type="button">C2灰</button>
                            <button class="btn btn-default" type="button">咖啡色</button>
                            <button class="btn btn-default" type="button">深蓝色</button>
                        </div>
                        <div class="spec-btn">
                            <p><a href="javascript:;"><img src="../images/yuyue-img.jpg"></a><a href="javascript:;"><img src="../images/buy-click.jpg" class="addcart"></a></p>
                        </div>
                        <div class="spec-txt">
                            <p>已有 <i>63457</i> 人预约</p>
                            <p>本款眼镜全国<span>47城市</span>实体店均有销售，<span>预约到店</span>体验有惊喜。</p>
                        </div>
                        <div class="spec-service">
                            <p>到店特色服务：</p>
                            <ul class="clearfix">
                                <li>线上线下同价</li>
                                <li>免费2.0验光</li>
                                <li>上门维修调整</li>
                                <li>2公里送货上门</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="detail-right">
                    <div class="detail-right-top">
                        <img src="../images/qgshop.jpg">
                    </div>
                    <div class="detail-right-bottom">
                        <h3>全国体验店（47大城市）</h3>
                        <p>您可以到店免费验光、试戴</p>
                        <ul class="drb-content">
                            <li><a href="javascript:;">上海</a></li>
                            <li><a href="javascript:;">天津</a></li>
                            <li><a href="javascript:;">重庆</a></li>
                            <li><a href="javascript:;">浙江</a></li>
                            <li><a href="javascript:;">杭州</a></li>
                            <li><a href="javascript:;">宁波</a></li>
                            <li><a href="javascript:;">浙江绍兴</a></li>
                            <li><a href="javascript:;">广东深圳</a></li>
                            <li><a href="javascript:;">广东广州</a></li>
                            <li><a href="javascript:;">湖州长兴</a></li>
                            <li><a href="javascript:;">湖州德清</a></li>
                            <li><a href="javascript:;">陕西西安</a></li>
                            <li><a href="javascript:;">新疆伊宁</a></li>
                            <li><a href="javascript:;">云南大理</a></li>
                            <li><a href="javascript:;"> 江西宜春</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="goodsdiv">
                <ul class="goods-row clearfix">
                    <li class="lihead">优惠套餐（镜框+镜片）</li>
                    <li class="sele">1.60MR8</li>
                    <li>1.67镜片</li>
                    <li>1.56变色</li>
                    <li>1.60防蓝光</li>
                    <li>1.55抗疲劳</li>
                    <li>依视路1.56</li>
                    <li>依视路1.60</li>
                    <li>自由搭配镜片</li>
                </ul>
                <div class="goods-body clearfix">
                    <div class="goodsinf"><img src="https://img.yichao.cn:442//uploads/goods/2018050814483332_lst.jpg"><span> 价格￥458.00</span></div>
                    <div class="jia">+</div>
                    <div class="goodsdeflens"><img src="https://img.yichao.cn:442//uploads/goods/2015092316495673_lst.jpg"><span> 价格￥199.00</span></div>
                    <div class="set-goods">
                        <ul>
                            <li>原价：<del>￥<span class="setglass-Fpirce">1436.00</span></del>&nbsp;&nbsp;&nbsp;&nbsp;(线上线下同价)</li>
                            <li>套餐价：<span class="red">￥366.40</span>&nbsp;&nbsp;&nbsp;&nbsp;<label>为你节省1069.60元</label></li>
                            <li><button>购买所选套餐</button>
                            &nbsp;&nbsp;<a href="javascript:;">查看套餐详情</a></li>
                            <li><button>预约到店体验</button>
                            &nbsp;&nbsp;<span>已有<i> 63192 </i>人预约</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="layout-body clearfix">
                <div class="layout-sidebar">
                    <div class="recommendgoods">
                        <div class="head"><hr/><strong>看了又看</strong><hr/></div>
                        <div class="recommendlist">
                            <div><a href="javascript:;"></a><img src="https://img.yichao.cn:442//uploads/goods/2015092917201810_lst.jpg"><p>￥366.00</p></div>
                            <div><a href="javascript:;"></a><img src="https://img.yichao.cn:442//uploads/goods/2015063013534372_lst.jpg"><p>￥456.00</p></div>
                            <!-- <ul>
                                <li class="prev"></li>
                                <li class="next"></li>
                            </ul> -->
                        </div>
                    </div>
                    <dl class="related-article">
                        <dt>相关文章</dt>
                        <dd><a href="javascript:;">黑色经典商务款眼镜给你非凡气质</a></dd>
                        <dd><a href="javascript:;">宝姿商务纯钛男款近视眼镜</a></dd>
                        <dd><a href="javascript:;">值得推荐的几款女士商务纯钛眼镜</a></dd>
                        <dd><a href="javascript:;">姬龙雪商务女款纯钛眼镜贵吗</a></dd>
                        <dd><a href="javascript:;">精工纯钛眼镜,商务男士的首选品牌</a></dd>
                        <dd><a href="javascript:;">夏蒙2017商务系列男款新品</a></dd>
                    </dl>
                    <dl class="related-article">
                        <dt>大家还关注</dt>
                        <dd><a href="javascript:;">高档眼镜框品牌</a></dd>
                        <dd><a href="javascript:;">非主流近视眼镜框</a></dd>
                        <dd><a href="javascript:;">中性眼镜框</a></dd>
                        <dd><a href="javascript:;">世界品牌眼镜框</a></dd>
                        <dd><a href="javascript:;">眼镜框韩版</a></dd>
                        <dd><a href="javascript:;">眼镜框品牌</a></dd>
                        <dd><a href="javascript:;">眼镜框价格</a></dd>
                        <dd><a href="javascript:;">范思哲眼镜框</a></dd>
                        <dd><a href="javascript:;">好看的眼镜框颜色</a></dd>
                    </dl>
                </div>
                <div class="layout-content">
                    <div class="content-info">
                        <ul class="content-tab clearfix">
                            <li><a href="javascript:;" class="bg">商品详情</a></li>
                            <li><a href="javascript:;">评价晒单2</a></li>
                            <li><a href="javascript:;">选购指南</a></li>
                            <li><a href="javascript:;">支付物流</a></li>
                            <li><a href="javascript:;" style="border: 0;">实体店</a></li>
                            <li class="buy clearfix"><i><span>￥<strong>${dt.c_price}</strong></span></i><i><a href="javascript:;">立即购买</a></i></li>
                        </ul>
                        <div class="lens-feature">
                            <table class="lf-t" cellspacing="1" cellpadding="0" border="0">
                                <tr>
                                    <td class="lable">品牌</td>
                                    <td  width='19%' align="left">亿超</td>
                                    <td class="lable">型号</td>
                                    <td  width='19%' align="left">FG80102</td>
                                    <td class="lable">货号</td>
                                    <td  width='19%' align="left">F2186</td>
                                </tr>
                                <tr>		
                                    <td class="lable">品牌</td>
                                    <td  width='19%' align="left">亿超</td>
                                    <td class="lable">镜框颜色</td>
                                    <td  width='19%' align="left">黑色</td>
                                    <td class="lable">风格</td>
                                    <td  width='19%' align="left">商务</td>
                                </tr>
                                <tr>					
                                    <td class="lable">适合人群</td>
                                    <td  width='19%' align="left">男士</td>
                                    <td class="lable">材料</td>
                                    <td  width='19%' align="left">纯钛</td>
                                    <td class="lable">尺码</td>
                                    <td  width='19%' align="left">大码</td>
                                </tr>
                                <tr>				
                                    <td class="lable">边框</td>
                                    <td  width='19%' align="left">全框</td>
                                    <td class="lable">形状</td>
                                    <td  width='19%' align="left">方形</td>
                                    <td class="lable">产地</td>
                                    <td  width='19%' align="left">深圳</td>
                                </tr>
                            </table>
                        </div>
                        <div class="t-img"><img src="https://img.yichao.cn:442/product/day_170622/201706221114519306.jpg"></div>
                        <div class="pro-description">
                            <div id="divGoodsDescription">
                                <img src="https://img.yichao.cn:442//product/day_180508/201805080249584397.jpg">
                                <img src="https://img.yichao.cn:442//product/day_180508/201805080250152063.jpg">
                                <img src="https://img.yichao.cn:442//product/day_180508/201805080250387362.jpg">
                                <img src="https://img.yichao.cn:442//product/day_180508/201805080250552545.jpg">
                                <img src="https://img.yichao.cn:442//product/day_180508/201805080251089862.jpg">
                                <img src="https://img.yichao.cn:442//product/day_180508/201805080251177943.jpg">
                                <img src="https://img.yichao.cn:442//product/day_180508/201805080251285693.jpg">
                                <img src="https://img.yichao.cn:442//product/day_180508/201805080251366797.jpg">
                            </div>
                            <div id="selectionguide">
                                <img src="https://img.yichao.cn:442/product/day_150806/201508061258272071.jpg">
                                <img src="https://img.yichao.cn:442/product/day_150806/201508061258331930.jpg">
                                <img src="https://img.yichao.cn:442/product/day_150806/201508061258405975.jpg">
                                <img src="https://img.yichao.cn:442/product/day_150806/201508061258468732.jpg">
                                <img src="https://img.yichao.cn:442/product/day_150806/201508061258513392.jpg">
                                <img src="https://img.yichao.cn:442/product/day_150806/201508061258574463.jpg">
                                <img src="https://img.yichao.cn:442/product/day_150806/201508061259024696.jpg">
                                <img src="https://img.yichao.cn:442/product/day_150911/201509110247558682.jpg">
                            </div>
                            <div class="framefeatures ">
                                <h4>品牌介绍</h4>
                                <p>亿超（YICHAO）品牌眼镜是亿超眼镜的主打品牌，各款产品均由国内外经验丰富的眼镜设计师精心设计，健康时尚，追求品质与细节是亿超品牌的核心理念。每副眼镜，都非常重视产品品质和细节的制作，先进的生成工艺，严格的质检，确保每副眼镜执行高标准的要求。</p>
                                <p style="margin-top: 6px;">亿超（YICHAO）品牌诞生于互联网电子商务时代，在产品设计、生成、服务等各个环节都充分融入了“开放、透明、分享、责任”的新商业文明精神，这也是亿超品牌缔造者的态度。</p>
                            </div>
                            <div class="goodscomment">
                                <div class="i-comment">
                                    <div class="newrate">
                                        <strong>100%</strong><br/>
                                        好评度
                                    </div>
                                    <div class="newpercent">
                                        <dl>
                                            <dt>好评</dt>
                                            <dd class="d1">
                                                <div style="width: 100%;" class="bgorange"></div>
                                            </dd>
                                            <dd class="d2">100%</dd>
                                        </dl>
                                        <dl>
                                            <dt>中评</dt>
                                            <dd class="d1">
                                                <div style="width: 100%;"></div>
                                            </dd>
                                            <dd class="d2">0%</dd>
                                        </dl>
                                        <dl>
                                            <dt>差评</dt>
                                            <dd class="d1">
                                                <div style="width: 100%;"></div>
                                            </dd>
                                            <dd class="d2">0%</dd>
                                        </dl>
                                    </div>
                                    <div class="newactor">
                                        <p>前5位评价用户：</p>
                                        <p class="u-name">我有我的滋味</p>
                                    </div>
                                    <div class="newtocommentactor">
                                        <p class="buy"><a href="javascript:;">购买过此商品</a></p>
                                        <p class="comment"><a href="javascript:;"><img src="../images/comment.jpg"></a></p>
                                        <p class="text">对已购买的商品发起评论,可以获得相应积分。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pro-reviews-tab">
                                <ul class="clearfix">
                                    <li class="focus2"><a href="javascript:;">全部评价(2)</a></li>
                                    <li><a href="javascript:;">好评(2)</a></li>
                                    <li><a href="javascript:;">中评(0)</a></li>
                                    <li><a href="javascript:;">全差评(0)</a></li>
                                </ul>
                                <a href="javascript:;" class="all-pro-reviews">查看所有评论</a>
                            </div>
                            <div class="pro-reviews-list">
                                <div class="part clearfix">
                                    <div class="info">
                                        <dl class="clearfix">
                                            <dt><img src="../images/avatar_none.jpg" width="75px" height="75px"></dt>
                                            <dd>
                                                <p class="name">1839867582</p>
                                                <img src="../images/member_level_1.png">
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="content">
                                        <p class="pf">
                                            评分：<img src="../images/icon_star_5.gif">
                                        </p>
                                        <span class="time">评价时间 2019/10/13 13:54:40</span>
                                        <div class="article">
                                            <span>购物体验：</span>宝贝很完美。包装严实，做了细心的装盒，保证了宝贝不被损坏。戴上宝贝很舒服。店家还贴心地送了礼物，最重要的是快递速度超快。
                                        </div>
                                    </div>
                                </div>
                                <div class="part clearfix">
                                    <div class="info">
                                        <dl class="clearfix">
                                            <dt><img src="../images/avatar_none.jpg" width="75px" height="75px"></dt>
                                            <dd>
                                                <p class="name">1839867582</p>
                                                <img src="../images/member_level_1.png">
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="content">
                                        <p class="pf">
                                            评分：<img src="../images/icon_star_5.gif">
                                        </p>
                                        <span class="time">评价时间 2019/10/13 13:54:40</span>
                                        <div class="article">
                                            <span>购物体验：</span>宝贝很完美。包装严实，做了细心的装盒，保证了宝贝不被损坏。戴上宝贝很舒服。店家还贴心地送了礼物，最重要的是快递速度超快。
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shops">
                                <div class="head clearfix">
                                    <span class="title">亿超眼镜体验店</span>
                                    <span class="all"><a href="javascript:;">点击查看全国<b>62</b>家实体店</a></span>
                                </div>
                                <ul class="s-body">
                                    <li>
                                        <div class="addr">
                                            <a href="javascript:;" class="i">杭州高技街店</a>
                                            <p>地址：浙江杭州市西湖区高技街63-1号（益乐路口财经学院后门旁）</p>
                                        </div>
                                        <div class="tel">
                                            <p><strong>电话：0571-88963466</strong>
                                                营业时间：每日 10：00-20：00</p>
                                        </div>
                                        <div class="send">
                                            <div class="sendmsg">
                                                <input type="text" placeholder="请输入手机号码" class="input">
                                                <a href="javascript:;" class="button">免费发送地址到手机</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="addr">
                                            <a href="javascript:;" class="i">杭州高技街店</a>
                                            <p>地址：浙江杭州市西湖区高技街63-1号（益乐路口财经学院后门旁）</p>
                                        </div>
                                        <div class="tel">
                                            <p><strong>电话：0571-88963466</strong>
                                                营业时间：每日 10：00-20：00</p>
                                        </div>
                                        <div class="send">
                                            <div class="sendmsg">
                                                <input type="text" placeholder="请输入手机号码" class="input">
                                                <a href="javascript:;" class="button">免费发送地址到手机</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="addr">
                                            <a href="javascript:;" class="i">杭州高技街店</a>
                                            <p>地址：浙江杭州市西湖区高技街63-1号（益乐路口财经学院后门旁）</p>
                                        </div>
                                        <div class="tel">
                                            <p><strong>电话：0571-88963466</strong>
                                                营业时间：每日 10：00-20：00</p>
                                        </div>
                                        <div class="send">
                                            <div class="sendmsg">
                                                <input type="text" placeholder="请输入手机号码" class="input">
                                                <a href="javascript:;" class="button">免费发送地址到手机</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="addr">
                                            <a href="javascript:;" class="i">杭州高技街店</a>
                                            <p>地址：浙江杭州市西湖区高技街63-1号（益乐路口财经学院后门旁）</p>
                                        </div>
                                        <div class="tel">
                                            <p><strong>电话：0571-88963466</strong>
                                                营业时间：每日 10：00-20：00</p>
                                        </div>
                                        <div class="send">
                                            <div class="sendmsg">
                                                <input type="text" placeholder="请输入手机号码" class="input">
                                                <a href="javascript:;" class="button">免费发送地址到手机</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="addr">
                                            <a href="javascript:;" class="i">杭州高技街店</a>
                                            <p>地址：浙江杭州市西湖区高技街63-1号（益乐路口财经学院后门旁）</p>
                                        </div>
                                        <div class="tel">
                                            <p><strong>电话：0571-88963466</strong>
                                                营业时间：每日 10：00-20：00</p>
                                        </div>
                                        <div class="send">
                                            <div class="sendmsg">
                                                <input type="text" placeholder="请输入手机号码" class="input">
                                                <a href="javascript:;" class="button">免费发送地址到手机</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="addr">
                                            <a href="javascript:;" class="i">杭州高技街店</a>
                                            <p>地址：浙江杭州市西湖区高技街63-1号（益乐路口财经学院后门旁）</p>
                                        </div>
                                        <div class="tel">
                                            <p><strong>电话：0571-88963466</strong>
                                                营业时间：每日 10：00-20：00</p>
                                        </div>
                                        <div class="send">
                                            <div class="sendmsg">
                                                <input type="text" placeholder="请输入手机号码" class="input">
                                                <a href="javascript:;" class="button">免费发送地址到手机</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;boyer.innerHTML=str,shopScale()}()):(alert("参数有误"),location.href="./list.html")):(alert("非法进入，请选择商品"),location.href="./list.html"),boyer.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement,cartList,cartList,bool;"addcart"!=target.className&&"立即购买"!=target.innerHTML||(alert("已添加至购物车"),cartList=localStorage.getItem("cartList")||[],0<cartList.length?(cartList=eval("("+cartList+")"),bool=!0,cartList.forEach(s=>{dt.id==s.id&&(bool=!1,s.cart_number++,localStorage.setItem("cartList",JSON.stringify(cartList)))}),bool&&(dt.cart_number=1,cartList.push(dt),localStorage.setItem("cartList",JSON.stringify(cartList)))):(dt.cart_number=1,cartList.push(dt),localStorage.setItem("cartList",JSON.stringify(cartList))))};