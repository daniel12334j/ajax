// document.addEventListener('DOMContentLoaded', function(){
//     const avatar = document.getElementById('avatar')
//     const nome = document.getElementById('name')
//     const user = document.getElementById('user')
//     const repositorio = document.getElementById('repositorio');
//     const seguidores = document.getElementById('seguidores');
//     const seguindo = document.getElementById('seguindo');
//     const botao = document.getElementById('but');

//     botao.addEventListener('click',function(){
        
//         fetch('https://api.github.com/users/daniel12334j')
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(json){
//             avatar.src = json.avatar_url;
//             nome.innerHTML = json.name;
//             user.innerHTML = json.login
//             repositorio.innerHTML = json.public_repos;
//             seguidores.innerHTML = json.followers;
//             seguindo.innerHTML = json.following;
//         })
    
        
//     })

// })

$(document).ready(function(){
    const avatar = document.getElementById('avatar')
    const nome = document.getElementById('name')
    const user = document.getElementById('user')
    const repositorio = document.getElementById('repositorio');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const botao = document.getElementById('but');


    botao.addEventListener('click',function(){
            const uu = document.getElementById('uu').value;
            console.log(uu)
        fetch(`https://api.github.com/users/${uu}`)
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            avatar.src = json.avatar_url;
            nome.innerHTML = json.name;
            user.innerHTML = json.login
            repositorio.innerHTML = json.public_repos;
            seguidores.innerHTML = json.followers;
            seguindo.innerHTML = json.following;
        })
    
        
    })
})

// fetch('https://api.github.com/users/daniel12334j')
//     .then(function(){
//         console.log()
//     })