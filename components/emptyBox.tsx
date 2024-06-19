import Lottie from 'lottie-react'
import animation from '../assets/empty_anim.json'

export default function EmptyAnim() {
    return (
        <>
            <Lottie animationData={animation} className='max-w-[500px] mx-auto' />
            <h2 className='text-xl text-center font-extrabold my-[10px] '>Cards not found :(</h2>
        </>
    )
}
