document.getElementById('history-section-btn').addEventListener('click',()=>{
    document.getElementById('history-part').classList.remove('hidden')
    document.getElementById('menu-part').classList.add('hidden')
})
document.getElementById('donation-section-btn').addEventListener('click',()=>{
    document.getElementById('menu-part').classList.remove('hidden')
    document.getElementById('history-part').classList.add('hidden')
})