import React from 'react'

export default function Task({txt,delf,donef}) {
  return (
    <div>
        <input type="text" readOnly value={txt} id='txt' />    
        <input type="button" onClick={delf} value=" ✖ " id='supp'/>
        <input type="button" onClick={donef} value=" ✔ "  id='done'/>
    </div>
  )
}
