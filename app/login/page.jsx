import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <div className=" bg-[var(--bg-main-color)] flex-1 flex items-center">
                <div className="z-10 flex w-full h-fit ">
                    <div className="p-10 mx-auto bg-white shadow-3xl rounded-lg px-6 md:px-8 md:w-3/4 lg:w-[500px] w-[92%]">
                        <h2 className="mb-10 text-2xl font-bold text-center text-[#222]">로그인</h2>
                        <form action="">
                            <div className="">
                                <div className="relative flex flex-row justify-between"></div>
                                {/* 이메일 입력 */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">이메일</label>
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
                                {/* 비밀번호 입력 */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">비밀번호</label>
                                    <input type="password" name="password" id="password" placeholder="비밀번호" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                                </div>
                                {/* 자동 로그인 체크박스 */}
                                <div className="check-wrap">
                                    <input type="checkbox" id="check" />
                                    <label htmlFor="check">
                                        <span className="check-icon"></span>
                                        <p>다음부터 자동으로 로그인</p>
                                    </label>
                                </div>
                            </div>
                            {/* 로그인 */}
                            <button className="block w-full p-3 font-bold font-md text-white bg-[#4e5968]  rounded-lg mt-8 hover:bg-[#4e5968d1] transition duration-300 ease-in-out">로그인</button>

                            {/* 구글 로그인 */}
                            <button className="flex items-center justify-center w-full p-[0.4375rem] font-bold font-md text-[#4e5968] border hover:text-[#4e5968d1] hover:border-[#4e5968d1] border-gray-300 bg-[#fff] rounded-lg mt-3 transition duration-300 ease-in-out">
                                <Image className="" alt="구글 아이콘" src="/assets/google-icon.svg" width={32} height={32} />
                                구글 계정으로 로그인
                            </button>

                            <div>
                                <Link href="/login/password" className="block mx-auto mt-10 text-sm font-semibold leading-6 text-center text-gray-600 underline-link w-fit transition duration-300 ease-in-out hover:text-[#4e5968d1]">
                                    비밀번호를 잊으셨나요?
                                </Link>

                                <div className="flex justify-center mt-5 item-center">
                                    <p className="font-semibold pr-1.5 text-gray-400 text-sm">계정이 없으신가요?</p>
                                    <Link href="/signup" className="text-sm font-semibold text-gray-600 underline-link transition duration-300 ease-in-out hover:text-[#4e5968d1] ">
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
