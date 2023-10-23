const getS = selector => document.querySelector(selector);

getS('.btn-edit').addEventListener('click', () => {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
})

getS('.btn-save').addEventListener('click', () => {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
})

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');

})



let rp = document.getElementsByClassName('radiopx');
for(let i = 0; i< rp.length;i++){
    rp[i].addEventListener('click',()=>{
        getS('.top-block').style.fontSize = event.target.value;
    })
}




getS('#fontFamily').addEventListener('change', (e) => {
    getS('.top-block').style.fontFamily = e.target.value;
    getS('#fontFamily').children[0].disabled = 'true';
})

let arrColor = ['red', 'green', 'blue', 'yellow', 'gray', 'orange', 'coral', 'violet', 'brown'];
let blockColors = document.getElementsByClassName('color-box');
for (let i = 0; i < blockColors.length; i++) {
    blockColors[i].style.backgroundColor = arrColor[i];
}

const colortext = () => {
    getS('.top-block').style.color = event.target.style.backgroundColor;
    getS('.colors').style.display = 'none';
}
const colorbg = () => {
    getS('.top-block').style.backgroundColor = event.target.style.backgroundColor;
    getS('.colors').style.display = 'none';
}

getS('.btn-text-color').addEventListener('click', () => {
    getS('.colors').style.display = 'flex';
    for (let i = 0; i < blockColors.length; i++) {
        blockColors[i].addEventListener('click', colortext)
        blockColors[i].removeEventListener('click', colorbg)
    }
})

getS('.btn-bg-color').addEventListener('click', () => {
    getS('.colors').style.display = 'flex';
    for (let i = 0; i < blockColors.length; i++) {
        blockColors[i].addEventListener('click', colorbg)
        blockColors[i].removeEventListener('click', colortext)
    }
})

getS('.textBold').addEventListener('click', () => {
    if (event.target.checked) {
        getS('.top-block').style.fontWeight = '900';
    }
    else {
        getS('.top-block').style.fontWeight = '400';
    }
})

getS('.textCursive').addEventListener('click', () => {
    if (event.target.checked) {
        getS('.top-block').style.fontStyle = 'italic';
    }
    else {
        getS('.top-block').style.fontStyle = 'normal';
    }
})


getS('.btn-add').addEventListener('click', () => {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
})

getS('#list').addEventListener('click', () => {
    getS('.create-list').classList.add('show');
    getS('.create-table').classList.remove('show');
    getS('.blockup').style.height = '300px';

})

getS('#table').addEventListener('click', () => {
    getS('.create-list').classList.remove('show');
    getS('.create-table').classList.add('show',);
    getS('.blockup').style.height = '500px';

})

const list = document.forms['form-list'];
getS('.btn-create-list').addEventListener('click', () => {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>Items ${i + 1}</li>`;
    }
    getS('.edit-area').value += '</ul>';

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    getS('.blockup').style.height = '300px';
})

const ft = document.forms['formTable'];
getS('.btn-create-table').addEventListener('click', () => {
    const countTr = ft.countr.value;
    const countTd = ft.countd.value;
    const widthTd = ft.wtd.value;
    const heightTd = ft.htd.value;

    const widthBor = ft.wob.value;
    const typeBor = ft.typeofbor.value;
    const colorBor = ft.colorofbor.value;

    getS('.edit-area').value += `<table><tbody>`;
    for (let i = 0; i < countTr; i++) {
        getS('.edit-area').value += `<tr style=" border: ${widthBor}px  ${typeBor} ${colorBor}">`;
        for (let i = 0; i < countTd; i++) {
            getS('.edit-area').value += `<th style="width: ${widthTd}px ; height: ${heightTd}px;  border: ${widthBor}px  ${typeBor} ${colorBor}">TD</th> `;
        }
        getS('.edit-area').value += `</tr>`;
    }
    getS('.edit-area').value += '</tbody></table>';

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    getS('.blockup').style.height = '300px';
})