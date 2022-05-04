const discord = document.querySelector('#discord')
const discordTag = document.querySelector('#discordTag')

const warningSuccess = document.querySelector('#copywarnSuccess')
const warningError = document.querySelector('#copywarnError')

discord.addEventListener('click', async () => {
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
})