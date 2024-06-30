"use client";
import ReservationModal from "./components/ReservationModal";
import useDetectClose from "./hooks/useDetectClose";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const roomOptions = ["회의실 1", "회의실 2", "회의실 3"];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setIsOpen(false);
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
              <div className="flex-1 w-full bg-white shadow-3xl px-[14px] py-[16px]">
                <div className="drop__down" ref={dropDownRef}>
                  <div
                    className="tab__opt hover:bg-slate-800/10"
                    role="button"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    {selectedRoom}
                    <span
                      className={`${
                        isOpen ? "rotate" : ""
                      } absolute w-[20px] h-[12px] top-[13px] right-[13px] transition duration-300 ease-in-out`}
                    >
                      <svg
                        width="20"
                        height="10"
                        viewBox="0 0 14 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6.37872C5.89234 6.37872 5.793 6.36114 5.702 6.32597C5.611 6.29064 5.52184 6.22939 5.4345 6.14222L1.04625 1.75372C0.952585 1.66022 0.902585 1.54547 0.896252 1.40947C0.889752 1.27364 0.939752 1.15256 1.04625 1.04622C1.15259 0.939723 1.2705 0.886475 1.4 0.886475C1.5295 0.886475 1.64742 0.939723 1.75375 1.04622L6 5.29222L10.2463 1.04622C10.3398 0.952557 10.4545 0.902557 10.5905 0.896223C10.7263 0.889723 10.8474 0.939723 10.9538 1.04622C11.0603 1.15256 11.1135 1.27047 11.1135 1.39997C11.1135 1.52947 11.0603 1.64739 10.9538 1.75372L6.5655 6.14222C6.47817 6.22939 6.389 6.29064 6.298 6.32597C6.207 6.36114 6.10767 6.37872 6 6.37872Z"
                          fill="#5C92FF"
                        />
                      </svg>
                    </span>
                  </div>
                  <ul
                    role="tablist"
                    className={`list__sort ${isOpen ? "list--open" : ""}`}
                  >
                    {roomOptions.map((room, index) => (
                      <li
                        className="block relative text-left h-10 leading-8 pr-2"
                        role="presentation"
                        key={index}
                      >
                        <span
                          className="before:content-[''] before:block before:w-12 inline-flex items-center"
                          onClick={() => handleRoomSelect(room)}
                        >
                          {selectedRoom === room && (
                            <svg
                              className="absolute left-6"
                              width="15"
                              height="11"
                              viewBox="0 0 15 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.76851 8.95827L13.5705 0.156267C13.6678 0.0589341 13.7826 0.00701644 13.9148 0.000516443C14.0468 -0.00581689 14.1678 0.0461008 14.278 0.156267C14.3883 0.266601 14.4435 0.385516 14.4435 0.513016C14.4435 0.640683 14.3883 0.7596 14.278 0.869767L5.33401 9.81977C5.17235 9.98127 4.98385 10.062 4.76851 10.062C4.55318 10.062 4.36468 9.98127 4.20301 9.81977L0.153015 5.76977C0.0556812 5.67243 0.00476452 5.55677 0.000264515 5.42277C-0.00423549 5.28877 0.0486809 5.1666 0.159014 5.05627C0.269181 4.9461 0.388015 4.89102 0.515515 4.89102C0.643181 4.89102 0.762098 4.9461 0.872264 5.05627L4.76851 8.95827Z"
                                fill="#5C92FF"
                              />
                            </svg>
                          )}
                          {room}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full bg-white h-60 md:w-1/2 lg:w-2/3 shadow-3xl ">
              <button
                className="px-4 py-2 rounded bg-blue text-sky-500 hover:text-sky-500"
                onClick={handleClick}
              >
                예약하기
              </button>
            </div>
            <div className="w-full bg-white shadow-3xl h-60 "></div>
          </div>
        </div>
      </section>

      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal> */}
      <ReservationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        hi={ex[0]}
      />
    </>
  );
}
