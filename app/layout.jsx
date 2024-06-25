 
import "./globals.css";
import Link from "next/link";

export const metadata = {
    icons: {
        icon: "./img/favicon.ico",
    },
    title: "회의실 예약",
    description: "ECF 회의실 예약 시스템입니다.",
};

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                <nav className="p-navbar">
                    <div className="p-container p-container--default">
                        <div className="p-container__inner p-navbar__inner-container">
                            <div className="p-navbar__logo-container">
                                <Link className="p-navbar__logo-icon " href="/">
                                    <svg width="43" height="17" viewBox="0 0 44 18">
                                        <path className="cls-1" d="M0,.48H11.57V1.7H4.12V7.47s4.78-.03,4.78,0-.9,1.83-.9,1.83h-3.88v5.73h7.55v1.24H0V.48Z" />
                                        <polygon className="cls-1" points="42.74 2.18 42.74 .97 31.22 .97 31.22 16.75 32.9 16.75 35.31 16.75 35.35 16.75 35.35 10.46 39.38 10.46 40.23 8.44 35.35 8.44 35.35 2.18 42.74 2.18" />
                                        <path
                                            className="cls-1"
                                            d="M21.97,16.71c-5.4,.03-9.43-2.57-9.43-8.03,.03-2.89,.98-4.92,3.11-6.59C17.58,.5,19.97-.02,22.58,0c2.38,0,4.37,1.1,5.32,1.68l-.63,1.26c-1.35-1.13-3.16-1.69-4.9-1.71-1.71-.02-3.44,1.05-4.3,2.51-.44,.75-.72,1.57-.85,2.43-.36,2.33-.07,4.88,1.69,6.59,1.02,1,2.4,1.59,3.83,1.63,.33,0,.67,.01,.99-.04,1.82-.3,3.12-1.15,4.25-1.96l-.53,2.92c-1.2,.59-3.02,1.4-5.46,1.4Z"
                                        />
                                    </svg>
                                </Link>

                            </div>

                            <div className="p-navbar__content" aria-expanded="false" aria-hidden="true">
                                <ul className="p-navbar__menu">
                                    <li className="p-navbar__item">
                                        <Link href="/">
                                            홈
                                        </Link>
                                    </li>
                                    <li className="p-navbar__item">
                                        <Link href="/room-reservation">회의실 예약</Link>
                                    </li>
                                    <li className="p-navbar__item">
                                        <Link href="/booking-history">
                                            예약 내역
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Link href="/my-page">
                                    나
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
