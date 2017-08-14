let newsInfo = {
    id: 1,
    time: '12小时前',
    status: '0',
    news: '下架原了哈哈哈哈哈哈'
}
let arr = [];
let getArr = (obj, arr) => {
    obj.id = Math.floor(Math.random() * 4);
    obj.time = '12小时前';
    obj.status = '0';
    obj.news = '《苏菲的世界》已经被强制下架！原因：这是测试用测试用这是测试用这是测试用这是测试用' + Math.floor(Math.random() * 100);
    let newObj = {
        id: obj.id.toString(),
        time: obj.time.toString(),
        status: obj.status.toString(),
        news: obj.news.toString()
    };
    arr.push(newObj);
}
export let getArrData = () => {
    for (let i = 0; i < 76; i++) {
        getArr(newsInfo, arr);
    }
    return arr;
};
