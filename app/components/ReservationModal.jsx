"use client";
import { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { getYear, getMonth } from "date-fns";
import { setHours, setMinutes, getHours, getMinutes, format } from "date-fns";
import Image from "next/image";

export default function ReservationModal({ isModalOpen, onClose }) {
    // 모달의 표시 여부를 관리하는 상태
    const [isModal, setIsModal] = useState(false);

    // 선택된 날짜를 관리하는 상태
    const [selectedDate, setSelectedDate] = useState(new Date());

    // 날짜 선택기와 시간 선택기에 대한 레퍼런스
    const datePickerRef = useRef(null);
    const startTimeRef = useRef(null);
    const endTimeRef = useRef(null);

    // 시작 시간과 종료 시간을 관리하는 상태
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    // 연도와 월 배열 생성
    const YEARS = Array.from({ length: getYear(new Date()) + 1 - 2000 }, (_, i) => getYear(new Date()) - i);
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // 시작 시간 선택 처리 함수
    const onSelectStartTime = (time) => {
        setStartTime(time);
        setEndTime(null);
    };

    // 종료 시간 선택 처리 함수
    const onSelectEndTime = (time) => {
        setEndTime(time);
    };

    // 모달 표시 상태 업데이트 효과
    useEffect(() => {
        setIsModal(isModalOpen);
    }, [isModalOpen]);

    // 모달 표시 여부에 따라 본문 스크롤 토글 효과
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("bodyscroll");
        } else {
            document.body.classList.remove("bodyscroll");
        }
    }, [isModalOpen]);

    // 달력 아이콘 클릭 처리 함수
    const handleImageClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setFocus();
        }
    };

    // 날짜의 요일을 한국어로 반환하는 함수
    const getKoreanDay = (date) => {
        const day = format(date, "eee", { locale: ko });
        const koreanDays = {
            Monday: "월",
            Tuesday: "화",
            Wednesday: "수",
            Thursday: "목",
            Friday: "금",
            Saturday: "토",
            Sunday: "일",
        };
        return koreanDays[day] || day;
    };

    return (
        <>
            <section className={`modal-area ${isModalOpen ? "modal-opened  " : ""}`}>
                <div className={`h-full  animate-fade-in ${isModal ? " animate-fade-in-active " : ""}`}>
                    <div className="modal-sheet lg:max-w-[calc(1048px)] md:h-4/5 md:max-w-[calc(1048px_-_310px)] md:rounded-xl md:pt-0 md:top-[50%] md:-translate-y-1/2 md:-translate-x-1/2 ">
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
                                <form className="max-w-[100%] mr-auto gap-4 overflow-y-auto">
                                    <div>
                                        <label className="font-bold text-md text-navy-700 ">회의명</label>
                                        <div className="flex items-center mt-2 mb-10">
                                            <input type="text" placeholder="회의명을 입력하세요" className="flex-1 py-2 placeholder-gray-300 border-b-2 border-gray-300 outline-none hover:border-[#495ed6] focus:border-[#495ed6]"></input>
                                        </div>
                                    </div>

                                    <div className="mb-10">
                                        <label className="font-bold text-md text-navy-700">시간</label>
                                        <div className="flex flex-wrap items-center gap-3 mt-2">
                                            <div className="relative max-w-full cursor-pointer w-max datePickerWrapper">
                                                <DatePicker
                                                    formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
                                                    showYearDropdown
                                                    scrollableYearDropdown
                                                    yearDropdownItemNumber={100}
                                                    renderCustomHeader={({ date, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                                                        <div className="customHeaderContainer">
                                                            <div>
                                                                <button type="button" onClick={decreaseMonth} className="monthButton" disabled={prevMonthButtonDisabled}>
                                                                    <Image className="" alt="이전" src="/assets/icon-prev.svg" width={26} height={26} />
                                                                </button>
                                                            </div>
                                                            <div>
                                                                <span className="month">{MONTHS[getMonth(date)]}</span>
                                                                <select value={getYear(date)} className="year" onChange={({ target: { value } }) => changeYear(+value)}>
                                                                    {YEARS.map((option) => (
                                                                        <option key={option} value={option}>
                                                                            {option}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div>
                                                                <button type="button" onClick={increaseMonth} className="monthButton" disabled={nextMonthButtonDisabled}>
                                                                    <Image className="" alt="다음" src="/assets/icon-next.svg" width={26} height={26} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                    className=" flex items-center font-semibold rounded-xl bg-[#fff] border-2 border-gray-300 hover:border-[#495ed6] box-border w-full h-12 text-[#222] text-center pl-6 pr-3"
                                                    dateFormat={`yyyy년 MM월 dd일 (${getKoreanDay(selectedDate)})`} // 날짜 형태 설정
                                                    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                                                    popperModifiers={{ preventOverflow: { enabled: true } }} // 화면을 벗어나지 않도록
                                                    minDate={new Date("2024-07-01")} // minDate 이전 날짜 선택 불가
                                                    maxDate={new Date("2024-09-01")} // maxDate 이후 날짜 선택 불가
                                                    selected={selectedDate}
                                                    onChange={(date) => setSelectedDate(date)}
                                                    ref={datePickerRef}
                                                />
                                                <Image className="absolute block cursor-pointer top-2.5 left-3" alt="달력아이콘" src="/assets/icon-calendar.svg" width={26} height={26} onClick={handleImageClick} />
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="relative w-[112px] cursor-pointer datePickerWrapper">
                                                    <DatePicker
                                                        ref={startTimeRef}
                                                        selected={startTime}
                                                        onChange={onSelectStartTime}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={30}
                                                        minTime={setHours(setMinutes(new Date(), 30), 8)}
                                                        maxTime={setHours(setMinutes(new Date(), 0), 17)}
                                                        timeCaption="시간"
                                                        dateFormat="h:mm aa"
                                                        placeholderText="시작 시간"
                                                        className="time-picker-input max-w-[112px] cursor-pointer border-2 border-gray-300 hover:border-[#495ed6] focus:border-[#495ed6] text-center w-max rounded-xl py-[10px] px-[10px] text-[#222] font-semibold"
                                                    />
                                                </div>
                                                <Image className="block " alt="arrow" src="/assets/icon-arrow.svg" width={24} height={24} />
                                                <div className="relative w-[112px] cursor-pointer datePickerWrapper">
                                                    <DatePicker
                                                        ref={endTimeRef}
                                                        selected={endTime}
                                                        onChange={onSelectEndTime}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={30}
                                                        minTime={startTime || new Date()}
                                                        maxTime={setHours(setMinutes(new Date(), getMinutes(startTime)), getHours(startTime) + 5)} // 시작 시간부터 2시간
                                                        excludeTimes={startTime ? [startTime] : []}
                                                        timeCaption="시간"
                                                        dateFormat="h:mm aa"
                                                        placeholderText="종료 시간"
                                                        className="time-picker-input max-w-[112px] cursor-pointer border-2 border-gray-300 hover:border-[#495ed6] focus:border-[#495ed6] text-center w-max rounded-xl py-[10px] px-[10px] text-[#222] font-semibold"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="w-full text-center lg:text-left drop__down" ref={dropDownRef}>
                                        <div
                                            className="tab__opt transition duration-200 ease-in-out hover:bg-[#d6e2ff]"
                                            role="button"
                                            onClick={() => {
                                                setIsOpen(!isOpen);
                                            }}>
                                            {selectedRoom}
                                            <span className={`${isOpen ? "rotate" : ""} absolute w-[20px] h-[12px] top-[13px] right-[13px] transition duration-300 ease-in-out`}>
                                                <svg width="20" height="10" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6 6.37872C5.89234 6.37872 5.793 6.36114 5.702 6.32597C5.611 6.29064 5.52184 6.22939 5.4345 6.14222L1.04625 1.75372C0.952585 1.66022 0.902585 1.54547 0.896252 1.40947C0.889752 1.27364 0.939752 1.15256 1.04625 1.04622C1.15259 0.939723 1.2705 0.886475 1.4 0.886475C1.5295 0.886475 1.64742 0.939723 1.75375 1.04622L6 5.29222L10.2463 1.04622C10.3398 0.952557 10.4545 0.902557 10.5905 0.896223C10.7263 0.889723 10.8474 0.939723 10.9538 1.04622C11.0603 1.15256 11.1135 1.27047 11.1135 1.39997C11.1135 1.52947 11.0603 1.64739 10.9538 1.75372L6.5655 6.14222C6.47817 6.22939 6.389 6.29064 6.298 6.32597C6.207 6.36114 6.10767 6.37872 6 6.37872Z"
                                                        fill="#5C92FF"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <ul role="tablist" className={`list__sort shadow-[var(--bg-shadow-border)] ${isOpen ? "list--open" : ""}`}>
                                            {roomOptions.map((room, index) => (
                                                <li className="relative block h-10 pr-2 leading-8 text-left" role="presentation" key={index}>
                                                    <span className="before:content-[''] before:block before:w-12  inline-flex items-center" onClick={() => handleRoomSelect(room)}>
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
                                    </div> */}

                                    <div className="mb-10 ">
                                        <label className="font-bold text-md text-navy-700">시간</label>
                                        <input type="text" placeholder="회의실" className="items-center justify-center flex-1 w-full h-12 p-3 mt-2 border-2 border-gray-300 outline-none text-md rounded-xl bg-white/0 focus:border-indigo-400"></input>
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="message" className="font-bold text-md text-navy-700">
                                            일정 설명
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows="4"
                                                placeholder="일정에 대한 설명, 화상 회의 링크 등을 입력하세요. 입력된 내용은 참여인원 모두가 알 수 있습니다."
                                                className="items-center justify-center flex-1 w-full p-3 mt-2 border-2 border-gray-300 outline-none h-55 text-md rounded-xl bg-white/0 focus:border-indigo-400"></textarea>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-4">
                                        <button type="submit" className="bg-[#495ed6] hover:bg-[#3541a7] text-white py-2 px-4 rounded">
                                            예약하기
                                        </button>
                                        <button type="button" onClick={onClose} className="px-4 py-2 text-black bg-gray-300 rounded hover:bg-gray-400">
                                            취소
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
