"use client";
import ReservationModal from "./components/ReservationModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

// 회의실 옵션 배열
const roomOptions = ["회의실 1", "회의실 2", "회의실 3"];

export default function Home() {
    // 모달 열림 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 선택된 회의실 상태 관리
    const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);

    // 드롭다운 열림 상태 관리
    const [isOpen, setIsOpen] = useState(false);

    // 모달 열기
    const handleClick = () => {
        setIsModalOpen(true);
    };

    // 회의실 선택 핸들러
    const handleRoomSelect = (room) => {
        setSelectedRoom(room);
        setIsOpen(false); // 드롭다운 닫기
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // 현재 시간 관련 변수
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
                                <Dropdown options={roomOptions} selectedOption={selectedRoom} onOptionSelect={handleRoomSelect} setIsOpen={setIsOpen} />
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
                                <span className="text-[#333d4b]">현재 {selectedRoom}</span>는 <span className="relative z-10 after:absolute text-[#333d4b] after:bg-[#DDE5F7] after:left-[-0.05rem] after:bottom-[-0.05rem] after:z-[-1] after:w-[101%] after:h-2">예약이 가능</span>
                                합니다.
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
            <ReservationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedOption={selectedRoom} onClose={closeModal} />
        </>
    );
}
