import Lottie from 'lottie-react'
import animation from '../assets/anim-loader.json'

export default function Loader() {
    return (
        <div className="min-h-[80vh] flex justify-center items-center">
            <Lottie animationData={animation} className="max-w-[500px] mx-auto" />
        </div>
    )
}
