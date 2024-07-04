import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="flex bg-[var(--bg-main-color)] flex-1">
        <div className="z-10 w-full mt-[0px] pb-[110px] md:my-[0px] md:pb-[0px]">
          <div className="p-10 py-[60px] mx-auto bg-white shadow-3xl rounded-lg px-6 md:px-8 md:w-3/4 lg:w-[600px] w-[92%]">
            <h2 className="mb-10 text-2xl font-bold text-center text-[#222]">
              로그인
            </h2>
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
                    className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 outline-none rounded-lg bg-white/0"
                  ></input>
                </div>
                {/* 성공 */}
                <div className="mb-3">
                  <label
                    htmlFor="email2"
                    className="text-sm font-bold text-navy-700 "
                  >
                    이메일
                  </label>
                  <input
                    type="text"
                    id="email2"
                    placeholder="이메일"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-[#5C92FF] text-[#5C92FF] placeholder:text-[#5C92FF] "
                  ></input>
                </div>
                {/* 실패 */}
                <div className="mb-3">
                  <label
                    htmlFor="email3"
                    className="text-sm font-bold text-navy-700 "
                  >
                    이메일
                  </label>
                  <input
                    type="text"
                    id="email3"
                    placeholder="이메일"
                    className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm text-red-500 border border-red-500 outline-none rounded-lg bg-white/0 placeholder:text-red-500 "
                  ></input>
                  <p className="mt-2 text-sm text-red-400">
                    이메일 또는 비밀번호가 일치하지 않습니다.
                  </p>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-navy-700 "
                  >
                    비밀번호
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="비밀번호"
                    className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 outline-none rounded-lg bg-white/0"
                  ></input>
                </div>
                <div className="check-wrap">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">
                    <span className="check-icon"></span>
                    <p>다음부터 자동으로 로그인</p>
                  </label>
                </div>
              </div>
              <button className="block w-full p-3 font-bold font-md text-white bg-[#4e5968]  rounded-lg mt-10">
                로그인
              </button>
              <button className="flex items-center justify-center w-full p-[0.4375rem] font-bold font-md text-[#4e5968] border border-gray-300 bg-[#fff] rounded-lg mt-3">
                <Image
                  className=""
                  alt="구글 아이콘"
                  src="/assets/google-icon.svg"
                  width={32}
                  height={32}
                />
                구글 계정으로 로그인
              </button>

              <div>
                <Link
                  href="/login/password"
                  className="underline-link block w-fit font-semibold leading-6 text-gray-600 text-sm mt-10 mx-auto text-center"
                >
                  비밀번호를 잊으셨나요?
                </Link>

                <div className="flex item-center justify-center mt-5">
                  <p className="font-semibold pr-1.5 text-gray-400 text-sm">
                    계정이 없으신가요?
                  </p>
                  <Link
                    href="/login/password"
                    className="underline-link font-semibold text-gray-600 text-sm"
                  >
                    가입하기
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
