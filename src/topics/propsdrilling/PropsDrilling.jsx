import React from 'react'
import Parent from './Parent'

const PropsDrilling = () => {

    //! Prop drilling in React is the process of passing data (props) from a higher-level parent component down through multiple layers of nested child components to reach a deeply nested component that actually needs the data.

  return (
    <div>
        <Parent/>
    </div>
  )
}

export default PropsDrilling