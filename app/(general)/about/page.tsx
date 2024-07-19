import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This page is about information of my next app',
  keywords: ['About Page', 'Fernando', 'informacion', '...']

}

export default function AboutPage() {
  return( 

      <span className="text-7xl">About Page</span>


  )

}