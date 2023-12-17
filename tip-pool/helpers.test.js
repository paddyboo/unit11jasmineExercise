describe("Helpers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 60;
    tipAmtInput.value = 5;
    submitPaymentInfo();
  });  

  it('should add total bill amount of all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(60);  
    billAmtInput.value = 10;
    tipAmtInput.value = 0;  
    submitPaymentInfo();  
    expect(sumPaymentTotal('billAmt')).toEqual(70);
  });

  
  it('should calculate a tip percent on calculateTipPercent()', function () {
    expect(calculateTipPercent(50, 5)).toEqual(10);
  });
  
  it('should create a new td from value and add to tr on appendTd(tr, value)', function () {
    let newTr = document.createElement('tr');  
    appendTd(newTr, 'newTr');  
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('newTr');
  });
  
  it('should create a new td and add to tr on appendDeleteBtn(tr, type)', function () {
    let newTr = document.createElement('tr');  
    appendDeleteBtn(newTr);  
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });
  
  afterEach(function() {
    // teardown logic
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = ''; 
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
  });
});