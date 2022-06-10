<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  
  const dispatch = createEventDispatcher()

  let value: string;
  export let pwd: string = "C:\\Users\\Fyziik:~$ ";
  let cmdHistory: string[] = [];
  let cmdHistoryCurrentIndex: number = -100;
  let inSubject = false

  const files = [
    {
      "subject": "System Security",
      "topics": [
        {
          "name": "System Security Overview",
          "link": "https://docs.google.com/presentation/d/1miEDvFc71jOwPiI345qGRrjKSHzH7Liz4Uut7RuGYPk/edit?usp=sharing",
          "status": true
        },
        {
          "name": "System installation, hardening, monitoring & logging",
          "link": "https://docs.google.com/presentation/d/1_xoBHzDVx9wHItEE8sTBrpGWcvY_P6If7FDfL4QqNPs/edit?usp=sharing",
          "status": true
        },
        {
          "name": "Asymmetric encryption",
          "link": "https://docs.google.com/presentation/d/1wzRok7sPOT-IqBOETVmxjz-2BY66iexq1aLXdPO_UPY/edit?usp=sharing",
          "status": true
        },
        {
          "name": "System Network Interface",
          "link": "https://docs.google.com/presentation/d/1mII0wNj9pyxxgjWmYwho3E7OPsSq-gTAry6b0G5VoiU/edit?usp=sharing",
          "status": true
        },
        {
          "name": "Resource permissions",
          "link": "https://docs.google.com/presentation/d/1P6CcG6vCCYbldA_or_ijpia_NW86Sor3Rc1RquHbQW4/edit?usp=sharing",
          "status": true
        },
        {
          "name": "User login & authentication",
          "link": "https://docs.google.com/presentation/d/1dv5DEir2H8WkuVKEL_HjZHScTc5-T3-ioUEsMbhisoc/edit?usp=sharing",
          "status": true
        },
        {
          "name": "SW assisting in various system security tasks + system security planning",
          "link": "https://docs.google.com/presentation/d/1MEPlJwu9gacZfBZuA_v7wvD96dyTFbLoPe8-ZWN5WtY/edit?usp=sharing",
          "status": true
        }
      ]
    },
    {
      "subject": "Applied Cryptology",
      "topics": [
        {
          "name": "Symmetric Encryption",
          "link": "https://docs.google.com/presentation/d/1k3YnGx1yRyr1YMMwDSWktu1zEHrz8tJfX3HGp-EhfU8/edit?usp=sharing",
          "status": false
        },
        {
          "name": "Asymmetric Encryption",
          "link": "https://docs.google.com/presentation/d/1lA89xtVM9O6Bn5vVzdYb71DhAZ5S7hoJbtV1LoK-hLE/edit?usp=sharing",
          "status": false
        },
        {
          "name": "Hash Functions",
          "link": "https://docs.google.com/presentation/d/1Umdi2kbOSeeHTsStrsNO0oDX7DCSDDnCSGvgj4li8JA/edit?usp=sharing",
          "status": false
        },
        {
          "name": "Key Exchange",
          "link": "https://docs.google.com/presentation/d/1Fa5MxSX8Ic1ZB7aeACz8QuIQsh6q_qFoSIBLROcCfHs/edit?usp=sharing",
          "status": false
        },
        {
          "name": "MAC vs Digital Signatures",
          "link": "https://docs.google.com/presentation/d/1_SLkZSndGbOIuM_48G8bVlR40fx7UkhRMSNZ4bTgXzo/edit?usp=sharing",
          "status": false
        },
        {
          "name": "PGP vs PKI",
          "link": "https://docs.google.com/presentation/d/11jDEeh4Kbyx1ncwztuxZ966F2i18WykmidjLZclH-7g/edit?usp=sharing",
          "status": false
        },
        {
          "name": "TLS",
          "link": "https://docs.google.com/presentation/d/1Ax4_LytgTk9Hj1CUyTRovXIJ9p7I2QOL0KQQrDmNCls/edit?usp=sharing",
          "status": false
        }
      ]
    },
    {
      "subject": "System & Network Security",
      "topics": [
        {
          "name": "Nmap",
          "link": "https://docs.google.com/presentation/d/18UkNLoMJQuQHtQCeVwNMwNHpy1N024hgKAhehZQjKYs/edit?usp=sharing",
          "status": false
        },
        {
          "name": "Scapy",
          "link": "https://docs.google.com/presentation/d/1CFWL-PaO9IbVFqpWVVLx7eeZ81ciU2OuHwmSftVqUwI/edit?usp=sharing",
          "status": false
        },
        {
          "name": "Netflow",
          "link": "https://docs.google.com/presentation/d/1ItE5YhX_czxos0yamXDIg_FkjBglfSRg6i9AdTZjGRU/edit?usp=sharing",
          "status": false
        },
        {
          "name": "IDF / IPS",
          "link": "https://docs.google.com/presentation/d/19r4w4dPqBcjlRHp0XL7AFZ_vQK3Zl4BRG3yuO9Wzftw/edit?usp=sharing",
          "status": false
        },
        {
          "name": "Network Segmentation",
          "link": "https://docs.google.com/presentation/d/1EJiVf8eqM0LT_RYniVdnRKDEugnBVrUFRHM5Yy41iwE/edit?usp=sharing",
          "status": false
        },
        {
          "name": "Network Monitoring",
          "link": "https://docs.google.com/presentation/d/18_8mvsoIP6Zu6hQhkSBMcaIgYnvnXArSZV7GoH5Cijg/edit?usp=sharing",
          "status": false
        },
        {
          "name": "SSL / TLS",
          "link": "https://docs.google.com/presentation/d/1S7t7xl38A7nBt5nwZQ-KyKuL6exHoG9x5eH4r9KAL0k/edit?usp=sharing",
          "status": false
        }
      ]
    }
  ]

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      // pre handling for cd & ls
      const userFile = value.substring(3, value.length)

      // if cd
      if (value.substring(0, 2) === 'cd') {
        //Check level in file system
        //lowest level, cd into subjects
        if (!inSubject) {
          pwd = pwd.substring(0, pwd.length - 4) + '\\' + files[userFile].subject + ':~$ ';
          inSubject = true;
          
        } else if (inSubject && !value.includes('..')) { //higher level, already in a subject, cd into topics (open links), should make use of index numbers
          let currentSubject = pwd.split(':')
          currentSubject = currentSubject[1].split('\\')
          const foundSubject = currentSubject[currentSubject.length - 1]
          files.forEach(data => {
            if (data.subject === foundSubject) {
              window.open(data.topics[userFile].link, '_blank')
            }
          })
        }

        
      }

      // Going up a level in file system
      if (value.substring(0, 5) === 'cd ..' && inSubject) {
        let pathToSplit = pwd.split('\\')
        pathToSplit.pop()
        pwd = pathToSplit.join('\\') + ':~$ '
        inSubject = false
      }
      

      // if ls
      if (value.substring(0, 2) === 'ls') {
        let toSend = []
        if (!inSubject) {
          files.forEach(data => {
            let tmp = {
              name: data.subject,
              status: true
            }
            toSend.push(tmp)
          })
        } else {
          let currentSubject = pwd.split(':')
          currentSubject = currentSubject[1].split('\\')
          const foundSubject = currentSubject[currentSubject.length - 1] 
          files.forEach(data => {
            if (data.subject === foundSubject) {
              data.topics.forEach( topic => {
                let tmp = {
                  name: topic.name,
                  status: topic.status
                }

                toSend.push(tmp)
              })
            }
          })
        }
        
        dispatch('onLs', toSend)
      }

      // default route
      cmdHistory.push(value)
      dispatch('enter', {cmd: value})
      value = ''
      cmdHistoryCurrentIndex = cmdHistory.length
    }

    if (e.key === 'ArrowUp') {
      if (cmdHistoryCurrentIndex > 0) cmdHistoryCurrentIndex--
      value = cmdHistory[cmdHistoryCurrentIndex]
    }

    if (e.key === 'ArrowDown') {
      if (cmdHistoryCurrentIndex < cmdHistory.length) cmdHistoryCurrentIndex++
      value = cmdHistory[cmdHistoryCurrentIndex]
    }
  }

</script>

<div class="pwd">
  <p>{pwd}</p>
  <input bind:value on:keydown={onKeyPress}/>
</div>
  
  
  

<style>

  .pwd {
    padding: 2%;
    color: #5f9980;
    position: fixed;
    bottom: 0;
    margin: 1.4% 0 0 0;
    font-size: 20px;
    display: inline-block;
  }

  input {
    border: none;
    background-color: #211c1b;
    width: 70vw;
    color: #5f9980;
    caret-color: #5f9980;
  }

  input:focus {
    outline: none
  } 

  p {
    display: inline;
  }

</style>