// document.addEventListener('DOMContentLoaded', function() {
//     const nameElement = document.querySelector('#name');
//     const usernameElement = document.querySelector('#username');
//     const avatarElement = document.querySelector('#avatar');
//     const reposElement = document.querySelector('#repos');
//     const followersElement = document.querySelector('#followers');
//     const followingElement = document.querySelector('#following');
//     const linkElement = document.querySelector('#link');

//     fetch('https://api.github.com/users/LuizCMSpengler')
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(json) {
//         nameElement.innerText = json.name;
//         usernameElement.innerText = json.login;
//         avatarElement.src = json.avatar_url;
//         followingElement.innerText = json.following;
//         reposElement.innerText = json.public_repos;
//         linkElement.href = json.html_url;
//         followersElement.innerText = json.followers;
//     })
// })

$(document).ready(function () {
    $("#btn-buscar").click(function () {
        $.ajax({
            url: "https://api.github.com/users/LuizCMSpengler",
            dataType: "json",
            success: function (data) {
                $(".profile-avatar").attr("src", data.avatar_url);
                $(".profile-name").text(data.name);
                $(".profile-username").text(data.login);
                var $profileNumbers = $(".numbers");
                $profileNumbers
                    .find(".numbers-item:eq(0) span")
                    .text(data.public_repos);
                $profileNumbers.find(".numbers-item:eq(1) span").text(data.followers);
                $profileNumbers.find(".numbers-item:eq(2) span").text(data.following);
                $(".profile-link").attr("href", data.html_url);
                },
            });
        });
    });