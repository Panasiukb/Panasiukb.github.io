export const update_task = (item) => {

    const newStatus = item.classList.contains('ready') ? 'to do' : 'ready'

    item.classList.toggle('ready')

    const tasks = JSON.parse(localStorage.getItem('to_do_tasks'))
    const newState = tasks.map(task =>
    
        task.name === item.innerText ? {...task, status: newStatus} : task
    
    )

    localStorage.setItem('to_do_tasks', JSON.stringify(newState))

}