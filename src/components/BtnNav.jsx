import React from 'react'

const BtnNav = (props) => {
  return (
    <a className={props.className} href={props.href}>{props.content}</a>
  )
}

export default BtnNav

