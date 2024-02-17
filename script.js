var input = document.getElementById('input');
var btn = document.getElementById('addbtn');
var content = document.getElementById('content');

btn.addEventListener('click' , function(){
    var para = document.createElement('ul');
    console.log(para);
    para.innerText = input.value;
    content.appendChild(para);
    input.value = " ";

    para.addEventListener('click' ,function(){
        para.style.textDecoration = 'line-through';
    })

    para.addEventListener('dblclick' , function(){
        content.removeChild(para)
        console.log(para)
        
    })
    

    
})

 
