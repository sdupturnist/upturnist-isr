import Link from 'next/link';
import Images from './Images';

function Logo(props) {

    const {
        url,
        alt,
        logoTitle,
        for_page
    } = props

    return (<>
        {props &&
            for_page === 'normal' ?
            <Link title={logoTitle} aria-label={logoTitle} className='block' href="/">
                 <img src={url} alt={alt} title={logoTitle} className="logo max-w-[250px] block w-full" />
            </Link>
            :
            <Link title="branding agency in dubai upturnist logo" aria-label="branding agency in dubai upturnist logo" className='block' href="/">
                <img src={url} alt="branding_agency_in_dubai_upturnist_logo" title="branding agency in dubai upturnist logo" className="logo max-w-[250px] block w-full" />
            </Link>
        }
    </>)


}


export default Logo
