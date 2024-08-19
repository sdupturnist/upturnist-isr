'use client'


import { useModalContext } from '@/context/modalContext';
import React, { useState, useEffect } from 'react';



export default function ComparePackages({ data }) {


    const { setModalFor, setShowModal } = useModalContext()

    const [isVisible, setIsVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(null);


    const [currentBox, setCurrentBox] = useState(1);


    const handleBoxChange = (boxNumber) => {
        setCurrentBox(boxNumber);
    };


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
            setIsVisible(window.pageYOffset <= 0); // hide the div if scrolled down
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


    const openPackageBookModal = () => {
        setShowModal(true)
        setModalFor('package')
    };


    return (<>



        <div className="compare-package">
            <h4>Compare Plans</h4>
            <div className="inner-1 ">
                {data.map((item, key) => {
                    return <button title={`Plan: ${item.title}`} aria-label={item.title} key={key} onClick={() => handleBoxChange(key + 1)} className={`${currentBox === key + 1 ? 'active-button' : ''} button`} >{item.title}</button>
                })}
            </div>

            {data.map((item, key) => {
                return <>

                    <div key={key}>
                        <div className="inner-2 " style={{ display: currentBox === key + 1 ? 'block' : 'none' }}>
                            <div className="inner-3 bg-price-package">
                                <div className="inner-4 ">
                                    <h3>{item.title}</h3>
                                </div>
                                <button title={`Starting at AED ${item.packages.price}`} aria-label={`Starting at AED ${item.packages.price}`} onClick={openPackageBookModal} className="button bg-sky-500 border-sky-500 mt-5 mb-1 rounded-3 p-5 w-full hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white rounded-md">
                                    Starting at AED {item.packages.price}
                                </button>
                            </div>
                            <ul className="list-unstyled">
                                {JSON.parse(item.packages.features).map((item, key) => {
                                    return (
                                        <li key={key}>

                                            <span className={`${item.value == 'x' ? 'opacity-[0.4]' : null} span-1 `}>{item.label}</span>
                                            <div className='wrpr-1 flex items-center gap-[8px]'>
                                                {item.value !== 'x' ? <span className={item.value !== 'x' && item.value !== 'Yes' && item.value.length > 1 ? "span-2 text-sky-500 text-bold text-[13px] uppercase pt-[3px] mt-[1px] block text-end" : "text-sky-500 text-bold text-[13px] uppercase pt-[3px]"}>{item.value}</span> : null}
                                                {item.value == 'x' ? <svg height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17"><g id="Frame 313"><path id="Vector" fill="#EEE" fillOpacity=".3" d="M8.5 0A8.5 8.5 0 1 0 17 8.5 8.51 8.51 0 0 0 8.5 0Zm3.078 10.653a.655.655 0 0 1-.925.925L8.5 9.424l-2.153 2.154a.655.655 0 0 1-.925-.925L7.576 8.5 5.422 6.347a.654.654 0 0 1 .925-.925L8.5 7.576l2.153-2.154a.654.654 0 1 1 .925.925L9.424 8.5l2.154 2.153Z" /></g></svg> : null}
                                                {item.value !== 'x' ? <svg height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17"><g id="Frame 313"><path id="Vector" fill="#2FA4D8" d="M8.5 0A8.5 8.5 0 1 0 17 8.5 8.51 8.51 0 0 0 8.5 0Zm3.732 7.001-4.577 4.577a.654.654 0 0 1-.925 0L4.768 9.616a.654.654 0 1 1 .925-.925l1.5 1.5 4.114-4.115a.655.655 0 0 1 .925.925Z" /></g></svg> : null}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="inner-5">
                                <button title={`Starting at AED ${item.packages.price}`} aria-label={`Starting at AED ${item.packages.price}`} onClick={openPackageBookModal} className="bg-sky-500 border-sky-500 my-5 rounded-3 p-5 w-full hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white rounded-md">
                                    Starting at AED {item.packages.price}
                                </button>
                            </div>
                        </div>
                    </div>

                </>
            })}
        </div>


    </>)
}