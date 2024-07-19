import type { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'This page is for contact information of the developers team',
  keywords: ['Contact Page', 'Fernando', 'informacion', '...']

}

export default function ContactPage() {
  return(
    <>
      <span className="text-7xl">
        Contact

      </span>


    </>
  )
}