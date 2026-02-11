const records = [];

const recordsList = document.getElementById('records');
const btnAdd = document.getElementById('btnAdd');

function render() {
    recordsList.innerHTML = '';
    records.forEach((record, index) => {
        const li = document.createElement('li');
        li.className = 'record'
        li.textContent = `${record.title} - ${record.duration}`;
        recordsList.appendChild(li);
    });
}

btnAdd.addEventListener('click', () => {
    const title = prompt("Título da tarefa:");
    const duration = prompt("Duração:");
    records.push({ title: title, duration: duration });
    render();
})

render();