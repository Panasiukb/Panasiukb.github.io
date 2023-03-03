import {update_task} from '../../modules/update-task.js'

const toogle = document.getElementsByClassName('complete')

for(var i = 0; i < toogle.length; i++) {

    toogle[i].addEventListener('click', function() {

        update_task(this.parentNode.parentNode)

    })

}