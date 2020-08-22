let lista = document.querySelector('.main')
let header = document.querySelector('.main > header')
let path = document.URL + 'fileTree';


//get request to get the working three
fetch(path)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data = data.fileTree;
        if (data.length != 0)
            createListElement(data, lista)
        else
            createAppologize()
    })
    .catch((err) => {
        // Do something for an error here
    })


function createListElement(item, lista) {

    if (!Array.isArray(item)) {
        let li = document.createElement('li')
        li.innerHTML = `<a href='${item}' > ${item} </a>`
        lista.appendChild(li)
    }
    else {

        //tworzenie nagłówka
        let p = document.createElement('p') 
        p.innerHTML = item.find((element) => !Array.isArray(element)).split('\\').reverse()[1] || 'MyFiles'; // na serwerze trzeba zamienić '\\' na '/'
        // znajdź element który jest stringiem -> podziel go na tablice -> odwróć tablice -> weź pierwszy element, jeśli jest pusty zastą 'working tree'

        let li = document.createElement('li')
        let ul = document.createElement('ul')

        ul.appendChild(p)
        li.appendChild(ul)
        lista.appendChild(li)
        item.forEach(element => {
            createListElement(element, ul)
        });
    }
}

function createAppologize() {
    let p = header;
    p.classList.add('apology')
    p.innerHTML = 'no content here today, sorry ;< '
}