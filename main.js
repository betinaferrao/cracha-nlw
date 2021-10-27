const LinksSocialMedia = {
    github: 'betinaferrao',
    linkedin: 'in/betina-corazza-ferrão-835b28208',
    facebook: 'betinaferrao',
    instagram: 'betinaferrao',
    twitter: 'betinaferrao'
}

function changeSocialMediaLinks(){
    for (let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    //Vai na url e pega o que está dentro
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
