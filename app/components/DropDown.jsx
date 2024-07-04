import React, { useRef } from "react";
import useDetectClose from "../hooks/useDetectClose";

const Dropdown = ({ options, selectedOption, onOptionSelect, dropdownClassNames, taplistClassNames }) => {
    // 드롭다운 ref
    const dropDownRef = useRef();
    // 드롭다운 열림 상태 감지 훅
    const [isOpen, setIsOpenLocal] = useDetectClose(dropDownRef, false);

    const handleOptionSelect = (option) => {
        onOptionSelect(option);
        setIsOpenLocal(false); // Dropdown 내부에서 상태를 업데이트 /  이 함수는 Dropdown 컴포넌트의 로컬 상태를 업데이트
        // setIsOpen(false); Home 컴포넌트에서 상태를 업데이트 /  Home 컴포넌트의 범위 내에서 동작하며, 해당 상태를 관리
    };

    return (
        <div className="w-full text-center lg:text-left drop__down" ref={dropDownRef}>
            <div
                className={`tab__opt transition duration-200 ease-in-out hover:bg-[#d6e2ff] ${dropdownClassNames}`}
                role="button"
                onClick={() => {
                    setIsOpenLocal(!isOpen);
                }}>
                {selectedOption}
                <span className={`${isOpen ? "rotate" : ""} absolute w-[20px] h-[12px] top-1/2 transform -translate-y-1/2 right-[13px] transition duration-300 ease-in-out`}>
                    <svg width="20" height="10" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 6.37872C5.89234 6.37872 5.793 6.36114 5.702 6.32597C5.611 6.29064 5.52184 6.22939 5.4345 6.14222L1.04625 1.75372C0.952585 1.66022 0.902585 1.54547 0.896252 1.40947C0.889752 1.27364 0.939752 1.15256 1.04625 1.04622C1.15259 0.939723 1.2705 0.886475 1.4 0.886475C1.5295 0.886475 1.64742 0.939723 1.75375 1.04622L6 5.29222L10.2463 1.04622C10.3398 0.952557 10.4545 0.902557 10.5905 0.896223C10.7263 0.889723 10.8474 0.939723 10.9538 1.04622C11.0603 1.15256 11.1135 1.27047 11.1135 1.39997C11.1135 1.52947 11.0603 1.64739 10.9538 1.75372L6.5655 6.14222C6.47817 6.22939 6.389 6.29064 6.298 6.32597C6.207 6.36114 6.10767 6.37872 6 6.37872Z"
                            fill="#5C92FF"
                        />
                    </svg>
                </span>
            </div>
            {/* isOpen 상태에 따라 리스트를 열거나 닫음 */}
            <ul role="tablist" className={`list__sort border border-[#DBE5FF] shadow-[var(--bg-shadow-border)] ${taplistClassNames} ${isOpen ? "list--open" : ""}`}>
                {options.map((option, index) => (
                    <li className="relative block h-10 pr-2 leading-8 text-left" role="presentation" key={index}>
                        {/* 선택된 옵션일 경우 체크 마크 추가 */}
                        <span className="before:content-[''] before:block before:w-12 w-full inline-flex items-center" onClick={() => handleOptionSelect(option)}>
                            {selectedOption === option && (
                                <svg className="absolute left-6" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.76851 8.95827L13.5705 0.156267C13.6678 0.0589341 13.7826 0.00701644 13.9148 0.000516443C14.0468 -0.00581689 14.1678 0.0461008 14.278 0.156267C14.3883 0.266601 14.4435 0.385516 14.4435 0.513016C14.4435 0.640683 14.3883 0.7596 14.278 0.869767L5.33401 9.81977C5.17235 9.98127 4.98385 10.062 4.76851 10.062C4.55318 10.062 4.36468 9.98127 4.20301 9.81977L0.153015 5.76977C0.0556812 5.67243 0.00476452 5.55677 0.000264515 5.42277C-0.00423549 5.28877 0.0486809 5.1666 0.159014 5.05627C0.269181 4.9461 0.388015 4.89102 0.515515 4.89102C0.643181 4.89102 0.762098 4.9461 0.872264 5.05627L4.76851 8.95827Z"
                                        fill="#5C92FF"
                                    />
                                </svg>
                            )}
                            {option}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
