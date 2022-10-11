import React ,{forwardRef} from 'react'

function ForwardRef02(props ,ref) {
  return (
    <div>
        <input type='text'ref={ref}/>
    </div>
  )
}

export default forwardRef(ForwardRef02)