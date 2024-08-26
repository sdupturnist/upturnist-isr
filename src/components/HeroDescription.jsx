export default function HeroDescription({data}){

return(
    <>
     <p data-aos="fade-up" data-delay="500" dangerouslySetInnerHTML={{ __html: data && data }} />
    </>
)

}