// console.log('hey')
//

let apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'grave'
];

let appName = document.getElementById('appName')
appName.innerText = apps[0]

const toggleDark = () => {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    appName.style.color = 'red'
}

const toggleLight = () => {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    appName.style.color = 'red'
}

const rotateRight = () => {
    apps.push(apps.shift())
    appName.innerText = apps[0]
    apps[0] === 'grave' ? toggleDark() : toggleLight();
    return apps;
}

const rotateLeft = () => {
    apps.unshift(apps.pop())
    appName.innerText = apps[0]
    apps[0] === 'grave' ? toggleDark() : toggleLight();
    return apps;
}

document.getElementById('rightButton').onclick = rotateRight;
document.getElementById('leftButton').onclick = rotateLeft;
