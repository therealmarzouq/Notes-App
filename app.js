// document.body.onload = addnewNote;
function addnewNote(){
    var newDiv = document.createElement('div'); 
    newDiv.className = 'note shadow';
    newDiv.id = 'note';
    document.body.appendChild(newDiv);
    

    // newDiv = document.createElement('div');
    var newCard =document.createElement('div');
    newCard.className = 'card text-center';
    newCard.setAttribute("style","border-radius: 0 !important; border: 0;");

    newDiv.appendChild(newCard);

    var caardHead = document.createElement('div');
    caardHead.className = 'card-header';
    // var hOne =document.createElement('h1');
    // hOne.textContent = 'Featured';  
    newCard.appendChild(caardHead);
    var imaGes0 =document.createElement('span');
    imaGes0.addEventListener('click',function ()
    {
     document.body.removeChild(newDiv);  
    }  ); 
    var trash = document.createElement('i');
    trash.className = 'fas fa-trash-alt';
    imaGes0.appendChild(trash);
    var imaGes1=document.createElement('span');
    imaGes1.setAttribute("style","margin-right: .5rem;");
    // imaGes1.addEventListener('click', function (){
    //     var switchIt = document.getElementById('targetDiv');
    //     switchIt.style.display = 'none';
    //     var swithIt = document.getElementById('sourceTA');
    //     swithIt.style.display = 'inline-block';
    // });
    var pencil = document.createElement('i');
    pencil.className = 'fas fa-pencil-alt';
    imaGes1.appendChild(pencil);
    var datec = document.createElement('div');
    datec.id = 'dateC';
    datec.className = 'text-muted';
    datec.setAttribute(
        "style", "display: inline-block; float: left;"
    );
    datec.innerHTML = today;
    // caardHead.appendChild(hOne);
    caardHead.appendChild(imaGes0);
    caardHead.appendChild(imaGes1);
    caardHead.appendChild(datec);

    var caardBody =document.createElement('textarea');
    caardBody.id = 'sourceTA';
    caardBody.className = 'card-body';
    caardBody.addEventListener('mouseout', function(){
      var text = caardBody.value,
        target = caardBody0,
        converter = new showdown.Converter(),
        html = converter.makeHtml(text);
      
      target.innerHTML = html;

        // var switchIt = ;
        caardBody.style.display = 'none';
        // var swithIt = document.getElementById('sourceTA');
        caardBody0.style.display = 'inline-block';
    });
    var caardBody0 =document.createElement('div');
    caardBody0.id = 'targetDiv';
    caardBody0.className = 'card-body';
    caardBody0.addEventListener('click', function(){
        
    //   var swithIt = document.getElementById('sourceTA');
      caardBody0.style.display = 'none';
    //   var switchIt = document.getElementById('targetDiv');
      caardBody.style.display = 'inline-block';
    });
    // caardBody.contentEditable="true";
    // caardBody.innerHTML = marked('# Marked in the browser\n\n\n\nRendered by **marked**.The *catmeow*');
    newCard.appendChild(caardBody);
    newCard.appendChild(caardBody0);

    // var footeer = document.createElement('div');
    // footeer.className = 'card-footer text-muted';
    // footeer.textContent = '2 days ago';
    // newCard.appendChild(footeer);


};

function delNote(){
    var del = document.getElementById('note');
    del.parentElement.removeChild(del);
    // body.removeChild(newDiv);
};
// NEEDS FIX
function editNote(){
    document.getElementById('content').contentEditable = 'true';
    document.designMode='on'; void 0
}
// document.body.contentEditable='true'; 

function run() {
    var text = document.getElementById('sourceTA').value,
        target = document.getElementById('targetDiv'),
        converter = new showdown.Converter(),
        html = converter.makeHtml(text);
      
      target.innerHTML = html;

      
      var swithIt = document.getElementById('sourceTA');
      swithIt.style.display = 'none';
      var switchIt = document.getElementById('targetDiv');
      switchIt.style.display = 'inline-block';
  }
function switchIt() {
    var switchIt = document.getElementById('targetDiv');
    switchIt.style.display = 'none';
    var swithIt = document.getElementById('sourceTA');
    swithIt.style.display = 'inline-block';
}  

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
var createDate = document.getElementById('dateC');
createDate.innerHTML = today;