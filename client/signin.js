const url = "http://localhost:5100/api/Customer"

async function login(){
    let customers = await getCustomers()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let foundAccount = false

    customers.forEach(function(a){
        if(email == a.email && password == a.password && email != '' && password != ''){
            foundAccount = true
        }
    })

    if(foundAccount){
        console.log('you entered correct info')
        sessionStorage.setItem('account', email)
        window.location.href = "dashboard.html"
 
    } else console.log('INVALID LOGIN')
}

async function getCustomers(){
    let response = await fetch(url)
    let customers = await response.json()

    return await customers
}

