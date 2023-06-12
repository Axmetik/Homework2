const body = document.querySelector('body')
const checkbox = document.getElementById('checkbox-toggle')

checkbox.addEventListener('change', (event) => {
    if(event.target.checked){
        body.style.overflow = 'hidden'
    }else{
        body.style.overflow = 'initial'
    }
})

const peoples_right = document.querySelector('.steps__people-right');
const steps_hover = document.querySelector('.steps__hover');

peoples_right.addEventListener('mouseover', () => {
    steps_hover.style.display = 'flex';
})
peoples_right.addEventListener('mouseout', () => {
    steps_hover.style.display = 'none';
})






