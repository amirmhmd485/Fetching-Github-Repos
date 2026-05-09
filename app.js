//code
const input = document.querySelector("input");
const btn = document.querySelector("button");;
const dataLoaded = document.querySelector(".data-loaded")

function fetchingApi(){
    if(input.value == ""){
        dataLoaded.innerHTML = "Enter a Github username";
    }
    else{
        dataLoaded.innerHTML = "";
        fetch(`https://api.github.com/users/${input.value}/repos`).then((respone) =>{
            return respone.json()
        }).then((repos) => {
            repos.forEach((repo) => {
                let data = document.createElement("div");
                data.className = "data";

                let repoName = document.createElement("p");
                let textP = document.createTextNode(repo.name);
                data.appendChild(repoName);
                repoName.appendChild(textP);
                
                let span = document.createElement("span");
                let textSpan = document.createTextNode(repo.stargazers_count);
                span.appendChild(textSpan);
                data.appendChild(span);

                let a = document.createElement("a");
                let textA = document.createTextNode("Visit");
                a.appendChild(textA);
                a.href = `https://github.com/${input.value}/${repo.name}`;
                a.setAttribute("target" , "_blank")
                data.appendChild(a);
                dataLoaded.appendChild(data);
            })
        })
    }
}
btn.addEventListener("click" , fetchingApi);