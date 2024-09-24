
// function j(id){
//     document.getElementById(id).addEventListener("click",(e)=>{
//         e.preventDefault()
//         console.log('jhj')
//     })
// }

console.log(document.getElementsByClassName('donation-btn'))
const btns=document.getElementsByClassName('donation-btn')
for(const btn of btns){
    btn.addEventListener("click",(e)=>{
      
      console.log(e.target.parentNode.children[3].value)
    //  e.target.parentNode.parentNode.children[1].innerTexr= e.target.parentNode.children[0].children[1].innerText
    if(!isNaN(e.target.parentNode.children[3].value) && parseFloat(e.target.parentNode.children[3].value)>0){
      e.preventDefault()
      e.target.parentNode.children[0].children[1].innerText=parseFloat(e.target.parentNode.children[3].value)+parseFloat(e.target.parentNode.children[0].children[1].innerText)+" BDT"
      document.getElementById('available-amount').innerText=parseFloat(document.getElementById('available-amount').innerText)-parseFloat(e.target.parentNode.children[3].value)
      const div=document.createElement('div')
      const htwo=document.createElement('h2')
      const paragraph=document.createElement('p')
      paragraph.innerText=e.target.parentNode.children[3].value+' tk Donated for '+e.target.parentNode.children[1].children[0].innerText
      // paragraph.innerHTML="ijijkjkjkj"
      div.appendChild(htwo)
      div.appendChild(paragraph)
      
      document.getElementById('history-part').appendChild(div)
    } else{
      alert('dbfgd')
    }
    
    })
console.log(btn)
}