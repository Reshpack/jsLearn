// fetch('url', {optional, post req instead of git request})

// Fetch always succeeds even if theres an error

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log('NOT SUCCESSFUL')
        }
        res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

    // within 200 - 299 is ok


    