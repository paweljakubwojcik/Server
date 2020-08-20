let lista = document.querySelector('.main > ul')

let path = document.URL + 'fileTree';

fetch(path)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        for (const link of data.fileTree) {
            createListElement(link,lista)
        }
    })
    .catch((err) => {
        // Do something for an error here
    })


function createListElement(item,lista)
{
    if (!Array.isArray(item)) {
        let li = document.createElement('li')
        li.innerHTML = `<a href='${item}' > ${item} </a>`
        lista.appendChild(li)
    }
    else
    {
        let li = document.createElement('li')
        let ul = document.createElement('ul')
        let p = document.createElement('p')
        p.innerHTML = item[0].split('\\')[1]
        ul.appendChild(p)
        li.appendChild(ul)
        lista.appendChild(li)
        item.forEach(element => {
            createListElement(element,ul)
        });
    }
}