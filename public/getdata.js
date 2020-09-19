var info =  document.getElementById("info")

    console.log("Inside Javscript File")
      fetch('http://localhost:3000/getdata', { method: 'GET'}).then((content) => content.json()).then(function(content) {
      console.log(content.book)
      var data = ""
      var i=0
      for(i in content.book)
      {
        console.log('In for')
        data +="<tr><td>" + content.book[i].id + "</td><td>" + content.book[i].language + "</td></tr>"   }
      //var data= JSON.stringify(content)
      var info = document.getElementById('info')
      info.innerHTML = data
      }).catch(function(error) {
      console.log(error)
    });   
