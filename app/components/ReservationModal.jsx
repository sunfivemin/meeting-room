"use client";
import { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { getYear, getMonth } from "date-fns";
import { setHours, setMinutes, getHours, getMinutes, format } from "date-fns";
import Image from "next/image";
import Dropdown from "./Dropdown";
import ComboBox from "./ComboBox";

export default function ReservationModal({ isModalOpen, onClose }) {
  // 상태 값 선언
  const [isModal, setIsModal] = useState(false); // 모달 오픈 여부 상태
  const categoryOptions = ["회의실 A", "회의실 B", "회의실 C"]; // 회의실 옵션
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]); // 선택된 회의실 상태
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜 상태
  const datePickerRef = useRef(null); // DatePicker의 ref
  const startTimeRef = useRef(null); // 시작 시간 DatePicker의 ref
  const endTimeRef = useRef(null); // 종료 시간 DatePicker의 ref
  const [startTime, setStartTime] = useState(null); // 선택된 시작 시간 상태
  const [endTime, setEndTime] = useState(null); // 선택된 종료 시간 상태

  // 연도와 월 배열 생성
  const YEARS = Array.from(
    { length: getYear(new Date()) + 1 - 2000 },
    (_, i) => getYear(new Date()) - i
  );
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // 시작 시간 선택 시 호출되는 함수
  const onSelectStartTime = (time) => {
    setStartTime(time);
    setEndTime(null); // 종료 시간 초기화
  };

  // 종료 시간 선택 시 호출되는 함수
  const onSelectEndTime = (time) => {
    setEndTime(time);
  };

  // 모달 오픈 여부 변경 시 useEffect를 통해 body에 클래스 추가/제거
  useEffect(() => {
    setIsModal(isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("bodyscroll"); // 모달이 열릴 때 body 스크롤 제거
    } else {
      document.body.classList.remove("bodyscroll"); // 모달이 닫힐 때 body 스크롤 복원
    }
  }, [isModalOpen]);

  // 달력 아이콘 클릭 시 DatePicker 포커스 함수
  const handleImageClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  // 선택된 날짜의 한국어 요일 반환 함수
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

  // 카테고리 선택 시 호출되는 함수
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <section className={`modal-area ${isModalOpen ? "modal-opened  " : ""}`}>
        <div
          className={`h-full  animate-fade-in ${
            isModal ? " animate-fade-in-active " : ""
          }`}
        >
          <div className="modal-sheet lg:max-w-[calc(1048px)] md:h-4/5 md:max-w-[calc(1048px_-_310px)] md:rounded-lg md:pt-0 md:top-[50%] md:-translate-y-1/2 md:-translate-x-1/2 ">
            <button
              onClick={onClose}
              className="absolute top-0 left-0 block w-full md:hidden h-9 before:block before:w-16 before:h-1 before:rounded-sm before:bg-neutral-300 before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2"
            ></button>
            <div className="modal-wrapper ">
              <div className="modal-header">
                <h3 className="text-2xl font-bold">회의실 예약</h3>
                <div className="hidden p-5 pr-0 md:block" onClick={onClose}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.1135 6.82125L0.86725 12.0672C0.77375 12.1609 0.659 12.2109 0.523 12.2172C0.387167 12.2237 0.266083 12.1737 0.15975 12.0672C0.05325 11.9609 0 11.843 0 11.7135C0 11.584 0.05325 11.4661 0.15975 11.3597L5.40575 6.1135L0.15975 0.86725C0.0660833 0.77375 0.0160833 0.659 0.00974998 0.523C0.00324999 0.387166 0.05325 0.266082 0.15975 0.159749C0.266083 0.0532488 0.384 0 0.5135 0C0.643 0 0.760916 0.0532488 0.86725 0.159749L6.1135 5.40575L11.3597 0.159749C11.4532 0.0660822 11.568 0.0160822 11.704 0.00974884C11.8398 0.00324884 11.9609 0.0532488 12.0673 0.159749C12.1738 0.266082 12.227 0.383999 12.227 0.513499C12.227 0.642999 12.1738 0.760917 12.0673 0.86725L6.82125 6.1135L12.0673 11.3597C12.1609 11.4532 12.2109 11.568 12.2173 11.704C12.2238 11.8398 12.1738 11.9609 12.0673 12.0672C11.9609 12.1737 11.843 12.227 11.7135 12.227C11.584 12.227 11.4661 12.1737 11.3597 12.0672L6.1135 6.82125Z"
                      fill="#222"
                    />
                  </svg>
                </div>
              </div>
              <div className="modal-body">
                <form className="max-w-[100%] mr-auto gap-4 overflow-y-auto">
                  <div className="gap-2 flex__col">
                    <label className="font-bold text-md text-navy-700 ">
                      회의명
                    </label>
                    <div className="flex items-center w-full mb-10 ">
                      <input
                        type="text"
                        placeholder="회의명을 입력하세요"
                        className="flex-1 py-2 placeholder-gray-300 border-b border-gray-300 outline-none hover:border-[#5C92FF] focus:border-[#5C92FF]"
                      ></input>
                    </div>
                  </div>

                  <div className="gap-2 mb-10 flex__col">
                    <label className="font-bold text-md text-navy-700">
                      시간
                    </label>
                    <div className="flex flex-wrap items-center gap-3 ">
                      {/* 날짜 선택 */}
                      <div className="relative max-w-full cursor-pointer w-max datePickerWrapper">
                        <DatePicker
                          ref={datePickerRef}
                          formatWeekDay={(nameOfDay) =>
                            nameOfDay.substring(0, 1)
                          }
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={100}
                          renderCustomHeader={({
                            date,
                            changeYear,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                          }) => (
                            <div className="customHeaderContainer">
                              <div>
                                <button
                                  type="button"
                                  onClick={decreaseMonth}
                                  className="monthButton"
                                  disabled={prevMonthButtonDisabled}
                                >
                                  <Image
                                    alt="이전"
                                    src="/assets/icon-prev.svg"
                                    width={26}
                                    height={26}
                                  />
                                </button>
                              </div>
                              <div>
                                <span className="month">
                                  {MONTHS[getMonth(date)]}
                                </span>
                                <select
                                  value={getYear(date)}
                                  className="year"
                                  onChange={({ target: { value } }) =>
                                    changeYear(+value)
                                  }
                                >
                                  {YEARS.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  onClick={increaseMonth}
                                  className="monthButton"
                                  disabled={nextMonthButtonDisabled}
                                >
                                  <Image
                                    alt="다음"
                                    src="/assets/icon-next.svg"
                                    width={26}
                                    height={26}
                                  />
                                </button>
                              </div>
                            </div>
                          )}
                          className=" flex items-center font-semibold rounded-lg bg-[#fff] border border-gray-300 hover:border-[#5C92FF] box-border w-full h-12 text-[#222] text-center pl-6 pr-3"
                          dateFormat={`yyyy년 MM월 dd일 (${getKoreanDay(
                            selectedDate
                          )})`} // 날짜 형태 설정
                          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                          popperModifiers={{
                            preventOverflow: { enabled: true },
                          }} // 화면을 벗어나지 않도록
                          minDate={new Date("2024-07-01")} // minDate 이전 날짜 선택 불가
                          maxDate={new Date("2024-09-01")} // maxDate 이후 날짜 선택 불가
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                        <Image
                          className="absolute block cursor-pointer top-2.5 left-3"
                          alt="달력아이콘"
                          src="/assets/icon-calendar.svg"
                          width={26}
                          height={26}
                          onClick={handleImageClick}
                        />
                      </div>
                      {/* 시작 시간, 종료 시간 선택 */}
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
                            className="time-picker-input max-w-[112px] cursor-pointer border border-gray-300 hover:border-[#5C92FF] focus:border-[#5C92FF] text-center w-max rounded-lg py-[10px] px-[10px] text-[#222] font-semibold"
                          />
                        </div>
                        <Image
                          className="block "
                          alt="arrow"
                          src="/assets/icon-arrow.svg"
                          width={24}
                          height={24}
                        />
                        <div className="relative w-[112px] cursor-pointer datePickerWrapper">
                          <DatePicker
                            ref={endTimeRef}
                            selected={endTime}
                            onChange={onSelectEndTime}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            minTime={startTime || new Date()}
                            maxTime={setHours(
                              setMinutes(new Date(), getMinutes(startTime)),
                              getHours(startTime) + 5
                            )} // 시작 시간부터 2시간
                            excludeTimes={startTime ? [startTime] : []}
                            timeCaption="시간"
                            dateFormat="h:mm aa"
                            placeholderText="종료 시간"
                            className="time-picker-input max-w-[112px] cursor-pointer border border-gray-300 hover:border-[#5C92FF] focus:border-[#5C92FF] text-center w-max rounded-lg py-[10px] px-[10px] text-[#222] font-semibold"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 회의실 드롭다운 리스트 */}
                  <div className="gap-2 mb-10 flex__col">
                    <label className="font-bold text-md text-navy-700">
                      회의실
                    </label>
                    <Dropdown
                      options={categoryOptions}
                      selectedOption={selectedCategory}
                      onOptionSelect={handleCategorySelect}
                      dropdownClassNames="flex-1 h-full w-full lg:w-1/3 px-3 py-1.5 leading-loose text-[#222] bg-white/0 hover:bg-white/0 border border-gray-300  rounded-lg"
                      taplistClassNames="w-full lg:w-1/3 lg:top-[55px] border border-gray-300"
                    />
                  </div>

                  {/* 개설자 드롭다운 */}
                  <div className="gap-2 mb-10 flex__col">
                    <label className="font-bold text-md text-navy-700">
                      개최자
                    </label>
                    <ComboBox />
                  </div>

                  {/* 참여자 드롭다운 */}
                  <div className="gap-2 mb-10 flex__col">
                    <label className="font-bold text-md text-navy-700">
                      참여자
                    </label>
        
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="message"
                      className="font-bold text-md text-navy-700"
                    >
                      일정 설명
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        placeholder="일정에 대한 설명, 화상 회의 링크 등을 입력하세요. 입력된 내용은 참여인원 모두가 알 수 있습니다."
                        className="items-center justify-center flex-1 w-full p-3 mt-2 border border-gray-300 rounded-lg outline-none h-55 text-md bg-white/0 focus:border-indigo-400"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      type="submit"
                      className="bg-[#5C92FF] hover:bg-[#3541a7] text-white py-2 px-4 rounded"
                    >
                      예약하기
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-black bg-gray-300 rounded hover:bg-gray-400"
                    >
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
