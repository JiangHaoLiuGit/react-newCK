**封装多选框**

1.dates:一个数组,数组的每一项是一个对象,对应一个多选框
    dates = [{
        value:"football",text:"足球",
        value:"basketball",text:"篮球",
        value:"movie",text:"电影",
        value:"other",text:"其他"
    }]
2.name,每一个都对应的name
3.chooseDates:数组,表示当前选中的值
4.onChange:当多选框变化是执行的方法