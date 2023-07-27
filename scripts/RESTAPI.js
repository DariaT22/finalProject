//RESTAPI
window.onload = function() {
    getApi();
   setTimeout(setText, 3000);
  };
    
  function getApi(){
    for (let i = 1; i < 10; i++) {
      var url = 'https://jsonplaceholder.typicode.com/todos/' + i;
      fetch(url)
        .then(response => response.json())
        .then(json => resultApi.push(json)
        )
   }
  };
  
  function setText(){
    resultApi.forEach(elem => {
      var id_comments = 'comments_' + elem.id;
      var parent = document.getElementById(id_comments);
      if( parent != null){
        let p = document.createElement('p');
        p.textContent = elem.title;
        parent.appendChild(p);
      }
   
  });
  }