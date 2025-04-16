'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function FooterWrapper() {
  const pathname = usePathname()
  const noFooterPaths = ['/login', '/admin']
  
  if (noFooterPaths.includes(pathname || '')) {
    return null
  }
  
  return <Footer />
}