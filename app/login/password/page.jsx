"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommonModal from "../../components/CommonModal";

export default function Password() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleConfirm = () => {
        alert("확인버튼");
    };

    // const handleCancel = () => {
    //     alert("취소 버튼 클릭됨");
    // };

    return (
        <>
            <div className="flex bg-[var(--bg-main-color)] flex-1 items-center">
                <div className="z-10 w-full mt-[0px] pb-[110px] md:my-[0px] md:pb-[0px]">
                    <div className="p-10 align-center justify-center mx-auto bg-white shadow-3xl rounded-lg px-6 md:px-8 md:w-3/4 lg:w-[600px] w-[92%]">
                        <h2 className="mb-3 text-2xl font-bold text-center text-[#222]">비밀번호 찾기</h2>
                        <p className="mb-10 text-sm text-center text-gray-500 font-nomal">가입하신 이메일 주소를 입력해주세요.</p>
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                    이메일
                                </label>

                                <input type="email" name="email" id="email" placeholder="이메일" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none bg-white/0"></input>
                            </div>
                            {/* 실패 */}
                            <div className="mb-3">
                                <label htmlFor="email" className="text-sm font-bold text-navy-700 ">
                                    이메일
                                </label>

                                <input type="email" name="email" id="email" placeholder="이메일" className="flex items-center justify-center w-full h-12 p-3 mt-2 text-sm text-red-500 border border-red-500 rounded-lg outline-none bg-white/0 placeholder:text-red-500 "></input>
                                <p className="mt-2 text-sm text-red-400">이메일이 일치하지 않습니다.</p>
                            </div>
                        </form>
                        <button className="block w-full p-3 font-bold font-md text-white bg-[#4e5968] rounded-lg mt-10" onClick={() => setIsModalOpen(true)}>
                            비밀번호 찾기
                        </button>
                        <CommonModal
                            open={isModalOpen}
                            setOpen={setIsModalOpen}
                            title="example@example.com 메일로 인증코드를 전송하였습니다."
                            content="이메일이 수신되지 않는 경우 입력하신 이메일 주소가 정확한지 또는 스팸 메일함을 확인해주세요."
                            onConfirm={handleConfirm}
                            singleButton={true}
                        />{" "}
                    </div>
                </div>
            </div>
            {/* <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={() => setIsModalOpen(true)}>
                two Modal
            </button>
            <CommonModal open={isModalOpen} setOpen={setIsModalOpen} title="인증코드를 재전송하였습니다." content="이메일이 수신되지 않는 경우 입력하신 이메일 주소가 정확한지 또는 스팸 메일함을 확인해주세요." onConfirm={handleConfirm} onCancel={handleCancel} />{" "}
         */}
        </>
    );
}
