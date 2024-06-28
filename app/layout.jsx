import Header from "./components/Header";
import "./globals.css";

export const metadata = {
    icons: {
        icon: "./img/favicon.ico",
    },
    title: "회의실 예약",
    description: "ECF 회의실 예약 시스템입니다.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <div className="body__wrap">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
