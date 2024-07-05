import Image from "next/image";
import Link from "next/link";

export default function Signup() {
    return (
        <>
            <div className="flex bg-[var(--bg-main-color)] flex-1 mt-[100px]">
                <div className="z-10 w-full mt-[0px] pb-[110px] md:my-[0px] md:pb-[0px]">
                    <div className="p-10 py-[60px] mx-auto bg-white shadow-3xl rounded-lg px-6 md:px-8 md:w-3/4 lg:w-[600px] w-[92%]">
                        <h2 className="mb-10 text-2xl font-bold text-center text-[#222]">회원가입</h2>
                        <form action="">
                            <div className="">
                                <div className="relative flex flex-row justify-between"></div>
                                {/* 이메일 입력 */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                        이메일
                                    </label>
                                    <input type="email" name="email" id="email" placeholder="이메일" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                                </div>
                                {/* 성공 */}
                                <div className="mb-3">
                                    <label htmlFor="email2" className="text-sm font-bold text-navy-700 ">
                                        이메일
                                    </label>
                                    <input type="text" id="email2" placeholder="이메일" className="mt-2 flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-[#5C92FF] text-[#5C92FF] placeholder:text-[#5C92FF] "></input>
                                </div>
                                {/* 실패 */}
                                <div className="mb-3">
                                    <label htmlFor="email3" className="text-sm font-bold text-navy-700 ">
                                        이메일
                                    </label>
                                    <input type="text" id="email3" placeholder="이메일" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm text-red-500 border border-red-500 rounded-lg outline-none bg-white/0 placeholder:text-red-500 "></input>
                                    <p className="mt-2 text-sm text-red-400">이메일이 일치하지 않습니다.</p>
                                </div>
                                {/* 이메일 인증하기 */}
                                <button className="block w-full my-8 transition duration-300 ease-in-out font-md gray__btn">이메일 인증하기</button>
                                {/* 이메일 인증하기  - 클릭 활성화*/}
                                <button className="block w-full my-8 transition duration-300 ease-in-out font-md blue__btn">이메일 인증하기</button>

                                {/* 비밀번호 입력 */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                        비밀번호
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="비밀번호" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                                </div>
                                {/* 비밀번호 실패 */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                        비밀번호
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="비밀번호" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm text-red-500 border border-red-500 rounded-lg outline-none bg-white/0 placeholder:text-red-500 "></input>
                                    <p className="mt-2 text-sm text-red-400">영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                                </div>

                                {/* 이름 입력 */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                        이름
                                    </label>
                                    <input type="text" placeholder="이름" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                                </div>
                                {/* 부서명 입력 */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                        부서명
                                    </label>
                                    <input type="text" placeholder="이름" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                                </div>
                                {/* 부서명 입력 */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                        부서명
                                    </label>
                                    <input type="text" placeholder="이름" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                                </div>
                            </div>
                            {/* 로그인 */}
                            <button className="block w-full p-3 font-bold text-white bg-[#4e5968]  rounded-lg mt-8 hover:bg-[#4e5968d1] transition duration-300 ease-in-out">로그인</button>

                            <div>
                                <div className="flex justify-center mt-5 item-center">
                                    <p className="font-semibold pr-1.5 text-gray-400 text-sm">이미 아이디가 있으신가요? </p>
                                    <Link href="/login" className="text-sm font-semibold text-gray-600 underline-link transition duration-300 ease-in-out hover:text-[#4e5968d1] ">
                                        로그인
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
