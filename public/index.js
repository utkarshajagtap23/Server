
var fname =  document.querySelector('#fname')
var lname =  document.querySelector('#lname')

function send(){
    fetch('http://localhost:3000/', {
    method:'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    body: JSON.stringify({"fname":fname.value,
      "lname": lname.value})
    }).then((content) => content.json()).then(function(content){
        console.log(content)
    }).catch(function(e)
    {
        console.log(e)
    });
}
