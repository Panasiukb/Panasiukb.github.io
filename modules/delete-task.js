export const delete_task = (item) => {

    const tasks = JSON.parse(localStorage.getItem('to_do_tasks'))
    const newState = tasks.filter((value, index) => {
        return value.name !== item.innerText
    })

    localStorage.setItem('to_do_tasks', JSON.stringify(newState))

    item.remove()

}