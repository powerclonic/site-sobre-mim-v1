const discord = document.querySelector('#discord')
const discordTag = document.querySelector('#discordTag')

const warningSuccess = document.querySelector('#copywarnSuccess')
const warningError = document.querySelector('#copywarnError')

const isMobile = screen.width < 480

discord.addEventListener('click', async () => {
    if(!isMobile) {
        navigator.clipboard.writeText(`${discordTag.innerText}`).then(() => {
            warningSuccess.classList.add('warn--vis')
    
            setTimeout(() => {
                warningSuccess.classList.remove('warn--vis')
            }, 2000)
        }).catch(err => {
            warningError.classList.add('warn--vis')
    
            console.log(err);
            setTimeout(() => {
                warningError.classList.remove('warn--vis')
            }, 2000)
        })
    } else {
        navigator.share(`${discordTag.innerText}`).then(() => {
            warningSuccess.classList.add('warn--vis')
    
            setTimeout(() => {
                warningSuccess.classList.remove('warn--vis')
            }, 2000)
        }).catch(err => {
            warningError.classList.add('warn--vis')
    
            console.log(err);
            setTimeout(() => {
                warningError.classList.remove('warn--vis')
            }, 2000)
        })
    }
})