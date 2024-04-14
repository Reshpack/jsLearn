window.onload = function() {

    function get(url){ //get takes in a url (data to collect)
        return new Promise(function(resolve, reject) { // a new promise function resolve = success, reject = error
            let xhttp = new  XMLHttpRequest(); // 
            xhttp.open("GET", url, true); // true for asynchronous
            xhttp.onload = function() {// when this data has loaded
                if (xhttp.status == 200) {//set status equal to 200
                    resolve(JSON.parse(xhttp.response)); // getting response from http method if works
                } else {
                    reject(xhttp.statusText);// calling reject method
                }
            };
            xhttp.onerror = function() { // Reject again
                reject(xhttp.statusText);
            };
            xhttp.send(); 
        });
    }

    let promise = get("data/tweets.json");// 
    promise.then(function(tweets){ //using .then(method)
        console.log(tweets);
        return get("data/friends.json"); //chained dealing with callbacks
    }).then(function(friends) {
        console.log(friends);
        return get("data/videos.json")
    }).then(function(videos){
        console.log(videos);
        }).catch(function(error){ //.catch(m)
        console.log(error)
    })

};