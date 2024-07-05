import Image from "next/image";
import Link from "next/link";

export default function Password() {
  return (
    <>
      <div className="flex bg-[var(--bg-main-color)] flex-1 py-[60px]">
        <div className="z-10 w-full mt-[0px] pb-[110px] md:my-[0px] md:pb-[0px]">
          <div className="p-10 py-[60px] mx-auto bg-white shadow-3xl rounded-lg px-6 md:px-8 md:w-3/4 lg:w-[600px] w-[92%]">
            <h2 className="mb-3 text-2xl font-bold text-center text-[#222]">
              비밀번호 찾기
            </h2>
            <p className="mb-10 text-sm text-center text-gray-500 font-nomal">
              가입하신 이메일 주소를 입력해주세요.
            </p>
            <form action="">
              <div className="">
                <div className="relative flex flex-row justify-between"></div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-navy-700 "
                  >
                    이메일
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="이메일"
                    className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"
                  ></input>
                </div>
              </div>

              <button className="block w-full p-3 font-bold font-md text-white bg-[#4e5968] rounded-lg mt-10">
                비밀번호 찾기
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
