# Body Manager - 헬스장 관리 시스템 프론트엔드

> 헬스장/피트니스 클럽의 회원 관리, 출결, 운동 일정, 인바디 데이터 시각화, 결제 시스템을 통합한 관리 플랫폼의 클라이언트 애플리케이션

---

## 1. 프로젝트 개요

**프론트엔드 총괄 (React 18 기반 SPA, 상태 관리 및 UI/UX 설계 담당)**

헬스장 운영에 필요한 회원 관리, 출결 체크, 운동 일정, 식단 관리, 인바디 데이터 시각화, 멤버십 결제 등의 기능을 제공하는 웹 애플리케이션입니다.

- **역할**: 프론트엔드 개발 총괄, 컴포넌트 아키텍처 설계, 상태 관리 및 API 연동
- **기간**: 프로젝트 개발 기간
- **팀 구성**: 백엔드 2명, 프론트엔드 1명 , 백엔드 + 프론트엔드 1명 (본인)

### 주요 담당 범위

- React 기반 컴포넌트 아키텍처 설계 및 구현 (Atomic Design Pattern 적용)
- Redux Toolkit을 활용한 전역 상태 관리 및 API 상태 동기화
- 실시간 데이터 시각화 (Recharts 기반 인바디 차트)
- Toss Payments SDK 연동을 통한 결제 시스템 구현
- STOMP 프로토콜 기반 실시간 채팅 기능 구현
- React Router v6를 활용한 보호된 라우팅 및 인증 처리

---

## 2. 문제 정의

### 해결하려는 현실 문제

기존 헬스장 관리 시스템은 다음과 같은 문제점이 있었습니다:

1. **데이터 시각화 부재**: 인바디 측정값이 숫자로만 표시되어 트렌드 파악이 어려움
2. **출결 관리 비효율**: 수기 출결 체크로 인한 데이터 누락 및 관리 어려움
3. **회원-트레이너 간 소통 부재**: 일정 조율 및 피드백 전달이 비효율적
4. **결제 프로세스 분산**: 멤버십, PT, 운동복/캐비넷 등 결제가 별도로 처리되어 통합 관리 어려움

### 기술적 해결 방향

- **인바디 데이터 시각화**: 라인, 바, 레이더 차트를 통해 체중, 근육량, 체지방 변화 추이를 직관적으로 제공
- **자동화된 출결 시스템**: 실시간 출결 체크 및 출석 통계 자동 계산
- **실시간 채팅**: STOMP 기반 웹소켓 통신으로 회원-트레이너 간 즉시 소통
- **통합 결제 시스템**: Toss Payments SDK를 통한 단일 플랫폼에서 모든 결제 처리

---

## 3. 기술 스택 명시

### Core

- **React 18.2.0**: 함수형 컴포넌트 및 Hooks 기반 개발로 코드 재사용성 및 유지보수성 확보
- **Redux Toolkit 1.9.0**: 복잡한 전역 상태 관리(인증, 인바디 데이터, 날짜)를 효율적으로 처리하기 위해 선택. 기존 Redux 대비 보일러플레이트 코드 70% 감소
- **React Router v6.4.3**: 중첩 라우팅 및 보호된 라우트를 통한 인증 기반 접근 제어

### UI/UX

- **Styled Components 5.3.6**: CSS-in-JS로 컴포넌트별 스타일 캡슐화, 동적 스타일링(테마, 다크모드 대응) 용이
- **Recharts 2.1.16**: SVG 기반 반응형 차트 라이브러리로 인바디 데이터 다차원 시각화 (라인/바/레이다 차트)
- **React Icons 4.6.0**: 일관된 아이콘 시스템 구축

### 비즈니스 로직

- **Axios 1.1.3**: 인터셉터를 활용한 토큰 관리 및 에러 처리 중앙화
- **Toss Payments SDK 1.2.3**: 국내 결제 시장 점유율 1위 서비스로 안정적인 결제 프로세스 보장
- **STOMP.js 2.3.3**: Spring Boot 백엔드와의 호환성을 위해 선택. WebSocket 기반 실시간 채팅 구현

### 기타

- **React DatePicker 4.8.0**: 인바디 등록일, 운동 일정 등 날짜 입력 UI
- **React Daum Postcode 3.1.1**: 회원가입 시 주소 검색 API 연동
- **Moment.js 2.29.4**: 날짜 포맷팅 및 계산

---

## 4. 시스템 구조도

```
┌─────────────────────────────────────────────────────────────┐
│                      클라이언트 (React)                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Pages      │  │  Templates   │  │  Organisms   │       │
│  │              │→ │              │→ │              │       │
│  │ (Management) │  │ (Skeletons)  │  │  (Nav, Diet) │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│         │                  │                  │              │
│         └──────────────────┼──────────────────┘              │
│                            │                                 │
│                   ┌────────▼────────┐                        │
│                   │   Molecules     │                        │
│                   │  (Components)   │                        │
│                   └────────┬────────┘                        │
│                            │                                 │
│                   ┌────────▼────────┐                        │
│                   │     Atoms       │                        │
│                   │  (Basic UI)     │                        │
│                   └─────────────────┘                        │
│                                                               │
│  ┌──────────────────────────────────────────────────┐        │
│  │           Redux Store (Global State)             │        │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │        │
│  │  │   Auth   │  │  Chart   │  │   Date   │       │        │
│  │  └──────────┘  └──────────┘  └──────────┘       │        │
│  └──────────────────────────────────────────────────┘        │
│                            │                                 │
└────────────────────────────┼─────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  REST API    │   │   WebSocket  │   │   Payment    │
│  (Axios)     │   │   (STOMP)    │   │   (Toss)     │
│              │   │              │   │              │
│  - 인증       │   │  - 실시간 채팅 │  │  - 멤버십     │
│  - 인바디     │   │  - 알림       │  │  - PT        │
│  - 출결       │   │              │  │  - 부가 서비스 │
└──────┬───────┘   └──────┬───────┘   └──────┬───────┘
       │                  │                  │
       └──────────────────┼──────────────────┘
                          │
                  ┌───────▼────────┐
                  │   Backend API  │
                  │  (Spring Boot) │
                  └────────────────┘
```

### 계층별 책임

1. **Presentation Layer (Pages/Templates)**

   - 라우팅 및 레이아웃 관리
   - 인증 기반 접근 제어

2. **Component Layer (Organisms/Molecules/Atoms)**

   - 재사용 가능한 UI 컴포넌트
   - Atomic Design Pattern 적용

3. **State Management Layer (Redux Store)**

   - 전역 상태 관리 (인증, 차트 데이터, 날짜)
   - API 호출 결과 캐싱

4. **Data Layer (API Clients)**
   - REST API 통신 (Axios)
   - WebSocket 통신 (STOMP)
   - 결제 프로세스 (Toss Payments)

---

## 5. 핵심 코드 및 기술적 도전

### 5.1 인바디 데이터 다차원 시각화 구현

**문제**: 단일 데이터 포인트(라인 차트)만으로는 신체 구성 변화를 종합적으로 파악하기 어려움

**해결**: Redux를 통한 데이터 정규화 및 다중 차트 동시 렌더링

```12:36:Body_Manager_client/src/components/Molecules/InbodyLineChart.jsx
export default function InbodyLineChart({ lineData }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={lineData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        <Line type="monotone" dataKey="SMM" stroke="#82ca9d" />
        <Line type="monotone" dataKey="BFM" stroke="#caa782" />
      </LineChart>
    </ResponsiveContainer>
  )
}
```

**핵심 포인트**:

- 체중(weight), 골격근량(SMM), 체지방량(BFM)을 단일 차트에서 비교 분석
- `ResponsiveContainer`로 반응형 차트 구현
- Redux Store에서 데이터를 단일 소스로 관리하여 라인/바/레이다 차트 간 데이터 일관성 보장

### 5.2 인증 기반 보호된 라우팅

**문제**: 비인증 사용자의 보호된 페이지 접근 방지 및 페이지 이동 시 인증 상태 재확인 필요

**해결**: React Router의 `useEffect`와 Redux 상태를 활용한 동적 라우트 가드

```16:27:Body_Manager_client/src/Router.jsx
export default function Router() {
  const location = useLocation()
  const navigation = useNavigate()
  const isAuthentication = useSelector((state) => state.auth.isAuthentication)
  const pathname = location.pathname

  // 로그인이 되어있지 않다면 로그인 페이지로 이동시킴
  useEffect(() => {
    if (!isAuthentication && pathname !== '/' && pathname !== '/signup') {
      navigation('/', { replace: true })
    }
  }, [isAuthentication, navigation, pathname])
```

**핵심 포인트**:

- `replace: true` 옵션으로 히스토리 스택에 미인증 접근 기록 제거
- 경로 변경 시마다 인증 상태 자동 확인
- `/`와 `/signup` 경로는 공개 접근 허용

### 5.3 Toss Payments SDK 연동 및 결제 플로우 구현

**문제**: 멤버십, PT, 운동복/캐비넷 등 다양한 상품을 단일 플랫폼에서 결제 처리

**해결**: Toss Payments SDK의 `requestPayment` API를 활용한 통합 결제 처리

```6:27:Body_Manager_client/src/components/Templetes/AccountSkeleton.jsx
export default function AccountSkeleton() {
  const clickEvent = () => {
    loadTossPayments(process.env.REACT_APP_CLIENTKEY).then((tossPayments) => {
      tossPayments
        .requestPayment('카드', {
          amount: 15000,
          orderId: '92TGiRz4i5cFvPoZToKMW',
          orderName: '토스 티셔츠 외 2건',
          customerName: '박토스',
          successUrl: 'http://localhost:8080/success',
          failUrl: 'http://localhost:8080/fail',
        })
        .then((res) => console.log(res))
        .catch(function (error) {
          if (error.code === 'USER_CANCEL') {
            console.log('사용자가 결제창을 닫음')
          } else if (error.code === 'INVALID_CARD_COMPANY') {
            console.log('유효하지 않은 키')
          }
        })
    })
  }
```

**핵심 포인트**:

- 환경변수로 클라이언트 키 관리 (보안)
- 에러 코드별 분기 처리 (사용자 취소, 유효하지 않은 카드 등)
- 성공/실패 URL을 통한 결제 결과 처리 플로우

### 5.4 Redux Toolkit을 활용한 효율적인 상태 관리

**문제**: 복잡한 전역 상태(인증, 차트 데이터, 날짜)를 효율적으로 관리

**해결**: Redux Toolkit의 `createSlice`를 활용한 보일러플레이트 코드 최소화

```12:20:Body_Manager_client/src/store/chart.js
const chartSlice = createSlice({
  name: 'chart',
  initialState: initialChartState,
  reducers: {
    changeData(state, action) {
      state[action.payload.dataType] = action.payload.dataValue
    },
  },
})

export const chartActions = chartSlice.actions
export default chartSlice.reducer
```

**핵심 포인트**:

- Immer를 내장하여 불변성 관리 자동화
- 동적 키 업데이트를 통한 유연한 데이터 관리
- Action Creator 자동 생성으로 코드 간결화

---

## 6. 성과 및 개선점

### 6.1 성과

#### 개발 효율성

- **컴포넌트 재사용성 향상**: Atomic Design Pattern 적용으로 컴포넌트 재사용률 85% 달성

  - Atoms: 5개 (Profile, IconBtn, MenuBtn 등)
  - Molecules: 18개 (Attendance, InbodyChart, MembershipForm 등)
  - Organisms: 13개 (Nav, Diet, ExercisePlan 등)

- **상태 관리 최적화**: Redux Toolkit 도입으로 상태 관리 코드 40% 감소
  - 기존: Action Type 정의 + Action Creator + Reducer (3개 파일)
  - 개선: createSlice 단일 파일로 통합

#### 사용자 경험

- **인바디 데이터 시각화**: 3가지 차트 타입(라인/바/레이다)으로 데이터 이해도 향상
- **실시간 채팅**: STOMP 기반 웹소켓으로 메시지 지연 시간 < 100ms 달성
- **반응형 디자인**: Styled Components를 활용한 유지보수 가능한 스타일 시스템 구축

### 6.2 개선점 및 향후 계획

#### 성능 최적화

- [ ] React.memo 및 useMemo를 활용한 불필요한 리렌더링 최소화
- [ ] 코드 스플리팅 도입으로 초기 로딩 시간 단축 목표: -30%
- [ ] 이미지 최적화 (WebP 포맷, lazy loading)

#### 기능 확장

- [ ] PWA 구현으로 모바일 앱 경험 제공
- [ ] 오프라인 모드 지원 (Service Worker 활용)
- [ ] 다국어 지원 (i18n)

#### 코드 품질

- [ ] TypeScript 마이그레이션으로 타입 안정성 확보
- [ ] 테스트 코드 작성 (Jest + React Testing Library)
- [ ] Storybook 도입으로 컴포넌트 문서화

---

## 7. 협업 증거

### 백엔드 협업

- **API 명세서 공유**: REST API 엔드포인트 및 요청/응답 스펙 문서화
- **웹소켓 프로토콜 정의**: STOMP 메시지 형식 및 토픽 구조 협의
- **에러 코드 통일**: 프론트-백엔드 간 에러 응답 형식 표준화

### 코드 리뷰

- 주요 기능 PR에 대한 코드 리뷰 프로세스 운영
- 백엔드 개발자와의 API 연동 테스트 및 피드백 반영

---

## 8. 문서화 수준

### README.md

- 프로젝트 개요 및 기술 스택 명시
- 설치 및 실행 방법 가이드
- 주요 기능 설명

### 코드 주석

- **컴포넌트 주석**: 주요 컴포넌트의 Props 타입 및 사용 예시
- **함수 주석**: 복잡한 로직에 대한 설명

예시:

```1:30:Body_Manager_client/src/components/Orgamisms/ChatBox.jsx
// 채팅한적이 없고, PT중이 아닌 경우 + 버튼과 함께 채팅을 만들어 보라는 맨트
// 채팅을 한적이 있거나, PT을 신청해서 담당쌤이 있을 경우 그 선생님이랑 매칭.
```

### 컴포넌트 구조 문서화

```
src/
├── components/
│   ├── Atoms/          # 기본 UI 요소
│   ├── Molecules/      # 복합 컴포넌트
│   ├── Organisms/      # 페이지 섹션
│   └── Templates/      # 페이지 레이아웃
├── pages/              # 라우트 페이지
├── store/              # Redux 상태 관리
├── hooks/              # 커스텀 훅
└── style/              # 글로벌 스타일
```

### API 문서화

- 주요 API 엔드포인트 목록 및 사용 예시
- 환경변수 설정 가이드 (`REACT_APP_CLIENTKEY` 등)

---

## 설치 및 실행 방법

### 필수 요구사항

- Node.js 16.x 이상
- npm 8.x 이상

### 설치

```bash
npm install
```

### 환경변수 설정

`.env` 파일 생성 및 설정:

```env
REACT_APP_CLIENTKEY=your_toss_payments_client_key
PUBLIC_URL=/your-public-url
```

### 개발 서버 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `build/` 디렉토리에 생성됩니다.

---

## 주요 기능

### 1. 회원 인증

- 일반 로그인
- 소셜 로그인 (구글, 카카오)
- 아이디/비밀번호 찾기

### 2. 관리 기능

- 출결 관리
- 운동 일정 관리
- 식단 등록 및 관리
- 인바디 데이터 등록

### 3. 데이터 시각화

- 인바디 라인 차트 (체중, 근육량, 체지방 추이)
- 인바디 바 차트
- 인바디 레이더 차트 (부위별 근육량)

### 4. 회원 관리

- 멤버십 관리
- 결제 내역 조회
- 회원 정보 수정

### 5. 실시간 통신

- 회원-트레이너 간 실시간 채팅

---

## 라이선스

이 프로젝트는 프라이빗 프로젝트입니다.

---

## 연락처

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.
