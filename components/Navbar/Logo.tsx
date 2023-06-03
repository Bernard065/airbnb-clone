'use client'

import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Logo = () => {
    //const router = useRouter();
  return (
    <div>
        <Image src='/images/logo.png' alt='logo' width={100} height={100} />
    </div>
  )
}

export default Logo