import React from 'react'

export default function Container(props) {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 lg:max-w-5xl ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  )
}
