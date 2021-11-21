const fs = require('fs')

const createFiles = data => {
    let ReadmeMd = `
# c++ snippets
## Usage
keywords
**Enjoy!**
Keywords for easy working
\`\`\`
        `
    let text = '';
    data.forEach(elem => {
        const length = elem.prefix.length
        let spaces = '';
        for (let i = 0; i < length + 5 ; i++) {
            spaces += ' '
        }
        const body = elem.body
        let body2 = ''
        for (let i = 0; i < body.length; i++) {
            if(i === 0){
                body2 += body[0] +'\n'
                continue
            }
            body2 += spaces + body[i] + '\n' 
        }
        const data = `${elem.prefix} =>  ${body2}`
        text += '\n\n' + data
    })
    return `${ReadmeMd}\n${text}\n\`\`\``;
};

const create = async () => {
    let [first, second, third] = require('./package.json').version.split('.')
    const package = require('./package.json')
    const version = `${first}.${second}.${++third}`
    package.version = version
    fs.writeFileSync('./package.json', JSON.stringify(package, null, 2))
    const files = fs.readdirSync('./snippets')
    const data = files.map(filename => {
        const json = fs.readFileSync(`./snippets/${filename}`, 'utf8')
        return Object.values(JSON.parse(json))
    })
    const json = []
    data.forEach(e => e.forEach(e => json.push(e)))
    const file = createFiles(json)
    fs.writeFileSync('./README.md', file)
}

create()