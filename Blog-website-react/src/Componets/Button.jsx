import React from 'react'

function Button({
    children,
    type='button',
    bgcolour='bg-blue-500',
    textColor='text-white', 
    ClassName='',
    ...props
}) {
  return (
    <button ClassName={`px-4 py-2 rounded-lg ${bgcolour} ${textColor} ${ClassName}`} {...props} type={`${type}`}>{children}</button>
  )
}

export default Button
