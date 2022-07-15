const user = "c0mputer64"
fetch(`https://api.github.com/users/${user}/repos`)
.then(response => response.json())
.then(repos => {
    const rootDiv = document.getElementById('scroll-cards');
    for(let i = 0; i < repos.length; i++) {
        const url = repos[i].html_url;
        const name = repos[i].name;
        const language = repos[i].language;
        const stargazers_count = repos[i].stargazers_count;

        const newDiv = document.createElement('div');
        newDiv.innerHTML = 
                `<div class="card-github pb-4" onmouseover="buttonOver(this)" onmouseout="buttonOut(this)" style="margin-top: 2%;">
                <div class="container-fluid d-flex">
                <div class="col d-flex" style="text-align: left;">
                    <a href="${url}" target="_blank">  
                    <b><i>${name}</i></b>
                    </a>
                </div>
                <div class="col" style="text-align: right;">
                    ${language}
                    <i class="fa-regular fa-star"></i> ${stargazers_count}
                </div>
                </div>
            </div>`
        rootDiv.appendChild(newDiv);
    }
});