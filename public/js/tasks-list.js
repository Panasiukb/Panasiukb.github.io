
if(localStorage.hasOwnProperty('to_do_tasks')) {

    const tasks = JSON.parse(localStorage.getItem('to_do_tasks'))

    tasks.map((task) => {

        const tasks_list = document.getElementById("tasks-list")
        const newTask = document.createElement("li")
        newTask.innerText = task.name

        if(task.status === 'ready')
        newTask.classList.add('ready')

        const buttons = document.createElement("div")
        buttons.classList.add("buttons")

        const remove = document.createElement("button")
        remove.classList.add("remove")

        const complete = document.createElement("button")
        complete.classList.add("complete")

        buttons.appendChild(remove)
        buttons.appendChild(complete)
        newTask.appendChild(buttons)
        tasks_list.prepend(newTask)

        // console.log(tasks_list)

    })

}