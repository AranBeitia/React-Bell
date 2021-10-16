import React from 'react'

import TheHeader from '../components/TheHeader'

function withHeader(WrappedComponent) {
  function WrapperComponent({...props}) {
    return(
      <>
        <TheHeader/>
        <WrappedComponent {...props}/>
      </>
    )
  }
  return WrapperComponent
}

export default withHeader
