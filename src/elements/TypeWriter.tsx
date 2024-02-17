import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return (
        <Typewriter
            options={{
                strings: ['Software Engineer .', 'Full Stack Developer .', 'Freelancer .'],
                autoStart: true,
                loop: true,
                delay: 75
            }}
        />
    )
}

export default TypeWriter
