var bodyer=document.querySelector(".bodyer"),cartList=localStorage.getItem("cartList"),name1=getCookie("name"),url;function show(){var t,l;cartList.length?(t=cartList.every(t=>1==t.is_select),l=`
            <h3>我的购物车<i>1KG内在线支付180元包邮，货到付款350元包邮</i></h3>
            <div class="panel panel-default ordercart">
            <ul class="panel-heading list-title">
                <li class="checkall"><input type="checkbox" name="checkAll" ${t?"checked":""}><i>全选</i></li>
                <li class="goodsinfo">商品</li>
                <li class="spec">商品信息</li>
                <li class="unitprice">单价</li>
                <li class="num">数量</li>
                <li class="subtotal1">小计</li>
                <li class="operation">操作</li>
            </ul>
        `,cartList.forEach(t=>{l+=`
            <ul class="list-content cartlists">
                <li class="cartgoods">
                    <ul class="goods-info">
                        <li class="chk">
                            <input type="checkbox" name="checkselect" ${1==t.is_select?"checked":""} data-id=${t.id}>
                        </li>
                        <li class="img">
                            <img src="${t.url1}" alt="">
                        </li>
                        <li class="goodsname">
                            <p class="onlyframe">不含镜片</p>
                        </li>
                        <li class="g-info">
                            ${t.goods_name}
                        </li>   
                        <li class="unitprice1">
                            ${t.c_price}
                        </li>
                        <li class="num">
                            <button ${t.cart_number<=1?"disabled":""} data-id=${t.id}>-</button><button>${t.cart_number}</button><button data-id=${t.id}>+</button>
                        </li>
                        <li class="subtotal">
                            
                        </li>
                        <li class="operation1">
                            <a href="javascript:;" class="favorite">移入我的收藏</a>
                            <a href="javascript:;" class="delete" data-id=${t.id}>删除</a>
                        </li>
                    </ul>
                </li>
            </ul>
            `}),l+="</div>",l+=`
        <div class="panel-default cartcheckout">
            <ul class="panel-heading list-ft">
                <li class="checkall"><input type="checkbox" name="checkAll" ${t?"checked":""}><i>全选</i></li>
                <li class="delall"><a href="javascript:;">删除选中商品</a></li>
                <li class="checkednum">已选商品<span>${total()[0]}</span>件</li>
                <li class="total">合计(不包含运费)：</li>
                <li class="totalprice">￥<span>${total()[1]}</span></li>
                <li class="checkout">结算</li>
            </ul>
        </div>
        `,bodyer.innerHTML=l,total1()):bodyer.innerHTML=`
        <h3>我的购物车<i>1KG内在线支付180元包邮，货到付款350元包邮</i></h3>
        <div class="panel panel-default ordercart">
            <ul class="panel-heading list-title">
                <li class="checkall"><input type="checkbox" name="checkAll"><i>全选</i></li>
                <li class="goodsinfo">商品</li>
                <li class="spec">商品信息</li>
                <li class="unitprice">单价</li>
                <li class="num">数量</li>
                <li class="subtotal">小计</li>
                <li class="operation">操作</li>
            </ul>
            <ul style="display:block" class="panel-body list-content">
                <div class="cart-none">
                    <h3>您的购物车还是空的，赶紧行动吧！您可以：</h3>
                    <p>马上去 <a href="./list.html">挑选商品</a></p>
                    <p>看看 <a href="javascript:;">已买到的商品</a></p>
                </div>
            </ul>
        </div>
        <div class="panel-default cartcheckout">
            <ul class="panel-heading list-ft">
                <li class="checkall"><input type="checkbox" name="checkAll"><i>全选</i></li>
                <li class="delall"><a href="javascript:;">删除选中商品</a></li>
                <li class="checkednum">已选商品<span>0</span>件</li>
                <li class="total">合计(不包含运费)：</li>
                <li class="totalprice">￥<span>0.00</span></li>
                <li class="checkout">结算</li>
            </ul>
        </div>
        `}function total(){var l=0,i=0;return cartList.forEach(t=>{1==t.is_select&&(l+=t.cart_number,i+=parseFloat(t.c_price)*parseInt(t.cart_number))}),[l,i]}function total1(){for(var t=document.getElementsByClassName("subtotal"),l=0;l<t.length;l++)t[l].innerHTML=parseInt(t[l].previousElementSibling.children[1].innerHTML)*parseFloat(t[l].parentElement.children[4].innerHTML);for(l=0;l<cartList.length;l++);return 0}name1?(cartList=eval("("+cartList+")"),show()):(alert("尚未登录，请登录"),url=location.href,location.href="./login.html?newUrl="+url),bodyer.onclick=function(t){var l,i=(t=t||window.event).target||t.srcElement;"+"==i.innerHTML&&(l=i.getAttribute("data-id"),cartList.forEach(t=>{t.id==l&&t.cart_number++}),localStorage.setItem("cartList",JSON.stringify(cartList)),show()),"-"==i.innerHTML&&(l=i.getAttribute("data-id"),cartList.forEach(t=>{t.id==l&&t.cart_number--}),localStorage.setItem("cartList",JSON.stringify(cartList)),show()),"删除"==i.innerHTML&&(confirm("您确定要删除此商品吗")&&(l=i.getAttribute("data-id"),cartList=cartList.filter(t=>t.id!=l),localStorage.setItem("cartList",JSON.stringify(cartList))),show()),"checkAll"==i.name&&(cartList.forEach(t=>{i.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList",JSON.stringify(cartList)),show()),"checkselect"==i.name&&(l=i.getAttribute("data-id"),cartList.forEach(t=>{t.id==l&&(1==t.is_select?t.is_select=0:t.is_select=1)}),localStorage.setItem("cartList",JSON.stringify(cartList)),show()),"结算"==i.innerHTML&&(alert("您已支付"+total()[1]),cartList=cartList.filter(t=>1!=t.is_select),localStorage.setItem("cartList",JSON.stringify(cartList)),show()),"删除选中商品"==i.innerHTML&&(confirm("您确定要删除此商品吗")&&(l=i.getAttribute("data-id"),cartList=cartList.filter(t=>1!=t.is_select),localStorage.setItem("cartList",JSON.stringify(cartList))),show())};