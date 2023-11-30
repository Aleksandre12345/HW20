let p = document.querySelector('span')
let h3 =document.querySelector('h3')
let btn = document.querySelector('.btn')



btn.addEventListener("click", () => {
    getData()
})

async function getData () {
    btn.classList.add("rotate")
    h3.innerHTML = 'Loading ...'
    btn.setAttribute('disabled',true)
    try {
        let res = await fetch('https://api.adviceslip.com/advice')
        let data = await res.json()
    
        p.textContent = data.slip.id
        h3.innerHTML = data.slip.advice
    }catch (error) {
        console.error('Error:', error);
    } finally {
        btn.classList.remove("rotate")
        btn.removeAttribute('disabled');
    }
}
