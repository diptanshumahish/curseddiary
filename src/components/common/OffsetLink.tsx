import React from 'react'
import Link from 'next/link'

interface Props{
    linkText:string;
    linkTo:string;
}
export default function OffsetLink({linkText,linkTo}:Props) {
  return (
    <Link href={linkTo} className='offsetstyle transition-all  lg:p-2 md:p-1 lg:px-4 md:px-2 p-2 rounded-lg bg-theme-green border-2 border-black text-text cursor-pointer'>{linkText}</Link>
  )
}
