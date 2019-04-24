function call(name,callback1,callback2) {
    if(name =="riyas" ) {
    callback1(); 
    } if(name == "tharzeez") {
    callback2()
    };
    }
    
    call("tharzeez", function callback1() {
    console.log("Riyas");
    },
    function callback2() {
    console.log("Tharzeez");
    });

