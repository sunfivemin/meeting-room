export default function Login() {
    return (
        <>
            <div className="flex items-center bg-[var(--bg-main-color)] flex-1">
                <div className="z-10 w-full">
                    <div className="p-10 pt-[60px] mx-auto bg-white rounded-lg shadow-[var(--bg-shadow-border)] md:w-3/4 lg:w-[600px] w-[92%]">
                        <h2 className="mb-10 text-2xl font-bold text-center text-[#222]">로그인</h2>
                        <form action="">
                            <div className="">
                                <div className="relative flex flex-row justify-between"></div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                        이메일
                                    </label>
                                    <input type="email" name="email" id="email" placeholder="이메일" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 outline-none rounded-xl bg-white/0"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                        비밀번호
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="비밀번호" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 outline-none rounded-xl bg-white/0"></input>
                                </div>
                                <div className="round">
                                    <input type="checkbox" id="check"  />
                                    <label htmlFor="check"><span  className="check-icon" ></span><p>다음부터 자동으로 로그인</p></label>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email2" className="text-sm font-bold text-navy-700 ">
                                        이메일
                                    </label>
                                    <input type="text" id="email2" placeholder="이메일" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-[#5C92FF] text-[#5C92FF] placeholder:text-[#5C92FF] "></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email3" className="text-sm font-bold text-navy-700 ">
                                        이메일
                                    </label>
                                    <input type="text" id="email3" placeholder="이메일" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm text-red-500 border border-red-500 outline-none rounded-xl bg-white/0 placeholder:text-red-500 "></input>
                                    <p className="mt-2 text-sm text-red-400">이메일 또는 비밀번호가 일치하지 않습니다.</p>
                                </div>
                            </div>

                            {/* <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
                                    Name
                                </label>
                                <input type="text" id="name" name="name" placeholder="Put in your fullname." className="w-full p-3 border border-gray-300 rounded shadow mb-"></input>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">
                                    Twitter
                                </label>
                                <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." className="w-full p-3 border border-red-300 rounded shadow mb-"></input>
                                <p className="mt-2 text-sm text-red-400">Twitter username is required</p>
                            </div> */}

                            <button className="block w-full p-4 font-bold text-white bg-[#222] rounded-lg mt-10">로그인</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
