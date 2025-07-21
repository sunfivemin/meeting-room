# 🏢 ECF 회의실 예약 시스템

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)

**실시간 회의실 예약 및 관리 시스템**

</div>

---

## 📋 목차

- [✨ 주요 기능](#-주요-기능)
- [🛠 기술 스택](#-기술-스택)
- [📁 프로젝트 구조](#-프로젝트-구조)
- [🚀 시작하기](#-시작하기)
- [🎨 컴포넌트 가이드](#-컴포넌트-가이드)
- [🎯 페이지 구조](#-페이지-구조)
- [🎨 디자인 시스템](#-디자인-시스템)
- [📱 반응형 지원](#-반응형-지원)
- [🔧 개발 가이드](#-개발-가이드)
- [🚧 로드맵](#-로드맵)
- [🤝 기여하기](#-기여하기)
- [📞 문의 및 지원](#-문의-및-지원)

---

## ✨ 주요 기능

### 🏠 메인 대시보드
- **실시간 상태 표시**: 현재 시간과 회의실 사용 가능 여부를 실시간으로 확인
- **회의실 선택**: 드롭다운을 통한 직관적인 회의실 선택 (회의실 1, 2, 3)
- **최대 인원 표시**: 각 회의실별 수용 가능 인원 정보 (최대 12명)
- **사용 상태 표시**: 파동 애니메이션으로 실시간 사용 상태 시각화

<img width="1192" height="747" alt="스크린샷 2025-07-21 오전 10 55 59" src="https://github.com/user-attachments/assets/9f807b1c-4981-4e7d-8eb1-e140eda7e85d" />

### 📅 예약 시스템
- **날짜 선택**: react-datepicker 기반 한국어 달력 인터페이스
- **시간 슬롯**: 30분 단위 시간 선택 (06:00~20:00, 총 28개 슬롯)
- **예약 정보 입력**: 회의명, 개설자, 참여자, 일정 설명 등 상세 정보
- **모달 기반 UI**: 깔끔하고 직관적인 예약 인터페이스
- **외부 클릭 감지**: 모달 외부 클릭 시 자동 닫힘 기능

### 👤 사용자 관리
- **로그인/회원가입**: 사용자 인증 시스템
- **마이페이지**: 개인 설정 및 예약 내역 관리
- **회사 설정**: 조직별 설정 관리
- **비밀번호 재설정**: 안전한 비밀번호 복구 시스템

### 📱 반응형 디자인
- **모바일 우선**: 모바일에서 최적화된 사용자 경험
- **적응형 네비게이션**: 모바일(하단 고정) ↔ 데스크톱(상단 고정) 자동 전환
- **터치 친화적**: 터치 기반 인터페이스 최적화
- **스크롤 감지**: 스크롤 시 네비게이션 바 스타일 자동 변경

---

## 🛠 기술 스택

### Frontend Framework
| 기술 | 버전 | 용도 |
|------|------|------|
| **Next.js** | 14.2.4 | React 기반 풀스택 프레임워크 |
| **React** | 18 | 사용자 인터페이스 구축 |
| **JavaScript** | ES6+ | 프로그래밍 언어 |

### Styling & UI
| 기술 | 버전 | 용도 |
|------|------|------|
| **Tailwind CSS** | 3.4.1 | 유틸리티 퍼스트 CSS 프레임워크 |
| **CSS Variables** | - | 테마 시스템 및 색상 관리 |
| **Custom Animations** | - | 부드러운 전환 효과 |

### Date & Time Management
| 기술 | 버전 | 용도 |
|------|------|------|
| **react-datepicker** | 7.2.0 | 한국어 달력 컴포넌트 |
| **date-fns** | - | 날짜 조작 및 포맷팅 |

### Development Tools
| 기술 | 버전 | 용도 |
|------|------|------|
| **ESLint** | 8 | 코드 품질 관리 |
| **PostCSS** | 8 | CSS 전처리 |
| **Vercel** | - | 배포 플랫폼 |

### Typography
| 폰트 | 용도 | 지원 굵기 |
|------|------|-----------|
| **Pretendard** | 메인 폰트 | 9가지 (100~900) |
| **GmarketSansMedium** | 로고 폰트 | Normal |

---

## 📁 프로젝트 구조

```
meeting-room/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 components/               # 재사용 가능한 컴포넌트
│   │   ├── 🎨 Header.jsx            # 네비게이션 헤더
│   │   ├── 📅 ReservationModal.jsx  # 예약 모달
│   │   ├── 🔽 DropDown.jsx          # 커스텀 드롭다운
│   │   ├── 📋 ComboBox.jsx          # 콤보박스
│   │   └── 🪟 CommonModal.jsx       # 공통 모달
│   ├── 📁 hooks/                    # 커스텀 훅
│   │   └── 🎯 useDetectClose.jsx    # 외부 클릭 감지
│   ├── 📁 booking-history/          # 예약 내역
│   │   └── page.jsx
│   ├── 📁 login/                    # 로그인
│   │   ├── page.jsx
│   │   └── 📁 password/
│   │       └── page.jsx
│   ├── 📁 signup/                   # 회원가입
│   │   └── page.jsx
│   ├── 📁 my-page/                  # 마이페이지
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── 📁 company-settings/
│   │   ├── 📁 meeting-room/
│   │   └── 📁 member/
│   ├── 📁 room-reservation/         # 회의실 예약
│   │   └── page.jsx
│   ├── 🎨 globals.css               # 전역 스타일
│   ├── 📄 layout.jsx                # 루트 레이아웃
│   └── 🏠 page.jsx                  # 메인 페이지
├── 📁 public/                       # 정적 파일
│   ├── 📁 assets/                   # 아이콘 및 이미지
│   └── 📁 fonts/                    # 폰트 파일
├── 📄 package.json                  # 프로젝트 설정
├── ⚙️ tailwind.config.js            # Tailwind 설정
├── ⚙️ next.config.mjs               # Next.js 설정
├── ⚙️ postcss.config.mjs            # PostCSS 설정
└── ⚙️ jsconfig.json                 # JavaScript 설정
```

---

## 🚀 시작하기

### 필수 요구사항

- **Node.js** 18.0.0 이상
- **npm** 또는 **yarn**
- **Git**

### 빠른 시작

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/meeting-room.git
cd meeting-room

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요!

### 상세 설치 가이드

#### 1. 저장소 클론
```bash
git clone https://github.com/your-username/meeting-room.git
cd meeting-room
```

#### 2. 의존성 설치
```bash
# npm 사용
npm install

# 또는 yarn 사용
yarn install
```

#### 3. 개발 서버 실행
```bash
# npm 사용
npm run dev

# 또는 yarn 사용
yarn dev
```

#### 4. 브라우저에서 확인
```
http://localhost:3000
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

### 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
# 예시 환경 변수
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME=ECF 회의실 예약
```

---

## 🎨 컴포넌트 가이드

### Header.jsx
**네비게이션 헤더 컴포넌트**

<details>
<summary>📋 주요 기능</summary>

- **스크롤 감지**: 스크롤 시 네비게이션 바 스타일 자동 변경
- **반응형 네비게이션**: 모바일(하단 고정) ↔ 데스크톱(상단 고정) 자동 전환
- **현재 페이지 하이라이트**: 활성 페이지 시각적 표시
- **브랜드 로고**: SVG 기반 ECF 로고

</details>

```jsx
// 사용 예시
<Header />
```

### ReservationModal.jsx
**회의실 예약 모달 컴포넌트**

<details>
<summary>📋 주요 기능</summary>

- **날짜 선택**: react-datepicker 기반 한국어 달력
- **시간 슬롯**: 30분 단위 시간 선택 (06:00~20:00)
- **회의실 선택**: 드롭다운을 통한 회의실 선택
- **예약 정보 입력**: 회의명, 개설자, 참여자, 일정 설명
- **모달 상태 관리**: body 스크롤 제어 및 애니메이션

</details>

```jsx
// 사용 예시
<ReservationModal 
  isModalOpen={isModalOpen} 
  onClose={closeModal} 
/>
```

### DropDown.jsx
**커스텀 드롭다운 컴포넌트**

<details>
<summary>📋 주요 기능</summary>

- **외부 클릭 감지**: useDetectClose 훅을 활용한 자동 닫힘
- **선택 상태 표시**: 체크 마크로 현재 선택된 옵션 표시
- **애니메이션**: 부드러운 열림/닫힘 애니메이션
- **접근성**: ARIA 속성 및 키보드 네비게이션 지원

</details>

```jsx
// 사용 예시
<Dropdown 
  options={roomOptions} 
  selectedOption={selectedRoom} 
  onOptionSelect={handleRoomSelect} 
/>
```

### useDetectClose.jsx
**외부 클릭 감지 커스텀 훅**

<details>
<summary>📋 주요 기능</summary>

- **외부 클릭 감지**: 컴포넌트 외부 클릭 시 자동 닫힘
- **이벤트 리스너 관리**: 메모리 누수 방지를 위한 정리 함수
- **재사용 가능**: 다양한 드롭다운/모달에 적용 가능

</details>

```jsx
// 사용 예시
const [isOpen, setIsOpen] = useDetectClose(ref, false);
```

---

## 🎯 페이지 구조

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | **메인 페이지** | 회의실 상태 확인 및 예약 |
| `/room-reservation` | **회의실 예약** | 상세 예약 페이지 |
| `/booking-history` | **예약 내역** | 예약한 회의실 내역 |
| `/login` | **로그인** | 사용자 인증 |
| `/signup` | **회원가입** | 새 계정 생성 |
| `/my-page` | **마이페이지** | 개인 설정 및 관리 |
| `/my-page/company-settings` | **회사 설정** | 조직 설정 |
| `/my-page/meeting-room` | **회의실 관리** | 회의실 설정 |
| `/my-page/member` | **멤버 관리** | 사용자 관리 |

---

## 🎨 디자인 시스템

### 색상 팔레트

```css
/* Primary Colors */
--primary-blue: #4881F7;      /* 메인 브랜드 컬러 */
--light-blue: #E6EDFF;        /* 배경 및 하이라이트 */
--dark-blue: #1631cbc7;       /* 강조 텍스트 */

/* Text Colors */
--text-dark: #2e3033;         /* 주요 텍스트 */
--text-gray: #6b7684;         /* 보조 텍스트 */
--text-light: #b0b8c1;        /* 비활성 텍스트 */

/* Background Colors */
--bg-main: #6991d60d;         /* 메인 배경 */
--bg-white: #ffffff;          /* 카드 배경 */
--bg-gray: #f7f8fa;           /* 보조 배경 */
```

### 타이포그래피

```css
/* Font Family */
font-family: Pretendard, -apple-system, Noto Sans KR, Roboto, sans-serif;

/* Font Weights */
Thin: 100, ExtraLight: 200, Light: 300, Regular: 400
Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900
```

### 그림자 시스템

```css
/* Shadow Variables */
--bg-shadow: 0 15px 40px -3px rgba(0, 0, 0, 0.04);
--bg-shadow-deep: 0 8px 20px rgba(0, 0, 0, 0.1);
--bg-shadow-border: 0 0 2px 0 rgba(0, 0, 0, 0.12);
```

### 애니메이션

```css
/* Transition */
transition: all 300ms ease-in-out;

/* Fade In Animation */
.animate-fade-in {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 500ms, transform 500ms;
}

/* Wave Animation */
@keyframes wave {
  0% { box-shadow: 0 0 0 0 rgba(255, 78, 51, 1); }
  100% { box-shadow: 0 0 0 12px rgba(255, 78, 51, 0); }
}
```

---

## 📱 반응형 지원

### 브레이크포인트

| 디바이스 | 최소 너비 | 클래스 접두사 | 설명 |
|----------|-----------|---------------|------|
| **Mobile** | 320px | 기본 | 모바일 우선 디자인 |
| **Tablet** | 768px | `md:` | 태블릿 최적화 |
| **Desktop** | 1024px | `lg:` | 데스크톱 최적화 |

### 반응형 네비게이션

```jsx
// 모바일: 하단 고정 네비게이션
className="navbar__content--bottom"

// 데스크톱: 상단 고정 네비게이션  
className="navbar__content"
```

---

## 🔧 개발 가이드

### 코드 스타일

#### 네이밍 컨벤션
```javascript
// 컴포넌트: PascalCase
export default function ReservationModal() {}

// 파일: PascalCase.jsx
// Header.jsx, ReservationModal.jsx

// CSS 클래스: kebab-case
className="navbar__content--bottom"

// 변수/함수: camelCase
const [isModalOpen, setIsModalOpen] = useState(false);
const handleRoomSelect = (room) => {};
```

#### 폴더 구조
```
components/
├── Header.jsx          # 단일 컴포넌트
├── ReservationModal.jsx
└── DropDown.jsx

hooks/
└── useDetectClose.jsx  # 커스텀 훅
```

### 상태 관리

#### 로컬 상태
```javascript
// 기본 상태
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);

// 커스텀 훅 활용
const [isOpen, setIsOpen] = useDetectClose(ref, false);
```

#### 상태 업데이트 패턴
```javascript
// 함수형 업데이트
setIsModalOpen(prev => !prev);

// 객체 업데이트
setUserInfo(prev => ({
  ...prev,
  name: newName
}));
```

### 스타일링 가이드

#### Tailwind CSS 클래스 순서
```jsx
className="
  // Layout & Positioning
  flex items-center justify-center relative
  
  // Spacing
  p-4 m-2 gap-2
  
  // Sizing
  w-full h-10
  
  // Typography
  text-lg font-bold text-center
  
  // Colors & Background
  text-blue-600 bg-white
  
  // Borders & Effects
  border border-gray-200 shadow-lg rounded-lg
  
  // States
  hover:bg-gray-50 focus:ring-2
  
  // Responsive
  md:text-xl lg:p-6
"
```

#### CSS 변수 활용
```css
/* globals.css */
:root {
  --primary-blue: #4881F7;
  --text-dark: #2e3033;
}

/* 컴포넌트에서 사용 */
className="text-[var(--primary-blue)] bg-[var(--text-dark)]"
```

### 성능 최적화

#### React 최적화
```jsx
// 메모이제이션
const MemoizedComponent = React.memo(MyComponent);

// 콜백 메모이제이션
const handleClick = useCallback(() => {
  // 핸들러 로직
}, [dependency]);

// 값 메모이제이션
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

#### 이미지 최적화
```jsx
// Next.js Image 컴포넌트 사용
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="로고"
  width={100}
  height={50}
  priority
/>
```

---

## 🚧 로드맵

### Phase 1: 예약 시스템 개선
- [ ] 실시간 예약 충돌 방지
- [ ] 예약 수정/취소 기능
- [ ] 반복 예약 시스템
- [ ] 예약 승인 워크플로우

### Phase 2: 알림 및 통신
- [ ] 푸시 알림 시스템
- [ ] 이메일 알림
- [ ] 실시간 채팅
- [ ] SMS 알림

### Phase 3: 데이터 및 분석
- [ ] 통계 대시보드
- [ ] 사용 패턴 분석
- [ ] 리포트 생성
- [ ] 데이터 시각화

### Phase 4: 관리자 기능
- [ ] 회의실 관리 시스템
- [ ] 사용자 권한 관리 (RBAC)
- [ ] 시스템 설정
- [ ] 백업 및 복구

### Phase 5: UI/UX 개선
- [ ] 캘린더 뷰
- [ ] 드래그 앤 드롭 인터페이스
- [ ] 다크 모드
- [ ] 검색 및 필터링

### Phase 6: 플랫폼 확장
- [ ] 모바일 앱 (React Native)
- [ ] PWA 지원
- [ ] API 개발
- [ ] 외부 시스템 연동

> **참고**: 각 Phase의 구체적인 일정은 프로젝트 진행 상황과 우선순위에 따라 조정될 수 있습니다.

---

## 🤝 기여하기

### 기여 프로세스

1. **Fork & Clone**
```bash
git clone https://github.com/your-username/meeting-room.git
cd meeting-room
```

2. **브랜치 생성**
```bash
git checkout -b feature/your-feature-name
# 또는
git checkout -b fix/bug-description
```

3. **개발 및 테스트**
```bash
npm install
npm run dev
npm run lint
```

4. **커밋 및 푸시**
```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

5. **Pull Request 생성**
   - GitHub에서 Pull Request 생성
   - 변경사항 상세 설명
   - 관련 이슈 링크

### 커밋 컨벤션

| 타입 | 설명 | 예시 |
|------|------|------|
| `feat` | 새로운 기능 추가 | `feat: add reservation modal` |
| `fix` | 버그 수정 | `fix: resolve dropdown closing issue` |
| `docs` | 문서 수정 | `docs: update README installation guide` |
| `style` | 코드 포맷팅 | `style: format component spacing` |
| `refactor` | 코드 리팩토링 | `refactor: optimize modal performance` |
| `test` | 테스트 추가 | `test: add unit tests for dropdown` |
| `chore` | 빌드 프로세스 변경 | `chore: update dependencies` |

### 개발 가이드라인

#### 코드 품질
- ESLint 규칙 준수
- 의미있는 변수명과 함수명 사용
- 주석 작성 (복잡한 로직의 경우)
- TypeScript 사용 권장 (향후 마이그레이션)

#### 테스트
- 새로운 기능에 대한 테스트 작성
- 기존 기능 수정 시 관련 테스트 업데이트
- 테스트 커버리지 유지

#### 문서화
- 새로운 컴포넌트에 대한 문서 작성
- API 변경 시 문서 업데이트
- README 업데이트 (필요한 경우)

---

## 📞 문의 및 지원

### 이슈 리포트
버그를 발견하거나 기능 요청이 있으시면 [GitHub Issues](https://github.com/your-username/meeting-room/issues)에 등록해주세요.

---

<div align="center">

**개발팀**: ECF 개발팀
**최종 업데이트**: 2024년 12월  
**라이브 사이트**: [https://ecf-mr.vercel.app/](https://ecf-mr.vercel.app/)

[⬆️ 맨 위로](#-ecf-회의실-예약-시스템)

</div>
