var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) { //manha
  document.getElementById('msg').innerText='Bom dia!'
  document.getElementById('imagem').src='manha1.png'
  document.getElementById('dia').className='manha'
  document.body.className='corpo-manha'

} else if (hora <= 18) { //tarde
  document.getElementById('msg').innerText='Boa tarde!'
  document.getElementById('imagem').src='tarde1.png'
  document.getElementById('dia').className='tarde'
  document.body.className='corpo-tarde'
  
} else { //noite
  document.getElementById('msg').innerText='Boa noite!'
  document.getElementById('imagem').src='noite1.png'
  document.getElementById('dia').className='noite'
  document.body.className='corpo-noite'
 
} 