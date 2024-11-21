import {Righteous} from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const fonte = Righteous({
    subsets: ['latin'],
    weight: "400",
})


export default function LogoGrande(){
    return (
        <Link href="/" className={`${fonte.className} flex flex-col items-center gap-2`}>
            <Image src="/logo.svg" alt='logo' width={100} height={100}/>
            <h1 className='flex flex-col items-center text-5xl'>
                <div>CONVIT<span className='text-blue-500'>3</span> DIGITAL</div>
            </h1>
        </Link>
    )
}