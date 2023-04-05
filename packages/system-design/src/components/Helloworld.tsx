
import React from 'react'
export interface IHelloWorld {
  text: string

  
}
export const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="underline underline-offset-1 text-orange-900">This is test text: {text}</div>
}