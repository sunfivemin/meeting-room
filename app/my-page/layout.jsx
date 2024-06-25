import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>
            <div className="p-navbar__content" aria-expanded="false" aria-hidden="true">
                <ul className="p-navbar__menu"></ul>
                <ul className="p-navbar__menu">
                    <li className="p-navbar__item">
                        <Link href="/my-page">내 계정</Link>
                    </li>
                    <li className="p-navbar__item">
                        <Link href="/my-page/company-settings">회사 설정</Link>
                    </li>
                    <li className="p-navbar__item">
                        <Link href="/my-page/meeting-room">회의실</Link>
                    </li>
                    <li className="p-navbar__item">
                        <Link href="/my-page/member">멤버</Link>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    );
}
