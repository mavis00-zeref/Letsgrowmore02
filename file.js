let box = document.getElementById('box');

let api = async()=>{
    let res = await fetch("https://reqres.in/api/users?page=1");
    let file = await res.json();
    let info = file.data.map((element)=>{
        return `<li>
                    <div class="image">
                    <img src="${element.avatar}" alt=""></div>  
                    <h2>${element.first_name} ${element.last_name}
 ${element.email}</h2>
                                    
                </li>`
    }).join('');
    box.innerHTML = info;
}

let Btn = document.getElementById('button1');
Btn.addEventListener('click',()=>{
    box.innerHTML = `<div class="loader"></div>`;
    setTimeout(() => {
        api()
    }, 7000);
})


