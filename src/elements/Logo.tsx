import Link from 'next/link'
import {  Pacifico } from 'next/font/google'

const pacifico = Pacifico({ subsets: ['latin'], weight:"400" })
const Logo = () => {
    return (
        <Link className="block" href="#">
            <h3 className={`font-bold text-2xl ${pacifico.className}`}>{`< Hammad />`}</h3>
        </Link>
    )
}

export default Logo
