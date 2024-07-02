"use client";
import { useEffect, useState, useRef } from "react";

export default function ReservationModal({ isModalOpen, onClose }) {
    const [isModal, setIsModal] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    useEffect(() => {
        setIsModal(isModalOpen);
    }, [isModalOpen]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("bodyscroll");
        } else {
            document.body.classList.remove("bodyscroll");
        }
    }, [isModalOpen]);

    return (
        <>
            <section className={`modal-area ${isModalOpen ? "modal-opened  " : ""}`}>
                <div className={`h-full  animate-fade-in ${isModal ? " animate-fade-in-active " : ""}`}>
                    <div className="modal-sheet lg:max-w-[calc(1048px)] md:max-w-[calc(1048px_-_310px)]  md:rounded-xl md:pt-0 md:bottom-1/2">
                        <button onClick={onClose} className="absolute top-0 left-0 block w-full md:hidden h-9 before:block before:w-16 before:h-1 before:rounded-sm before:bg-neutral-300 before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2"></button>
                        <div className="modal-wrapper ">
                            <div className="modal-header">
                                <h3 className="text-2xl font-bold">회의실 예약</h3>
                                <div className="hidden p-5 pr-0 md:block" onClick={onClose}>
                                    <svg width="24" height="24" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.1135 6.82125L0.86725 12.0672C0.77375 12.1609 0.659 12.2109 0.523 12.2172C0.387167 12.2237 0.266083 12.1737 0.15975 12.0672C0.05325 11.9609 0 11.843 0 11.7135C0 11.584 0.05325 11.4661 0.15975 11.3597L5.40575 6.1135L0.15975 0.86725C0.0660833 0.77375 0.0160833 0.659 0.00974998 0.523C0.00324999 0.387166 0.05325 0.266082 0.15975 0.159749C0.266083 0.0532488 0.384 0 0.5135 0C0.643 0 0.760916 0.0532488 0.86725 0.159749L6.1135 5.40575L11.3597 0.159749C11.4532 0.0660822 11.568 0.0160822 11.704 0.00974884C11.8398 0.00324884 11.9609 0.0532488 12.0673 0.159749C12.1738 0.266082 12.227 0.383999 12.227 0.513499C12.227 0.642999 12.1738 0.760917 12.0673 0.86725L6.82125 6.1135L12.0673 11.3597C12.1609 11.4532 12.2109 11.568 12.2173 11.704C12.2238 11.8398 12.1738 11.9609 12.0673 12.0672C11.9609 12.1737 11.843 12.227 11.7135 12.227C11.584 12.227 11.4661 12.1737 11.3597 12.0672L6.1135 6.82125Z"
                                            fill="#222"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="modal-body">
                                <form className="max-w-[100%] mr-auto gap-4">
                                    <div>
                                        <label htmlFor="start-time" className="font-bold text-md text-navy-700 ">
                                            회의명
                                        </label>
                                        <div className="flex items-center mb-10">
                                            <input type="text" placeholder="회의명을 입력하세요" className="flex-1 py-2 placeholder-gray-300 border-b-2 border-gray-300 outline-none focus:border-indigo-400"></input>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-bold text-md text-navy-700 ">회의실</label>
                                        <div className="flex items-center mb-10">
                                            <input type="text" placeholder="회의실" className="items-center justify-center flex-1 w-full h-12 p-3 mt-2 border-2 border-gray-300 outline-none text-md rounded-xl bg-white/0 focus:border-indigo-400"></input>
                                        </div>
                                    </div>
                                </form>
                                <ul>
                                    <li className="">LI</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
