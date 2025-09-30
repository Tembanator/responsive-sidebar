const colapsedBtn = document.getElementById('collapse-btn');
colapsedBtn.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
    document.querySelector('.right-col').classList.toggle('shift');
document.getElementById('collapse-btn').style.display = 'none';
document.getElementById('uncollapse-btn').style.display = 'inline';
})

const uncolapsedBtn = document.getElementById('uncollapse-btn');
uncolapsedBtn.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
    document.querySelector('.right-col').classList.toggle('shift');
document.getElementById('collapse-btn').style.display = 'inline';
document.getElementById('uncollapse-btn').style.display = 'none';
})