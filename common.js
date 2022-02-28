const style = document.createElement('style');
style.innerText = '.back{position:fixed;right:8%;bottom:4%;z-index:2;background-color:#fff;line-height:100%;font-size:1.6rem;color:rgb(0,163,65);border:#ccc 1px solid;border-radius:24px;padding:8px 12px;box-shadow:2px 2px 8px #ccc;cursor:pointer;transition:transform 0.2s ease;}.back:hover{transform:translateY(-4px);}';
document.head.appendChild(style);

const back = document.createElement('div');
back.innerHTML = '&#8619; Go Back';
back.classList.add('back');
document.body.appendChild(back);
back.onclick = function () {
    window.location = '../';
}

// .back {
//     position: absolute;
//     right: 8%;
//     bottom: 4%;
//     z-index: 1;
//     line-height: 100%;
//     font-size: 1.6rem;
//     color: rgb(70, 211, 133);
//     border: #ccc 2px solid;
//     border-radius: 24px;
//     padding: 8px 16px;
//     box-shadow: 4px 4px 8px #ccc;
//     cursor: pointer;
//     transition: transform 0.2s ease;
// }
// .back:hover {
//     transform: translateY(-4px);
// }