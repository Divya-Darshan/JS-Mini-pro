let add = document.getElementById('add')
let sub = document.getElementById('sub')
let reset = document.getElementById('re')
let co = document.getElementById('count')

var count = 0


//number counter
add.onclick = () => {
    count++
    co.textContent = count
}

reset.onclick = () => {
  co.textContent = count = 0
}

sub.onclick = () => {
    count--
    co.textContent = count
}



//random num gen
const roll_input = document.getElementById('roll-input')

const roll_btn = document.getElementById('roll-btn')

const roll_out = document.getElementById('roll-out')

var in_val

roll_btn.onclick = () => {

in_val = Math.floor(Math.random() * roll_input.value) + 1

roll_out.textContent = `Random Num is ` + in_val

}

//clock
function clock(){
 
  const d = new Date()
  let time = d.toLocaleTimeString().toUpperCase()
  const clock = document.getElementById('clock')
  clock.textContent = time + ' ' + d.getUTCFullYear()

}

setInterval(clock, 1000)


//todo list


let taskList = document.getElementById('tL')

function addTask() {
  
  let inputText = document.getElementById('inputTask').value
  let li =  document.createElement('li')
  let btnx = document.createElement('button')
  let divx = document.createElement('div') 
  btnx.textContent = 'X'

 if (inputText != ''){
    document.getElementById('inputTask').value = null
    li.textContent = inputText
    li.id = 'li'
    divx.className = 'divofbtn'
    taskList.appendChild(li)
    li.appendChild(divx)
    divx.appendChild(btnx)//hello
    btnx.setAttribute('onclick','re(this)')
  }
  else
    alert('Enter somethig!! to Add.')


}

function re(e){
  let remv = document.getElementById('li')
  remv.parentNode.removeChild(remv)
}



 