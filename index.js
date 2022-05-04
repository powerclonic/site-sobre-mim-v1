const discord = document.querySelector('#discord')
const discordTag = document.querySelector('#discordTag')

const warningSuccess = document.querySelector('#copywarnSuccess')
const warningError = document.querySelector('#copywarnError')

discord.addEventListener('click', async () => {
    const copy = await navigator.clipboard.writeText(`${discordTag.innerText}`)

    if (copy) {
        warning.classList.add('warn--vis')
    } else {
        warningError.classList.add('warn--vis')
    }
})