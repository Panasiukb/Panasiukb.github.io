import {delete_task} from '../../modules/delete-task.js'

var delete_item = document.getElementsByClassName('remove')

for(var i = 0; i < delete_item.length; i++) {

    delete_item[i].addEventListener('click', function() {

        delete_task(this.parentNode.parentNode)

    })

}