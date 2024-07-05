import Image from "next/image";
import Link from "next/link";

export default function Signup() {
    return (
        <>
            <div className="flex bg-[var(--bg-main-color)] flex-1 mt-[100px]">
                <div className="z-10 w-full mt-[0px] pb-[110px] md:my-[0px] md:pb-[60px]">
                    <div className="p-10 py-[60px] mx-auto bg-white shadow-3xl rounded-lg px-6 md:px-8 md:w-3/4 lg:w-[600px] w-[92%]">
                        <h2 className="mb-10 text-2xl font-bold text-center text-[#222]">회원가입</h2>
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
                                    <label className="text-sm font-bold text-navy-700 ">이메일</label>
                                    <input type="text" id="email2" placeholder="이메일" className="mt-2 flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-[#5C92FF] text-[#5C92FF] placeholder:text-[#5C92FF] "></input>
                                </div>
                                {/* 실패 */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">이메일</label>
                                    <input type="text" id="email3" placeholder="이메일" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm text-red-500 border border-red-500 rounded-lg outline-none bg-white/0 placeholder:text-red-500 "></input>
                                    <p className="mt-2 text-sm text-red-400">이메일이 일치하지 않습니다.</p>
                                </div>
                                
                                {/* 이메일 인증하기 */}
                                <button className="block w-full mt-3 mb-5 transition duration-300 ease-in-out font-md gray__btn">이메일 인증하기</button>
                                {/* 이메일 인증하기  - 클릭 활성화*/}
                                <button className="block w-full mt-3 mb-8 transition duration-300 ease-in-out font-md blue__btn">이메일 인증하기</button>

                                {/* 비밀번호 입력 */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">비밀번호</label>
                                    <input type="password" name="password" id="password" placeholder="비밀번호" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                                </div>
                                {/* 비밀번호 실패 */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">
                                        비밀번호
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="비밀번호" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm text-red-500 border border-red-500 rounded-lg outline-none bg-white/0 placeholder:text-red-500 "></input>
                                    <p className="mt-2 text-sm text-red-400">영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                                </div>

                                {/* 비밀번호 확인 */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">
                                        비밀번호 확인
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="비밀번호" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                                </div>
                                {/* 비밀번호 확인 - 일치하지 않습니다. */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">
                                        비밀번호 확인
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="비밀번호" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm text-red-500 border border-red-500 rounded-lg outline-none bg-white/0 placeholder:text-red-500 "></input>
                                    <p className="mt-2 text-sm text-red-400">비밀번호가 일치하지 않습니다.</p>
                                </div>

                                {/* 이름 입력 */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">이름</label>
                                    <input type="text" placeholder="이름" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                                </div>
                                {/* 부서명 셀렉트 박스 */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">부서명</label>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="department-check-01" />
                                        <label htmlFor="department-check-01">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">경영지원부</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="department-check-02" />
                                        <label htmlFor="department-check-02">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">사업기획부</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="department-check-03" />
                                        <label htmlFor="department-check-03">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">기술운영부</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="department-check-04" />
                                        <label htmlFor="department-check-04">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">영업추진부</p>
                                        </label>
                                    </div>
                                </div>
                                {/* 팀명 셀렉트 박스 */}
                                <div className="mb-3">
                                    <label className="text-sm font-bold text-navy-700 ">팀명</label>
                                    {/* 경영지원부 */}
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-01-01" />
                                        <label htmlFor="team-check-01-01">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">인사팀</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-01-02" />
                                        <label htmlFor="team-check-01-02">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">총무팀</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-01-03" />
                                        <label htmlFor="team-check-01-03">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">회계팀</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-01-04" />
                                        <label htmlFor="team-check-01-04">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">지원팀</p>
                                        </label>
                                    </div>
                                    {/* 사업기획부 */}
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-02-01" />
                                        <label htmlFor="team-check-02-01">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">브랜드기획팀</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-02-02" />
                                        <label htmlFor="team-check-02-02">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">홍보기획팀</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-02-03" />
                                        <label htmlFor="team-check-02-03">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">사업MD팀</p>
                                        </label>
                                    </div>

                                    {/* 기술운영부 */}
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-03-01" />
                                        <label htmlFor="team-check-03-01">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">UX.UX팀</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-03-02" />
                                        <label htmlFor="team-check-03-02">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">PM팀</p>
                                        </label>
                                    </div>

                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-03-03" />
                                        <label htmlFor="team-check-03-03">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">IT개발팀</p>
                                        </label>
                                    </div>

                                    {/* 영업추진부 */}
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-04-01" />
                                        <label htmlFor="team-check-04-01">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">영업팀</p>
                                        </label>
                                    </div>
                                    <div className="check-wrap">
                                        <input type="checkbox" id="team-check-04-02" />
                                        <label htmlFor="team-check-04-02">
                                            <span className="check-icon"></span>
                                            <p className="!text-base">CS팀</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* 직책 셀렉트 박스 */}
                            <div className="mb-3">
                                <label className="text-sm font-bold text-navy-700 ">직책</label>
                                <div className="check-wrap">
                                    <input type="checkbox" id="position-check-01" />
                                    <label htmlFor="position-check-01">
                                        <span className="check-icon"></span>
                                        <p className="!text-base">대표</p>
                                    </label>
                                </div>
                                <div className="check-wrap">
                                    <input type="checkbox" id="position-check-02" />
                                    <label htmlFor="position-check-02">
                                        <span className="check-icon"></span>
                                        <p className="!text-base">이사</p>
                                    </label>
                                </div>
                                <div className="check-wrap">
                                    <input type="checkbox" id="position-check-03" />
                                    <label htmlFor="position-check-03">
                                        <span className="check-icon"></span>
                                        <p className="!text-base">팀장</p>
                                    </label>
                                </div>
                                <div className="check-wrap">
                                    <input type="checkbox" id="position-check-04" />
                                    <label htmlFor="position-check-04">
                                        <span className="check-icon"></span>
                                        <p className="!text-base">대리</p>
                                    </label>
                                </div>
                                <div className="check-wrap">
                                    <input type="checkbox" id="position-check-05" />
                                    <label htmlFor="position-check-05">
                                        <span className="check-icon"></span>
                                        <p className="!text-base">주임</p>
                                    </label>
                                </div>
                                <div className="check-wrap">
                                    <input type="checkbox" id="position-check-06" />
                                    <label htmlFor="position-check-06">
                                        <span className="check-icon"></span>
                                        <p className="!text-base">사원</p>
                                    </label>
                                </div>
                            </div>
                            {/* 약관동의 */}
                            <div className="pt-5 ">
                                <label className="text-sm font-bold text-navy-700">약관동의</label>
                                <div className="w-full gap-2 px-5 pt-2 pb-5 mt-3 text-sm border border-gray-300 rounded-lg outline-none flex__col bg-white/0">
                                    <div className="check-wrap">
                                        <input type="checkbox" id="terms-check-all" />
                                        <label htmlFor="terms-check-all">
                                            <span className="check-icon"></span>
                                            <p className="!text-base 
                                            !text-[#222] !font-semibold">전체동의</p>
                                        </label>
                                    </div>
                                    <hr className="my-2"></hr>
                                    <div className="gap-1 flex__col ">
                                        <div className="check-wrap">
                                            <input type="checkbox" id="terms-check-01" />
                                            <label htmlFor="terms-check-01">
                                                <span className="check-icon"></span>
                                                <p className="!text-base flex items-center justify-center gap-x-2 gap-y-4 flex-wrap">
                                                    <span className="text-[#222] font-semibold">필수</span><span className="pr-1">서비스 이용약관</span>  
                                                </p>
                                            </label>
                                            <span className="text-sm ml-2 gray-b font-semibold text-gray-400 underline-link transition duration-300 ease-in-out hover:text-[#4e5968d1] ">내용보기</span>
                                        </div>
                                        <div className="check-wrap">
                                            <input type="checkbox" id="terms-check-02" />
                                            <label htmlFor="terms-check-02">
                                                <span className="check-icon"></span>
                                                <p className="!text-base flex items-center gap-x-2 gap-y-4 flex-wrap">
                                                    <span className="text-[#222] font-semibold ">필수</span><span>개인정보 수집 및 이용 동의서</span>  
                                                </p>
                                            </label>
                                            <span className="text-sm ml-2 gray-b font-semibold text-gray-400 underline-link transition duration-300 ease-in-out hover:text-[#4e5968d1] ">내용보기</span>
                                        </div>
                                        <div className="check-wrap">
                                            <input type="checkbox" id="terms-check-03" />
                                            <label htmlFor="terms-check-03">
                                                <span className="check-icon"></span>
                                                <p className="!text-base flex items-center justify-center gap-x-2 gap-y-4 flex-wrap">
                                                    <span className="font-semibold text-gray-500 ">선택</span>
                                                    <span>마케팅 정보 수신 동의</span>
                                                </p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 회원가입 */}
                            <button className="block w-full p-3 font-bold text-white bg-[#4e5968]  rounded-lg mt-8 hover:bg-[#4e5968d1] transition duration-300 ease-in-out">회원가입</button>

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
