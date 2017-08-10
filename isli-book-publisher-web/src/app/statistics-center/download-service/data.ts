let downloadProductListInfo = {
  id: 1,
  downloadNum: 20,
  imgSrc: 'assets/images/img.jpg',
  bookType: 'pdf',
  bookTitle: '如何掌控自己的时间和生活'
}
let arr = [];
let getArr = (obj, arr) => {
  obj.id = Math.floor(Math.random() * 4);
  obj.downloadNum = Math.ceil(Math.random() * 100);
  obj.imgSrc = 'assets/images/img.jpg';
  obj.bookType = 'pdf';
  obj.bookTitle = '如何掌控自己的时间和生活' + Math.floor(Math.random() * 100);
  let newObj = {
    id: obj.id.toString(),
    downloadNum: obj.downloadNum.toString(),
    imgSrc: obj.imgSrc.toString(),
    bookType: obj.bookType.toString(),
    bookTitle: obj.bookTitle.toString(),
  };
  arr.push(newObj);
}
export let getArrData = () => {
  for (let i = 0; i < 25; i++) {
    getArr(downloadProductListInfo, arr);
  }
  return arr;
};

// 详情
let downloadProductDetails = {
  id: '1',
  nickname: '18520345674',
  account: '12676765763',
  platform: 'Android:Huawei-hwt1a21l-19',
  device: '9ea728b7-7cf5-39fb-a2f0-2cdde66d01d8',
  downtime: '2017-07-18 14:54:50',
}
let downloadProductDetailsValue = [];
let getDetailTableListValue = (obj, downloadProductDetailsValue) => {
  obj.id = Math.floor(Math.random() * 4);
  obj.nickname = '18520345674--' + Math.floor((Math.random() + 1) * 4);
  obj.account = '12676765763';
  obj.platform = 'Android:Huawei-hwt1a21l-19';
  obj.device = '9ea728b7-7cf5-39fb-a2f0-2cdde66d01d8';
  obj.downtime = '2017-07-18 14:54:50';
  let newObj = {
    id: obj.id.toString(),
    nickname: obj.nickname.toString(),
    account: obj.account.toString(),
    platform: obj.platform.toString(),
    device: obj.device.toString(),
    downtime: obj.downtime.toString(),
  };
  downloadProductDetailsValue.push(newObj);
};
export let getArrDateilsData = () => {
  for (let i = 0; i < 37; i++) {
    getDetailTableListValue(downloadProductDetails, downloadProductDetailsValue);
  }
  return downloadProductDetailsValue;
};
