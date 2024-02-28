import Link from 'next/link'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: "400"
})

const Logo = () => {
    return (
        <Link className={`block `} href="/">
            <h3 className={` ${pacifico.className} hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent`}>{`< Hammad />`}</h3>
        </Link>
    )
}

export default Logo
