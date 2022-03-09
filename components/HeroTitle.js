import Logo from '../public/logo.svg';
import Link from 'next/link';

export default function HeroTitle() {
    return (
        <>
            <h1 className='md:text-6xl text-5xl font-extrabold mt-32 text-center mx-3 md:mx-0'>
                Your <span className='text-purple-500'>open source</span> design.
            </h1>
        </>
    )
}