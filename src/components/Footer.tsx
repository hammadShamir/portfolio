import Links from '@/elements/Links'
import Logo from '@/elements/Logo'
import SocialLinks from '@/elements/SocialLinks'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-DeepNavy-blue text-light-gray">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center text-3xl">
                    <Logo />
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed">
                    © 2024 Developer Hammad. All Rights Reserved.
                </p>

                <Links customStyle='mt-12 justify-center flex-wrap gap-6 md:gap-8 lg:gap-12' />
                <SocialLinks customStyle='text-light-gray justify-center mt-12' />
            </div>
        </footer>
    )
}

export default Footer
