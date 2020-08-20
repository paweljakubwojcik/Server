const path = require('path')
const fs = require('fs')


function getFiles(pathToFolder) {
    let list = []
    fs.readdirSync(pathToFolder).forEach(file => {
        let FilePath = path.join(pathToFolder, file)
        
        let relativePath = FilePath.split('public')
        
        if (path.extname(FilePath) === '.html')
            list.push(relativePath[1])

        if (path.extname(FilePath) === '')
            list.push(getFiles(FilePath))
    })
    return list
}

exports.fileTree = getFiles(path.join(__dirname, 'public'))
