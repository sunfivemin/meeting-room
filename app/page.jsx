"use client";
import ReservationModal from "./components/ReservationModal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    let ex = ["hi", "hi2"];
    return (
        <>
            <button className="px-4 py-2 rounded bg-blue text-sky-500 hover:text-sky-500" onClick={handleClick}>
                예약하기
            </button>
            {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal> */}
            <ReservationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} hi={ex[0]} />
        </>
    );
}
