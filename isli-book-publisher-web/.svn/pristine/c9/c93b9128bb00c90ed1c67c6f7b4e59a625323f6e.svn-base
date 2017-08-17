/*****************************自主对账*************************************/
export class CheckTableValueObj {
    constructor(
        public id?: string,                       // 唯一
        public date?: string,                     // 日期
        public trade_number?: string,             // 交易单数
        public trade_total?: string,              // 交易总额
        public trade_income?: string,             // 交易收入
        public trade_charge?: string,             // 交易手续费
    ) { }
}

export class SearchCheckTableValueObj {
    constructor(
        public status?: string,                   // 账单状态
        public start_date?: string,               // 开始日期
        public end_date?: string,                 // 结束日期 
    ) { }
}

export class CheckDetailsTableValueObj {          // 对账 & 结算 详情 列表
    constructor(
        public id?: string,                       // id
        public order_num?: string,                // 订单编号
        public goods_name?: string,               // 商品名称 
        public goods_price?: string,              // 商品价格 
        public trade_price?: string,              // 交易价格 
        public earnings?: string,                 // 本次收益 
        public trade_fee?: string,                // 交易手续费 
        public earnings_ratio?: string,           // 收益比例 
        public platform_earnings?: string,        // 平台收益 
    ) { }
}

export class CheckStatementObj {                  // 对账单概览
    constructor(
        public id?: string,                       // id
        public check_date?: string,               // 账单日期
        public check_number?: string,             // 账单交易量 
        public check_party?: string,              // 账单统计方  
    ) { }
}

export class CheckStatementDetailsObj {           // 对账单明细
    constructor(
        public id?: string,                       // id
        public this_earnins_total?: string,       // 本次收益总额
        public earnings_total?: string,           // 平台收益总额
        public trade_total?: string,              // 累计交易总额 
        public trade_fee_total?: string,          // 交易手续费总额  
    ) { }
}

/*****************************自主结算*************************************/
export class SettlementTableValueObj {            // 结算列表 & 结算单概览
    constructor(
        public id?: string,                       // id
        public settlement_start_date?: string,    // 结算日期-start
        public settlement_end_date?: string,      // 结算日期-end
        public settlement_status?: string,        // 结算状态 
        public settlement_party?: string,         // 结算支付方  
        public settlement_number?: string,        // 结算单号  
        public settlement_money?: string,         // 结算金额  
    ) { }
}

export class SearchSettlementTableValueObj {
    constructor(
        public id?: string,                       // id
        public settlement_date_start?: string,    // 结算日期
        public settlement_date_end?: string,      // 结算日期
        public settlement_status?: string,        // 结算状态 
        public settlement_party?: string,         // 结算支付方  
        public settlement_number?: string,        // 结算单号   
    ) { }
}
 