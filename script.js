window.onload = (function(){
    btnSave = document.getElementsByClassName("saveBtn")[0];
    parents = document.getElementsByClassName("parents");
    allishere = document.getElementById("allishere");
    
    btnSave.onclick = function(e){
        
        for (const element of parents) {

            html2canvas(element,{
                gradientText: [{
                  start: 0,
                  color: 'rgb(100, 100, 100)'
                }, {
                  start: 0.5,
                  color: 'white'
                }, {
                    start: 1,
                    color: 'rgb(100, 100, 100)'
                  }]
              }).then(canvas => {
                document.body.appendChild(canvas)
            });
        }
       
        
    }
    
    formitu = document.getElementById("formitu");
    formitu.onsubmit = function(e){
        e.preventDefault();
        alltext = document.getElementById("txtInputan").value.split("\n");
        allishere.innerHTML = "";
        for (const element of alltext) {
            let splitted = element.split("$");
            let nama = splitted[0];
            let nomor = splitted[1];
            let job = splitted[2];
            
            allishere.innerHTML += '<div class="parents"><div class="image"></div><div class="nama over">'+nama+'</div><div class="nomor over">'+nomor+'</div><div class="job over">'+job+'</div></div>'; 

        }

        // console.log(alltext)
    }
    

});