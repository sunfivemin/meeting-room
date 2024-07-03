"use client";
import ReservationModal from "./components/ReservationModal";
import useDetectClose from "./hooks/useDetectClose";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// 회의실 옵션 배열
const roomOptions = ["회의실 1", "회의실 2", "회의실 3"];

export default function Home() {
    // 모달 열림 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 드롭다운 ref
    const dropDownRef = useRef();
    // 드롭다운 열림 상태 감지 훅
    const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
    // 선택된 회의실 상태 관리
    const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);

    // 모달 열기
    const handleClick = () => {
        setIsModalOpen(true);
    };

    // 회의실 선택
    const handleRoomSelect = (room) => {
        setSelectedRoom(room);
        setIsOpen(false); // 드롭다운 닫기
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // 시간 변수
    const year = "2024";
    const month = "07";
    const daynum = "06";
    const weekday = "월";
    const dayTime = "오후";
    const time = "1:33";

    // 최대 인원 변수
    const people = "12";

    return (
        <>
            <section className="bg-[var(--bg-main-color)] flex-1">
                <div className="mt-12 container--default">
                    <div className="relative flex flex-wrap w-full gap-4 mb-8 container__inner">
                        <div className="flex__col gap-4 h-[320px] md:w-1/2 lg:w-1/3">
                            {/* section - 현재 시간 */}
                            <section className="time-container">
                                <div className="text-[1.2rem] lg:text-[1.30rem] leading-7 font-normal">
                                    <span>{`${year}.`}</span>
                                    <span>{`${month}.`}</span>
                                    <span>{daynum}</span>
                                    <span>{`(${weekday})`}</span>
                                </div>
                                <div className="flex gap-[0.5rem] text-[2rem] lg:text-[2.40rem] leading-none font-bold">
                                    <span>{dayTime}</span>
                                    <span>{time}</span>
                                </div>
                            </section>
                            {/* section - 회의실 선택 */}
                            <section className="flex flex-1 justify-center gap-4 items-center flex-row lg:flex-col basis-16 bg-white shadow-3xl rounded-lg px-[24px] py-[24px]">
                                {/* 드롭 다운 */}
                                <div className="w-full text-center lg:text-left drop__down" ref={dropDownRef}>
                                    <div
                                        className="tab__opt transition duration-200 ease-in-out hover:bg-[#d6e2ff]"
                                        role="button"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}>
                                        {selectedRoom}
                                        {/* 드롭다운 화살표 아이콘 */}
                                        <span className={`${isOpen ? "rotate" : ""} absolute w-[20px] h-[12px] top-[13px] right-[13px] transition duration-300 ease-in-out`}>
                                            <svg width="20" height="10" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 6.37872C5.89234 6.37872 5.793 6.36114 5.702 6.32597C5.611 6.29064 5.52184 6.22939 5.4345 6.14222L1.04625 1.75372C0.952585 1.66022 0.902585 1.54547 0.896252 1.40947C0.889752 1.27364 0.939752 1.15256 1.04625 1.04622C1.15259 0.939723 1.2705 0.886475 1.4 0.886475C1.5295 0.886475 1.64742 0.939723 1.75375 1.04622L6 5.29222L10.2463 1.04622C10.3398 0.952557 10.4545 0.902557 10.5905 0.896223C10.7263 0.889723 10.8474 0.939723 10.9538 1.04622C11.0603 1.15256 11.1135 1.27047 11.1135 1.39997C11.1135 1.52947 11.0603 1.64739 10.9538 1.75372L6.5655 6.14222C6.47817 6.22939 6.389 6.29064 6.298 6.32597C6.207 6.36114 6.10767 6.37872 6 6.37872Z"
                                                    fill="#5C92FF"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    {/* 드롭다운 목록 */}
                                    <ul role="tablist" className={`list__sort shadow-[var(--bg-shadow-border)] ${isOpen ? "list--open" : ""}`}>
                                        {/* 회의실 옵션 매핑 */}
                                        {roomOptions.map((room, index) => (
                                            <li className="relative block h-10 pr-2 leading-8 text-left" role="presentation" key={index}>
                                                <span className="before:content-[''] before:block before:w-12  inline-flex items-center" onClick={() => handleRoomSelect(room)}>
                                                    {/* 선택된 회의실에 체크 아이콘 */}
                                                    {selectedRoom === room && (
                                                        <svg className="absolute left-6" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                {/* 최대 인원 표시 */}
                                <div className="relative lg:before:hidden before:absolute before:bg-[#f0f2f5] before:left-0 before:top-0 before:bottom-0  h-[110px] lg:h-full before:content-[''] before:block before:w-[1px] before:h-[100%] gap-3 text-center lg:pl-3 lg:text-left flex__col">
                                    <p className="leading-5 font-semibold  text-[var(--text-dark-color)] text-[1.2rem] text-[#222]">최대 인원</p>
                                    <div className="">
                                        <span className="font-extrabold text-[2.2rem] text-[#1631cbc7]">{people}</span>
                                        <span className="font-medium text-[1.2rem] text-[#6b7684] pl-1 align-text-bottom">명</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* section - 회의실 사용 여부 */}
                        <section className="flex__col items-center gap-8 flex-1 w-full bg-white h-[320px] md:w-1/2 lg:w-2/3 shadow-3xl rounded-lg ">
                            <div className="flex items-center">
                                <div className="relative w-8 mr-8 h-11">
                                    {/* 사용 가능 상태를 나타내는 아이콘 / comment : 사용 가능은 onair-on 붙여주세요!*/}
                                    {/*  */}
                                    <span className="onair onair-on"></span>
                                </div>
                                {/* 회의실 사용 상태 텍스트 / comment : 사용 중, 사용 가능  */}
                                {/* <p className="text-[1.6rem] lg:text-[2rem] font-extrabold text-[#333d4b] text-center leading-8">회의실 사용 중</p> */}
                                <p className="text-[1.6rem] lg:text-[2rem] font-extrabold text-[#333d4b] text-center leading-8">회의실 사용 가능</p>
                            </div>
                            {/* 회의실 예약 가능 상태 텍스트 / comment : 예약 가능, 예약 불가능  */}
                            {/* <strong className="text-[1.2rem] lg:text-[1.4rem] font-bold text-[#6b7684] text-center leading-8">
                                현재 <span className="text-[#333d4b]">{selectedRoom}</span>은 <span className="relative z-10 after:absolute text-[#333d4b] after:bg-[#F7DAD6] after:left-[-0.05rem] after:bottom-[-0.05rem] after:z-[-1] after:w-[101%] after:h-2">예약이 불가능</span>합니다.
                            </strong> */}
                            <strong className="text-[1.2rem] lg:text-[1.4rem] font-bold text-center leading-8 text-[#6b7684] ">
                                <span className="text-[#333d4b]">현재 {selectedRoom}</span>는 <span className="relative z-10 after:absolute text-[#333d4b] after:bg-[#DDE5F7] after:left-[-0.05rem] after:bottom-[-0.05rem] after:z-[-1] after:w-[101%] after:h-2">예약이 가능</span>합니다.
                            </strong>

                            {/* 예약 버튼  / comment : 사용 불가능 시 버튼 없애 주세요! */}
                            <button className="dark__btn " onClick={handleClick}>
                                예약하기
                            </button>
                        </section>

                        {/* section - 시간 단위 예약 현황 */}
                        <section className="w-full bg-white shadow-3xl h-[520px] rounded-lg ">
                            <div className="time-title">
                                <span className="text-[rgb(51,61,75)]">{selectedRoom}</span> <p>시간 단위 예약 현황</p>
                            </div>
                            <div className="time-wrap">
                                <span>오전</span>
                                <div className="time-list">
                                    <div className="time-item selected">
                                        <span className="time-text">00:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item selected">
                                        <span className="time-text">01:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">02:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">03:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">04:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">05:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">06:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">07:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">08:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">09:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">10:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                    <div className="time-item">
                                        <span className="time-text">11:00</span>
                                        <span className="time-box"></span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            {/* 예약 모달 */}
            <ReservationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onClose={closeModal} />
        </>
    );
}
