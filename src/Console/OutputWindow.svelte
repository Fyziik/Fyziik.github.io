<script lang="ts">

  export let pwd: string;
  let container;

  let cmds = {
    'changelog': [
      {
        'version': '0.1',
        'details': 'Added console look $ functionality'
      },
      {
        'version': '0.1.5',
        'details': 'Added commands for basic navigation'
      },
      {
        'version': '0.2',
        'details': 'Added arrow support / command history'
      }
    ],
    'clear': 'clear',
    'help': [
      {
        'command': 'changelog',
        'details': 'Displays a list of changes through versioning'
      },
      {
        'command': 'ls            ',
        'details': 'Displays pwd folders & files (NOT IMPLEMENTED YET)'
      },
      {
        'command': 'cd            ',
        'details': 'Changes working directory (NOT IMPLEMENTED YET)'
      },
      {
        'command': 'clear         ',
        'details': 'Clears the terminal'
      },

    ]
  }

  const formatCmd = (cmd) => {
    let div = document.createElement('div')
    div.style.cssText += 'margin-bottom: 40px;'
    let res = cmds[cmd]
    let elementToAdd;

    elementToAdd = document.createElement('p')
    elementToAdd.textContent = `${pwd} ${cmd}`
    div.appendChild(elementToAdd)
    
    if (cmd === 'changelog') {
      res.forEach(data => {
        elementToAdd = document.createElement('p')
        elementToAdd.style.cssText += 'white-space: pre; color: #FF971A;'
        elementToAdd.textContent = `v${data.version} \t|\t ${data.details}`
        div.append(elementToAdd)
      });
    }

    else if (cmd === 'help') {
      res.forEach(data => {
        elementToAdd = document.createElement('p')
        elementToAdd.style.cssText += 'white-space: pre;  color: #FF971A;'
        elementToAdd.textContent = `${data.command} \t|\t ${data.details}`
        div.append(elementToAdd)
      });
    }

    else if (cmd === 'clear') {
      container.innerHTML = ''
    }

    else {
      elementToAdd = document.createElement('p')
      elementToAdd.style.cssText += 'color: #FF971A;'
      elementToAdd.textContent = 'Invalid command'
      div.append(elementToAdd)
    }

    if (cmd !== 'clear') container.appendChild(div)
  }

  export const onEnter = e => {
    const lastCmd = pwd + ' ' + e.detail.cmd
    const div = document.createElement('div')
    div.style.cssText = 'margin-bottom: 40px;'

    //Create element & append
    const tmp = document.createElement('p')
    tmp.textContent = lastCmd
    div.appendChild(tmp)

    //Check command and handle it
    formatCmd(e.detail.cmd)

    //Force scroll
    let frame = document.getElementById('frame')
    frame.scrollTop = frame.scrollHeight
  }

</script>

<div bind:this={container}></div>

<style>

</style>