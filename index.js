let apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game'
];

let appName = document.getElementsById('appName')
appName.innerText = apps[0]

const toggleDark = () => {
    document.body.style.backgroundCOlor = '#000000'
    document.body.style.color = '#FFFFFF'
    appName.style.color = 'red'
}

const rotateRight = () => {
    apps.push(apps.shift())
    appName.innerText = apps[0]
    apps[0] === 'grave' ? toggleDark() : null;
    return apps;
}

const rotateLeft = () => {
    apps.unshift(apps.pop())
    appName.innerText = apps[0]
    apps[0] === 'grave' ? toggleDark() : null;
    return apps;
}

document.getElementById('rightButton').onClick = rotateRight;
document.getElementById('leftButton').onClick = rotateLeft;
