describe("Payments test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 60;
    tipAmtInput.value = 5;
  });
  
  it('should add a new payment to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();
  
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].billAmt).toEqual('60');
    expect(allPayments['payment' + paymentId].tipAmt).toEqual('5');
    expect(allPayments['payment' + paymentId].tipPercent).toEqual(8);
  });
  
  it('should not add a new payment with empty input on createCurPayment()', function () {
    billAmtInput.value = '';
    tipAmtInput.value= '';
    let currentPayment = createCurPayment();  
    expect(currentPayment).toEqual(undefined);
  });

  it('should update paymenttable on appendPaymentTable()', function () {
    let currentPayment = createCurPayment();
    allPayments['payment' + paymentId] = currentPayment;    
    appendPaymentTable(currentPayment);    
    let currentTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(currentTdList.length).toEqual(4);
    expect(currentTdList[0].innerText).toEqual('$60');
    expect(currentTdList[1].innerText).toEqual('$5');
    expect(currentTdList[2].innerText).toEqual('8%');
    expect(currentTdList[3].innerText).toEqual('X');
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
  