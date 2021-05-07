
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=> response.json())
.then(data => showUser(data))

function showUser(data){
    return data;
}