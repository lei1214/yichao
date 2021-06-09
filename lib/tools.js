// 简单运动封装的函数
function animate(ele,obj,fn){
    let k = 0
    let n = 0
    for(let attr in obj){
        k++
        let timerId = setInterval(function(){
            let target = obj[attr]
            // 获取left
            let currentStyle = getStyle(ele,attr)
            if(attr === 'opacity'){
                target *= 100
                currentStyle *= 100
            }
            currentStyle = parseInt(currentStyle)
            // 定义速度
            let speed = (target-currentStyle)/20
            // 这个速度是永远到不了目标的，无限的贴近目标 - 向上取整变成整数
            // 正小数就想上取整，负小数就应该向下取证
            if(speed>0){
                speed = Math.ceil(speed)
            }else{
                speed = Math.floor(speed)
            }
            // 增加left
            currentStyle += speed
            // 限制left
            if(currentStyle===target){
                // 设置left
                if(attr === 'opacity'){
                    ele.style[attr] = currentStyle/100
                }else{
                    ele.style[attr] = currentStyle + "px"
                }
                currentStyle = target
                clearInterval(timerId)
                n++
                if(k===n){
                    fn()
                }
            }else{
                // 设置left
                if(attr === 'opacity'){
                    ele.style[attr] = currentStyle/100
                }else{
                    ele.style[attr] = currentStyle + "px"
                }
            }
            
        },20)
    }
}
// 获取样式的函数
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele)[attr]
    }else{
        return ele.currentStyle[attr]
    }
}