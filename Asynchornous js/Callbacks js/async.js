// video 
// Synchronous
window.onload = function() {

    function callback(val) {
        console.log(val);
    };

    let fruits = ['banana', 'apple', 'pearl'];
    fruits.forEach(callback);
    console.log("done"); // done shows up after the function is done then onto the next one
};

//asynchronous - Start now finish later
//inline callback
window.onload = function() {

    $.get("data/tweets.json", function(data){
        console.log(data);
    });
    console.log("test");
};

// preparing in advance
window.onload = function() {

    function cb(data) {
        console.log(data)
    }

    $.get("data/tweets.json", cb)
    console.log("test");
};
