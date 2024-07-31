
let timer1,timer2;
export default function restScroll(){
    clearInterval(timer1)
    clearInterval(timer2)
    var html = document.documentElement;
    timer1 = animate(html.scrollTop,0,(val)=>{
        html.scrollTop = val
    })
    timer2 = animate(html.scrollLeft,0,(val)=>{
        html.scrollTop = val
    })
}

function animate(start , end  , callback){
    let tick = 16;
    var total = 1000;
    var times = Math.ceil(total / tick)
    var curTimes = 0;
    var dis = (end - start) / times;
    var timer = setInterval(()=>{
        curTimes++;
        start +=dis;
        if(curTimes == times){
            start = end;
            clearInterval(timer)
        }
        callback(start)
    },tick)
    console.log(timer)
    return timer
}