window.onload = () => {
    const CONFIG = {
        user: document.querySelector('#inputEmail'),
        password: document.querySelector('#inputPassword'),
    }
    // CONFIG.submit.addEventListener('click',CONFIG.passAuth,true)
    document.querySelector('#passAuth').onclick = () => {
        window.location.href = 'https://www.thatgamecompony.cn/FJCPC-LearnHistory/'
    }
}
