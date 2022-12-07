
function read(){
    const el = document.getElementById('card-read')
    const el2 = document.getElementById('card-read2')
    const el3 = document.getElementById('card-read3')
    const notif = document.getElementById('notification-num')

    el.classList.remove('active')
    el2.classList.remove('active')
    el3.classList.remove('active')

    notif.remove()

    console.log("remove class")
}
