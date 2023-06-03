import React from 'react'


interface ContainerProps {
    children: React.ReactNode
}

const Container:React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-full mx-auto px-4 xl:px-15 md:px-10 sm:px-2'>{children}</div>
  )
}

export default Container