import { ipcRenderer, contextBridge } from "electron";

function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']) {
  return new Promise(resolve => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}

const safeDOM = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find(e => e === child)) {
      parent.appendChild(child)
    }
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find(e => e === child)) {
      parent.removeChild(child)
    }
  },
}

/*
  IPCRenderer Example
  
  function func(params){
    code
    ipcRenderer.send("event",data);
  }

  object that contains functions
  let bridge = {
    func,
    ...otherFunctions
  }

  contextBridge.exposeInMainWorld(APINAME,object || function)
  contextBridge.exposeInMainWorld("Bridge",bridge)

*/