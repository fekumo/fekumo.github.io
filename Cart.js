function payWithPaystack() {
    let handler = PaystackPop.setup({
      key: 'pk_test_d2ba8f80b35e7f3648832d0a4c23874bb101023b', // Replace with your public key
      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function(){
        alert('Window closed.');
      },
      callback: function(response){
        //showSummary();
        //let message = 'Payment complete! Reference: ' + response.reference;
        //alert(message);
      }
    });
  
    handler.openIframe();
  }