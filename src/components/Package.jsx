'use client'


import { useModalContext } from '@/context/modalContext';
import React, { useState, useEffect, useRef } from 'react';


export default function Packages({ type, title, packages, content }) {


    const { setModalFor, setShowModal, setModalData, setIsClassAdded } = useModalContext()


    const jsonArray = packages && JSON.parse(packages.features);


    const [isVisible, setIsVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        setWindowWidth(window.innerWidth); // set initial width
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset <= 100); // hide the div if scrolled down
        };
        if (windowWidth && windowWidth > 1199) {
            window.addEventListener("scroll", handleScroll);
        } else {
            setIsVisible(true); // Show the div when width is not available or greater than 575px
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [windowWidth]);



    const selectedPackageRef = useRef(null);


    const openPackageBookModal = () => {

        const packageValue = selectedPackageRef.current.dataset.package;

        setShowModal(true)
        setModalFor('package')
        setModalData(packageValue)
        setIsClassAdded(true)

    };

    return (<>
        {type !== 'mini' ?
            <div className="package-" >
                {!isVisible && <div className="wrpr-1 bg-price-package">
                    <div className="inner-1 ">
                        <h4 >{title} Package</h4>
                    </div>
                    <button title="Package" aria-label="Package" ref={selectedPackageRef} data-package={title} onClick={openPackageBookModal} className="button">
                        Starting at AED {packages.price}
                    </button>
                </div>}
                {isVisible && <div className="wrpr-2 bg-price-package">
                    <div className="inner-2">
                        <h4 >{title}</h4>
                        <span className="package-label--2 ">Package</span>
                        <span className="package-label--2-data">{packages.subHeading}</span>
                    </div>
                    <button title="Package" aria-label="Package" ref={selectedPackageRef} data-package={title} onClick={openPackageBookModal} className="button">
                        Starting at AED {packages.price}
                    </button>
                </div>}
                <div className="key-- ">Key Benefits</div>
                <div className="key--data list-content-package" dangerouslySetInnerHTML={{ __html: content }} />
                <div className="fea-- ">Features</div>
                <ul className="list-unstyled ">
                    {jsonArray && jsonArray.map((item, key) => {
                        // console.log(item)
                        return <li key={key} >

                            <span className={`${item.value == 'x' ? 'opacity-[0.4]' : null} item--data text-[13px] uppercase w-[60%]`}>{item.label}</span>
                            <div className='item-flex'>
                                {item.value !== 'x' ? <span className={item.value !== 'x' && item.value !== 'Yes' && item.value.length > 1 ? "item-value text-sky-500 text-bold text-[13px] uppercase pt-[3px] mt-[1px] block text-end" : "text-sky-500 text-bold text-[13px] uppercase pt-[3px]"}>{item.value}</span> : null}
                                {item.value == 'x' ? <svg height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17"><g id="Frame 313"><path id="Vector" fill="#EEE" fillOpacity=".3" d="M8.5 0A8.5 8.5 0 1 0 17 8.5 8.51 8.51 0 0 0 8.5 0Zm3.078 10.653a.655.655 0 0 1-.925.925L8.5 9.424l-2.153 2.154a.655.655 0 0 1-.925-.925L7.576 8.5 5.422 6.347a.654.654 0 0 1 .925-.925L8.5 7.576l2.153-2.154a.654.654 0 1 1 .925.925L9.424 8.5l2.154 2.153Z" /></g></svg> : null}
                                {item.value !== 'x' ? <svg height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17"><g id="Frame 313"><path id="Vector" fill="#2FA4D8" d="M8.5 0A8.5 8.5 0 1 0 17 8.5 8.51 8.51 0 0 0 8.5 0Zm3.732 7.001-4.577 4.577a.654.654 0 0 1-.925 0L4.768 9.616a.654.654 0 1 1 .925-.925l1.5 1.5 4.114-4.115a.655.655 0 0 1 .925.925Z" /></g></svg> : null}
                            </div>
                        </li>
                    })}
                </ul>

            </div>
            :
            <div className="wrpr-3">
                <div className="inner-3 ">
                    <div className="inner-4 ">
                        <h4 >{title}</h4>
                        <span className="package-label- ">Package</span>
                        <span className="sub-heading-- ">{packages.subHeading}</span>
                    </div>

                </div>
                <div className="key--2 ">Key Benefits</div>
                <div className="key--data-2 list-content-package" dangerouslySetInnerHTML={{ __html: content }} />

                <div className="wrpr-4 ">
                    <button title="Package" aria-label="Package" ref={selectedPackageRef} data-package={title} onClick={openPackageBookModal} className="button bg-sky-500 border-sky-500 mt-5 rounded-3 p-5 w-full hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white rounded-md">
                        Starting at AED {packages.price}
                    </button>
                </div>

            </div>
        }
    </>)
}