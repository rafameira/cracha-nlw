  const linksSocialMedia = {
        instagram: 'jakeliny.gracielly',
        github: 'rafameira'
      }

      

      //function changeSocialMediaLinks(){
          //for (let li of socialLinks.children){
            //const social = li.getAttribute('class')
          
            //li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
            //alert(social)
         // }
      //}
       // i = i + 1
      // ser humano lê, 12345678910...
      //computador lê, 0123456789...
      //changeSocialMediaLinks()

      //API GITHUB

      function getGitHubProfileInfos(){
        const url = `https://api.github.com/users/${linksSocialMedia.github}`

       fetch(url).then(response => response.json())
       .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
       })
      }

      getGitHubProfileInfos()


      //ARROW FUNCTIONS
      //function nomeDaFuncao(argumentos){
        //code
      //}
      
      //argumento => {
        //(argumento1, argumento2) =>
       // () => 

      //}

      // Para mudar o nome do html via DOM é so usar o comando .textContent