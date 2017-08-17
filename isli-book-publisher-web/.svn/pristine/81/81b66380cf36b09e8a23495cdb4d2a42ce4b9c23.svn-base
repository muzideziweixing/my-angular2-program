// 自主对账 - 列表
let checkTableInfo = {
    id: '1',
    date: '2016-09-12',
    trade_number: '12',
    trade_total: '5.82',
    trade_income: '2.43',
    trade_charge: '1.08'
}
let arr = [];
let getArr = (obj, arr) => {
    obj.id = Math.floor(Math.random() * 100);
    obj.date = '2016-09-' + Math.floor(Math.random() * 30);
    obj.trade_number = Math.floor(Math.random() * 100);
    obj.trade_total = '5.' + Math.floor(Math.random() * 100);
    obj.trade_income = '2.' + Math.floor(Math.random() * 100);
    obj.trade_charge = '1.' + Math.floor(Math.random() * 100);
    let newObj = {
        id: obj.id.toString(),
        date: obj.date.toString(),
        trade_number: obj.trade_number.toString(),
        trade_total: obj.trade_total.toString(),
        trade_income: obj.trade_income.toString(),
        trade_charge: obj.trade_charge.toString()
    };
    arr.push(newObj);
}
export let getArrData = () => {
    for (let i = 0; i < 58; i++) {
        getArr(checkTableInfo, arr);
    }
    return arr;
};

export let checkTotalBarInfo = {
    trade_total: '200.88',
    trade_income: '80098.88'
}


// 自主对账 - 详情列表
let checkDetailsTableInfo = {
    id: '1',
    order_num: 'FM2017081209873245',
    order_date: '2016-11-04 08:59:11',
    goods_name: '刺猬的优雅',
    goods_price: '5.82',
    trade_price: '2.43',
    earnings: '1.08',
    earnings_ratio: '1.08',
    platform_earnings: '1.08',
    trade_fee: '1.08'
}
let arr2 = [];
let getArr2 = (obj, arr2) => {
    obj.id = Math.floor(Math.random() * 100);
    obj.order_num = 'FM2017081214356765454' + Math.floor(Math.random() * 4);
    obj.order_date = '2016-11-04 08:59:11';
    obj.goods_name = '刺猬的优雅';
    obj.goods_price = '5.' + Math.floor(Math.random() * 100);
    obj.trade_price = '2.' + Math.floor(Math.random() * 100);
    obj.earnings = '1.' + Math.floor(Math.random() * 100);
    obj.earnings_ratio = Math.floor(Math.random() * 100) + '.0';
    obj.platform_earnings = '1.' + Math.floor(Math.random() * 100);
    obj.trade_fee = '1.' + Math.floor(Math.random() * 100);
    let newObj2 = {
        id: obj.id.toString(),
        order_num: obj.order_num.toString(),
        goods_name: obj.goods_name.toString(),
        order_date: obj.order_date.toString(),
        goods_price: obj.goods_price.toString(),
        trade_price: obj.trade_price.toString(),
        earnings: obj.earnings.toString(),
        earnings_ratio: obj.earnings_ratio.toString(),
        platform_earnings: obj.platform_earnings.toString(),
        trade_fee: obj.trade_fee.toString()
    };
    arr2.push(newObj2);
}
export let getArrData2 = () => {
    for (let i = 0; i < 62; i++) {
        getArr2(checkDetailsTableInfo, arr2);
    }
    return arr2;
};

// 自主对账 - 对账单概览
export let checkStatementInfo = {
    id: '12',
    check_date: '2017-08-23',
    check_number: '12',
    check_party: '泛媒阅读平台',
}

// 自主对账 - 明细
export let statementDetailsInfo = {
    id: '12',
    this_earnins_total: '32.65',
    earnings_total: '12.43',
    trade_total: '43.86',
    trade_fee_total: '2.56',
}

// 自主结算 - 列表
let SettlementDetailsTableInfo = {
    id: '1',
    start_date: '2017-08-12',
    end_date: '2017-09-23',
    numbers: 'FM2017081289764653',
    part: '泛媒阅读',
    sum: '41.08',
    status: '结算成功',
}
let arr3 = [];
let getArr3 = (obj, arr3) => {
    obj.id = Math.floor(Math.random() * 100);
    obj.start_date = '2017-08-16';
    obj.end_date = '2017-09-23';
    obj.numbers = 'FM2017081289764653';
    obj.part = '泛媒阅读' + Math.floor(Math.random() * 100);
    obj.sum = Math.floor(Math.random() * 100) + '.' + Math.floor(Math.random() * 100);
    obj.status = '结算成功';
    let newObj3 = {
        id: obj.id.toString(),
        start_date: obj.start_date.toString(),
        end_date: obj.end_date.toString(),
        numbers: obj.numbers.toString(),
        part: obj.part.toString(),
        sum: obj.sum.toString(),
        status: obj.status.toString()
    };
    arr3.push(newObj3);
}
export let getArrData3 = () => {
    for (let i = 0; i < 262; i++) {
        getArr3(checkDetailsTableInfo, arr3);
    }
    return arr3;
};

// 自主结算 - 结算凭证
export let SettlementProofInfo = {
    id: '12',
    set_func: '支付宝',
    set_number: '2012060113038351',
    set_proof: '/assets/images/applyShop.png'
}