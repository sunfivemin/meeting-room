"use client";
import ReservationModal from "./components/ReservationModal";
import useDetectClose from "./hooks/useDetectClose";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dropDownRef = useRef(null);
    const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
    
    const handleClick = () => {
        setIsModalOpen(true);
    };

    let ex = ["hi", "hi2"];
    return (
        <>
            <section className="bg-[var(--bg-main-color)] flex-1">
                <div className="mt-12 container--default">
                    <div className="relative flex flex-wrap w-full gap-4 mb-8 container__inner">
                        <div className="flex flex-col w-full gap-4 h-60 md:w-1/2 lg:w-1/3">
                            <div className="flex-1 w-full ">
                                <span>2024.07.06 (월)</span>
                                <span>오후 1: 50</span>
                            </div>
                            <div className="flex-1 w-full bg-white shadow-3xl ">
                                <div className="dropDownMenu">
                                    <button onClick={() => setIsOpen(!isOpen)}>메뉴 보기</button>

                                    <ul ref={dropDownRef} className={`menu ${isOpen ? "menu--open" : ""}`}>
                                        <li>
                                            <Link href="/mypage">마이페이지</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full bg-white h-60 md:w-1/2 lg:w-2/3 shadow-3xl ">
                            <button className="px-4 py-2 rounded bg-blue text-sky-500 hover:text-sky-500" onClick={handleClick}>
                                예약하기
                            </button>
                        </div>
                        <div className="w-full bg-white shadow-3xl h-60 "></div>
                    </div>
                </div>
            </section>

            {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal> */}
            <ReservationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} hi={ex[0]} />
        </>
    );
}
