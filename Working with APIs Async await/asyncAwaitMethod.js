// Await function
async function go() {
    // just wait
    await StylePropertyMap(1000);
    //or capture the returning value
    const response = await StylePropertyMap(750);
    console.log(response);
}




// Another fast example
const getDetails = async function() {
    // Fire both
    const sureshPromise = axios.get('https://reqres.in/api/users');
    const lisaPromise = axios.get('https://reqres.in/api/users');
    // and wait to both to come back
    const [suresh , lisa] = await Promise.all([sureshPromise, lisaPromise]);
    const html = `
    <h1>${suresh.name}</h1>
    <h1>${lisa.name}</h1>
    `;
}

// error handling Try/catch
async function displayData() {
    try {
        const suresh = await axios.get('https://reqres.in/api/users')
        console.log(data); // Work with Data
    } catch (error) {
        console.log(error); // Handle error
    }
}

// Higher order functions 
// Create a function without any error handling
async function yolo() {
    // do something that errors out
    const suresh = await axios.get('https://reqres.in/api/users')
}
// higher order function
function handleError(fn) {
    return function (...params) {
        return fn(...params).catch(function (err) {
            // do something with error
            console.error(`Oops!`, err)
        });
    }
}



//ES6 hard to understand
const handleError = fn => (...params) => fn(...params).catch(console.error);



// create a new function with your hof
//wrap it in a HOC
const safeYolo = handleError(yolo);
safeYolo();

//order page example
// Start with a regular route where an error could happen
const getOrders = async (req, res, next) => {
    const orders = Orders.find({email: req.user.email});
    //something goes wrong
    if (!orders.length) throw Error('No Orders Found');
    // ....
}

//Since this unhandled, this route would cause the app to quit
router.get('/orders', catchErrors(getOrders));


// writing node