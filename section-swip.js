document.getElementById('history-section-btn').addEventListener('click',()=>{
    document.getElementById('history-part').classList.remove('hidden')
    document.getElementById('history-section-btn').classList.add('bg-[#B4F461]')
    document.getElementById('menu-part').classList.add('hidden')
    document.getElementById('donation-section-btn').classList.remove('bg-[#B4F461]')
})
document.getElementById('donation-section-btn').addEventListener('click',()=>{
    document.getElementById('menu-part').classList.remove('hidden')
    document.getElementById('history-part').classList.add('hidden')
    document.getElementById('donation-section-btn').classList.add('bg-[#B4F461]')
    document.getElementById('history-section-btn').classList.remove('bg-[#B4F461]')
})