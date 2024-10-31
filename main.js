document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.getElementById('profile-avatar');
    const name = document.getElementById('profile-name');
    const username = document.getElementById('profile-username');
    const repositorios = document.getElementById('repositorios');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/leonardokako')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })
}) 