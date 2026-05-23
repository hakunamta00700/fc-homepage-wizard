# FC Homepage Wizard

유소년 축구 클럽 홈페이지 제작 신청서 Wizard

## 기술 스택

- **Next.js 16** (App Router)
- **TypeScript**
- **Bootstrap 5** (UI)
- **React Hook Form** + **Zod** (폼 관리 및 검증)
- **Airtable API** (데이터 저장)

## 시작하기

```bash
# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env.local
# .env.local 파일에 Airtable API 키와 Base ID 입력

# 개발 서버 실행
npm run dev
```

## 페이지 경로

| 경로 | 설명 |
|------|------|
| `/apply/youth-football-homepage` | 홈페이지 제작 신청서 Wizard |

## API 엔드포인트

| 경로 | 메서드 | 설명 |
|------|--------|------|
| `/api/youth-club-homepage-applications` | POST | Airtable에 신청서 데이터 제출 |

## 환경변수

| 변수명 | 설명 | 필수 |
|--------|------|------|
| `AIRTABLE_API_KEY` | Airtable API 키 | 예 |
| `AIRTABLE_BASE_ID` | Airtable Base ID | 예 |
| `AIRTABLE_TABLE_NAME` | Airtable 테이블명 (기본값: YouthClub_Homepage_Inputs) | 아니오 |

## Wizard 단계

| 단계 | 제목 | 주요 필드 |
|------|------|----------|
| 1 | 기본 클럽 정보 | 클럽명, 영문명, 스타일, 색상 |
| 2 | 메인 화면 정보 | Hero 타이틀, 설명, 이미지 |
| 3 | 클럽 소개 | 클럽 설명, 철학, 안전 정책 |
| 4 | 연락처 및 위치 | 연락처, 주소, SNS 링크 |
| 5 | 코치 소개 | 코치 정보 (최대 3명) |
| 6 | 수업반 안내 | 수업반 정보 (최대 5개) |
| 7 | 커리큘럼 및 성장관리 | 훈련 커리큘럼, 성장 리포트 |
| 8 | 시설 및 환경 | 시설, 주차, 실내/샤워 여부 |
| 9 | 갤러리 및 영상 | 이미지, 영상 링크 |
| 10 | 학부모 후기 | 후기 (최대 5개) |
| 11 | 체험수업 및 상담 | 체험수업, 상담 시간, 지도 |
| 12 | 검색 노출 설정 | SEO 정보 |
| 13 | 최종 확인 | 입력 내용 요약 및 제출 |

## Airtable 테이블 구조

단일 테이블 `YouthClub_Homepage_Inputs`에 모든 데이터가 저장됩니다.
반복 입력 필드 (코치, 수업반, 후기)는 제출 시 Flat하게 변환됩니다.

### 필드 네이밍 규칙

- 코치: `coach_1_name`, `coach_1_role`, ..., `coach_3_intro`
- 수업반: `class_1_name`, `class_1_age_group`, ..., `class_5_status`
- 후기: `review_1_text`, `review_1_parent_name`, ..., `review_5_child_age`

## 프로젝트 구조

```
src/
├── app/
│   ├── api/youth-club-homepage-applications/
│   │   └── route.ts          # Airtable 제출 API
│   ├── apply/youth-football-homepage/
│   │   └── page.tsx          # Wizard 메인 페이지
│   ├── globals.css            # 전역 스타일 (Bootstrap + 커스텀)
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── apply/
│       ├── WizardLayout.tsx       # Wizard 레이아웃
│       ├── WizardProgress.tsx     # 진행률 표시
│       ├── WizardNavigation.tsx   # 이전/다음 버튼
│       ├── StepBasicInfo.tsx      # 1단계
│       ├── StepHero.tsx           # 2단계
│       ├── StepClubIntro.tsx      # 3단계
│       ├── StepContact.tsx        # 4단계
│       ├── StepCoaches.tsx        # 5단계
│       ├── StepClasses.tsx        # 6단계
│       ├── StepCurriculum.tsx     # 7단계
│       ├── StepFacilities.tsx     # 8단계
│       ├── StepGallery.tsx        # 9단계
│       ├── StepReviews.tsx        # 10단계
│       ├── StepTrialContact.tsx   # 11단계
│       ├── StepSEO.tsx            # 12단계
│       └── StepReviewSubmit.tsx   # 13단계
└── lib/
    ├── types.ts               # TypeScript 타입 정의
    ├── schema.ts              # Zod 스키마
    └── flatten.ts             # 데이터 Flatten 유틸리티
```

