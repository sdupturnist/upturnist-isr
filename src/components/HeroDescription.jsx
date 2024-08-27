import AnimatedTextCharacter from "@/components/AnimatedText";


export default function HeroDescription({ title, animatedHeading, desc, modalAction }) {

    return (
        <>
            <h2 data-aos="fade-up">{title && title}<span className="block ">
                <AnimatedTextCharacter text={animatedHeading && animatedHeading} />
            </span>
            </h2>
            <p data-aos="fade-up" data-delay="500" dangerouslySetInnerHTML={{ __html: desc && desc }} />
            <div className='mt-3'>
                <button title="Let&apos;s start" aria-label="Let&apos;s start" className="btn" type="button" onClick={modalAction}>
                    Let&apos;s start
                </button>
            </div>
        </>
    )

}