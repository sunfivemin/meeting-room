"use client";
import { useEffect, useState } from "react";

export default function ReservationModal({isModalOpen, hi}) {
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        setIsModal(isModalOpen);  
    }, [isModalOpen]);
    
    return (
        <>
            <section className={`animate-fade-in modal_area ${isModalOpen ? "modal_opened  " : ""}`}>
                <div className={`animate-fade-in ${isModal ? " animate-fade-in-active " : ""} bg-white p-6 rounded shadow-lg`}>
                    <h1 className="text-2xl font-bold">Hello, {hi} </h1>
                    <p className="mt-2 text-gray-700">This content fades in and slides up.</p>
                </div>
            </section>
        </>
    );
}
