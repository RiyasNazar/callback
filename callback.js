function call(name,callback1,callback2) {
    if(name =="riyas" ) {
    callback1(); 
    } if(name == "Nazar") {
    callback2()
    };
    }
    
    call("Nazar", function callback1() {
    console.log("Riyas");
    },
    function callback2() {
    console.log("Nazar");
    });

