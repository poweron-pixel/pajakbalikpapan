import React from 'react'
import Container from './container'

export default function SectionTitle(props) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === 'left' ? '' : 'items-center justify-center text-center'
      }`}
    >
      {props.pretitle && (
        <div
          className="font-semibold tracking-tight text-brand dark:text-gray-400 text-3xl"
          id={props.id}
        >
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-3xl mt-4 text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight leading-tight  text-brand dark:text-gray-100">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-brand lg:text-xl dark:text-gray-300 font-normal">
          {props.children}
        </p>
      )}
    </Container>
  )
}
