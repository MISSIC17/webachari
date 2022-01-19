const button = document.querySelector('.button-wrapper');
button.addEventListener('click',()=>{
    button.animate(
        [
            {
                transform:'scale(0.9)',offset:.25
            },
            {
                transform:'scale(1.1)',offset:.5
            },
            {
                transform:'scale(1)',offset:1
            }
        ],
        {
            duration:300,
            easing:'ease-in-out'
        }
        
    )
})

function showPencil(pencilnum,formcomp){
    let pencil = document.querySelector(`#pencil${pencilnum}`);
    console.log(pencil);
    // let formcomp = document.querySelector(formcompClass);
    console.log(formcomp)
    formcomp.addEventListener('focus',()=>{
        pencil.classList.remove('hidden');
        console.log(pencil.classList);
        
    })
    formcomp.addEventListener('focusout',()=>{
        pencil.classList.add('hidden');
        console.log(pencil.classList);    
})
};
// showPencil(1,document.querySelector('#name'));
showPencil(2,document.querySelector('#email'));
showPencil(1,document.querySelector('#name'));
showPencil(3,document.querySelector("#description"));
window.onload = () => {
    document.querySelector('.onload-wrapper').style.display = 'none';
    document.querySelector('.main-wrapper').style.display = 'block';
}