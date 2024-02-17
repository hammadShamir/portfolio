import Link from 'next/link'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: "400"
})

const Logo = () => {
    return (
        <Link className={`block `} href="#">
            <h3 className={` ${pacifico.className}`}>{`< Hammad />`}</h3>
        </Link>
    )
}

export default Logo
