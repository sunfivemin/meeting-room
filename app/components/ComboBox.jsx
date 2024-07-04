import React, { useState } from "react";

const options = ["유후", "손성민", "심대호", "한혁진", "민선오"];

const ComboBox = () => {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const filterOptions = (query) => {
    if (query.trim() === "") {
      setFilteredOptions([]); // 입력값이 비어 있을 때는 필터링된 옵션을 초기화하여 전체 옵션을 보여주지 않습니다.
      setDropdownVisible(false); // 드롭다운을 숨깁니다.
    } else {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredOptions(filtered);
      setDropdownVisible(true); // 필터링된 옵션이 있을 때 드롭다운을 엽니다.
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    filterOptions(value);
  };

  const handleOptionClick = (option) => {
    setQuery(option);
    setSelectedOptions([...selectedOptions, option]);
    setDropdownVisible(false); // 옵션을 선택하면 드롭다운을 닫습니다.
    setFilteredOptions([]); // 선택한 옵션을 선택한 후에는 필터링된 옵션을 초기화하여 전체 옵션을 보여줍니다.
  };

  const removeSelectedOption = (option) => {
    const updatedSelectedOptions = selectedOptions.filter(
      (selectedOption) => selectedOption !== option
    );
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className="comboBox">
      <div className="relative wrapper">
        <div className="flex items-center search tab__opt transition duration-200 ease-in-out hover:bg-[#d6e2ff] flex-1 h-full w-full lg:w-1/3 px-3 py-1.5 leading-loose text-[#222] bg-white/0 hover:bg-white/0 border border-gray-300  rounded-lg ">
          <input
            type="text"
            placeholder="개설자는 최대 1명만 등록할 수 있습니다"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full h-full p-4 bg-white border-none focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5C92FF"
          >
            <path d="M381.54-350.77q-95.92 0-162.58-66.65-66.65-66.66-66.65-162.58 0-95.92 66.65-162.58 66.66-66.65 162.58-66.65 95.92 0 162.58 66.65 66.65 66.66 66.65 162.58 0 41.69-14.77 80.69t-38.77 66.69l236.31 236.31q5.61 5.62 6 13.77.38 8.16-6 14.54-6.39 6.38-14.16 6.38-7.76 0-14.15-6.38L528.92-404.31q-30 25.54-69 39.54t-78.38 14Zm0-40q79.61 0 134.42-54.81 54.81-54.8 54.81-134.42 0-79.62-54.81-134.42-54.81-54.81-134.42-54.81-79.62 0-134.42 54.81-54.81 54.8-54.81 134.42 0 79.62 54.81 134.42 54.8 54.81 134.42 54.81Z" />
          </svg>
        </div>
        {dropdownVisible && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-b-lg shadow-lg">
            {filteredOptions.map((option) => (
              <li
                key={option}
                className="px-4 py-2 cursor-pointer hover:bg-[#5C92FF] hover:text-white"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedOptions.length > 0 && (
        <div className="mt-2 text-gray-800">
          <ul className="flex flex-wrap mt-1">
            {selectedOptions.map((selectedOption) => (
              <li
                key={selectedOption}
                className="px-3 py-1 mb-2 mr-2 text-white bg-[#5C92FF] rounded-full cursor-pointer"
                onClick={() => removeSelectedOption(selectedOption)}
              >
                {selectedOption}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 -mr-1 text-white cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ComboBox;
