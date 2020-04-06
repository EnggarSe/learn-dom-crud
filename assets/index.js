const addListItem = (event) =>{
    event.preventDefault();
    const nama = document.getElementById('inlineFormInputGroup').value;
    const divTodos = document.createElement('div')
    divTodos.setAttribute('class','row')
    const listTodos = document.getElementById('list-todos');
    const li = document.createElement('li');
    const barang = document.createTextNode(nama);
    li.appendChild(barang);
    const span = document.createElement('button');
    const deleteItem = document.createTextNode('X');
    span.appendChild(deleteItem);
    span.setAttribute('onClick','deleteItem(event)');
    span.setAttribute('id','listRemove');
    li.setAttribute('onClick','replaceItem(event)');
    divTodos.appendChild(li)
    divTodos.appendChild(span)
    listTodos.appendChild(divTodos);
    
    
    
   
    
    
}
const deleteItem = (event) =>{
    event.preventDefault();
    let hapus = document.querySelector('ul div');
    let li = document.querySelector('ul li');
    let button = document.querySelector('button');
    li.remove(hapus);
    hapus.remove(hapus);

}
const replaceItem = (event) =>{
    let li = document.querySelectorAll('li')[0];
    console.log(li);
    let replaceList = prompt("Masukan Pengganti kalimat");
    if(replaceList != null){
        li.innerHTML = replaceList;
        // const span = document.createElement('button');
        // const deleteItem = document.createTextNode('X');
        // span.setAttribute('onClick','deleteItem(event)');
        // span.setAttribute('id','listRemove');
        // span.appendChild(deleteItem);
        // li.appendChild(span);
        alert("Berhasil Merubah");
    }       
    else{
        let li = document.querySelector('li'); 
    }
}

const button = document.getElementById('submitForm');
button.addEventListener('onclick', addListItem);

