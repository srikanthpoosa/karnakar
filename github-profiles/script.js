const profileApi = 'https://api.github.com/users/';
const form = document.getElementById("form");
const input = document.querySelector(".searchInput");
const main = document.getElementById("main")

//getProfile();

async function getProfile(searchTerm){
const res = await fetch(profileApi + searchTerm);
const resData = await res.json();
console.log('getProfile -> resData', resData);
showProfileData(resData);
getRepos(searchTerm);
}

async function getRepos(userName){
const res = await fetch(profileApi + userName +'/repos');
const resData = await res.json();
console.log('getRepos -> resData', resData);
showRepos(resData.slice(0,10));
}

function showRepos(repos){
const reposEl = document.getElementById("repos");

repos.forEach((repoItem)=>{
    const repo = document.createElement("a");
    repo.classList.add("repo");
    repo.innerHTML = repoItem.name;
    repo.href = repoItem.html_url;
    repo.target = "_blank";
    reposEl.appendChild(repo);
})
}
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const searchTerm = input.value;
    getProfile(searchTerm);
})

function showProfileData(data){
    main.innerHTML = "";
const profile = document.createElement("div");
profile.classList.add("profile-container");
profile.innerHTML = ` <div class="profile-image">
<img src="${data.avatar_url}" alt="image"> 
</div>
<div class="profile-info">
<h3>${data.name}</h3>
<span>${data.bio}</span>
<ul>
    <li><i class="fas fa-eye"></i> ${data.followers}</li>
    <li>following: ${data.following}</li>
    <li>repos: ${data.public_repos}</li>
</ul>
<div id="repos"></div>
</div>`;
main.appendChild(profile);
}