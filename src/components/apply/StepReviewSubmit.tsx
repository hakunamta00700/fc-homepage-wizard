'use client';

import { TEMPLATE_OPTIONS, STEP_LABELS, ApplicationFormData, Coach, Class, Review } from '@/lib/types';

interface StepReviewSubmitProps {
  register: any;
  errors: any;
  watch: any;
  setValue: any;
  control: any;
  onEditStep?: (step: number) => void;
}

const errorStyle = { fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' };
const helperTextStyle = { fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' };

function formatValue(value: unknown): string {
  if (typeof value === 'boolean') {
    return value ? '예' : '아니오';
  }
  return String(value ?? '');
}

function ReviewRow({ label, value }: { label: string; value: unknown }) {
  const display = formatValue(value);
  return (
    <div className="review-summary-row">
      <span className="review-summary-row-label">{label}</span>
      <span className={`review-summary-row-value${!display ? ' empty' : ''}`}>
        {display || '입력하지 않음'}
      </span>
    </div>
  );
}

function ReviewSection({ title, stepIndex, children, onEditStep }: {
  title: string;
  stepIndex: number;
  children: React.ReactNode;
  onEditStep?: (step: number) => void;
}) {
  return (
    <div className="review-summary-section">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="review-summary-label">{title}</div>
        <span className="edit-link" onClick={() => onEditStep?.(stepIndex)}>수정</span>
      </div>
      {children}
    </div>
  );
}

const BOOLEAN_FIELDS: { field: keyof ApplicationFormData; label: string }[] = [
  { field: 'parking_available', label: '주차 가능' },
  { field: 'indoor_available', label: '실내 수업 가능' },
  { field: 'shower_available', label: '샤워 시설' },
  { field: 'waiting_space_available', label: '학부모 대기 공간' },
  { field: 'cctv_available', label: 'CCTV 설치' },
];

export default function StepReviewSubmit({ watch, onEditStep }: StepReviewSubmitProps) {
  const d = watch() as ApplicationFormData;

  const getTemplateLabel = (value: string) => {
    const opt = TEMPLATE_OPTIONS.find(o => o.value === value);
    return opt ? opt.label : value;
  };

  return (
    <div>
      <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
        입력하신 모든 내용을 확인해주세요. 수정이 필요한 경우 각 섹션의 수정 버튼을 클릭해주세요.
      </p>

      <ReviewSection title={STEP_LABELS[0]} stepIndex={0} onEditStep={onEditStep}>
        <ReviewRow label="클럽명" value={d.club_name} />
        <ReviewRow label="클럽명 (영문)" value={d.club_name_en} />
        <ReviewRow label="홈페이지 주소" value={d.website_slug} />
        <ReviewRow label="템플릿 타입" value={getTemplateLabel(d.template_type)} />
        <ReviewRow label="메인 컬러" value={d.main_color} />
        <ReviewRow label="서브 컬러" value={d.sub_color} />
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[1]} stepIndex={1} onEditStep={onEditStep}>
        <ReviewRow label="타이틀" value={d.hero_title} />
        <ReviewRow label="서브타이틀" value={d.hero_subtitle} />
        <ReviewRow label="설명" value={d.hero_description} />
        <ReviewRow label="메인 이미지 1" value={d.hero_image_1} />
        <ReviewRow label="메인 이미지 2" value={d.hero_image_2} />
        <ReviewRow label="메인 이미지 3" value={d.hero_image_3} />
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[2]} stepIndex={2} onEditStep={onEditStep}>
        <ReviewRow label="한줄 소개" value={d.short_description} />
        <ReviewRow label="상세 소개" value={d.full_description} />
        <ReviewRow label="클럽 철학" value={d.club_philosophy} />
        <ReviewRow label="교육 철학" value={d.education_philosophy} />
        <ReviewRow label="학부모님께 드리는 말씀" value={d.parent_message} />
        <ReviewRow label="안전 정책" value={d.safety_policy} />
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[3]} stepIndex={3} onEditStep={onEditStep}>
        <ReviewRow label="대표자명" value={d.representative_name} />
        <ReviewRow label="연락처" value={d.phone} />
        <ReviewRow label="이메일" value={d.email} />
        <ReviewRow label="주소" value={d.address} />
        <ReviewRow label="지역" value={d.region} />
        <ReviewRow label="카카오톡 채널 URL" value={d.kakao_channel_url} />
        <ReviewRow label="인스타그램 URL" value={d.instagram_url} />
        <ReviewRow label="블로그 URL" value={d.blog_url} />
        <ReviewRow label="유튜브 URL" value={d.youtube_url} />
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[4]} stepIndex={4} onEditStep={onEditStep}>
        {d.coaches && d.coaches.length > 0 ? (
          d.coaches.map((coach: Coach, i: number) => (
            coach.name || coach.role || coach.career || coach.license || coach.intro ? (
              <div key={i} style={{ marginBottom: '0.75rem' }}>
                <div className="review-summary-row">
                  <span className="review-summary-row-label">코치 {i + 1}</span>
                </div>
                <div style={{ paddingLeft: '1rem' }}>
                  <ReviewRow label="이름" value={coach.name} />
                  <ReviewRow label="직책" value={coach.role} />
                  <ReviewRow label="경력" value={coach.career} />
                  <ReviewRow label="자격증" value={coach.license} />
                  <ReviewRow label="소개" value={coach.intro} />
                </div>
              </div>
            ) : null
          ))
        ) : (
          <div className="empty" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
            등록된 코치 정보가 없습니다.
          </div>
        )}
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[5]} stepIndex={5} onEditStep={onEditStep}>
        {d.classes && d.classes.length > 0 ? (
          d.classes.map((cls: Class, i: number) => (
            cls.name || cls.age_group || cls.day || cls.time || cls.location || cls.fee || cls.status ? (
              <div key={i} style={{ marginBottom: '0.75rem' }}>
                <div className="review-summary-row">
                  <span className="review-summary-row-label">수업 {i + 1}</span>
                </div>
                <div style={{ paddingLeft: '1rem' }}>
                  <ReviewRow label="수업명" value={cls.name} />
                  <ReviewRow label="연령" value={cls.age_group} />
                  <ReviewRow label="요일" value={cls.day} />
                  <ReviewRow label="시간" value={cls.time} />
                  <ReviewRow label="장소" value={cls.location} />
                  <ReviewRow label="수강료" value={cls.fee} />
                  <ReviewRow label="모집 상태" value={cls.status} />
                </div>
              </div>
            ) : null
          ))
        ) : (
          <div className="empty" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
            등록된 수업 정보가 없습니다.
          </div>
        )}
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[6]} stepIndex={6} onEditStep={onEditStep}>
        <ReviewRow label="커리큘럼 요약" value={d.curriculum_summary} />
        <ReviewRow label="만 5-7세 커리큘럼" value={d.age_5_7_curriculum} />
        <ReviewRow label="만 8-10세 커리큘럼" value={d.age_8_10_curriculum} />
        <ReviewRow label="만 11-13세 커리큘럼" value={d.age_11_13_curriculum} />
        <ReviewRow label="성장 리포트 제공" value={d.growth_report_enabled} />
        <ReviewRow label="성장 리포트 설명" value={d.growth_report_description} />
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[7]} stepIndex={7} onEditStep={onEditStep}>
        <ReviewRow label="시설 설명" value={d.facility_description} />
        {BOOLEAN_FIELDS.map(bf => (
          <ReviewRow key={bf.field} label={bf.label} value={d[bf.field]} />
        ))}
        <ReviewRow label="우천 시 수업 정책" value={d.rainy_day_policy} />
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[8]} stepIndex={8} onEditStep={onEditStep}>
        <ReviewRow label="갤러리 이미지" value={d.gallery_images} />
        <ReviewRow label="영상 URL 1" value={d.gallery_video_url_1} />
        <ReviewRow label="영상 URL 2" value={d.gallery_video_url_2} />
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[9]} stepIndex={9} onEditStep={onEditStep}>
        {d.reviews && d.reviews.length > 0 ? (
          d.reviews.map((review: Review, i: number) => (
            review.text || review.parent_name || review.child_age ? (
              <div key={i} style={{ marginBottom: '0.75rem' }}>
                <div className="review-summary-row">
                  <span className="review-summary-row-label">후기 {i + 1}</span>
                </div>
                <div style={{ paddingLeft: '1rem' }}>
                  <ReviewRow label="내용" value={review.text} />
                  <ReviewRow label="학부모명" value={review.parent_name} />
                  <ReviewRow label="자녀 연령" value={review.child_age} />
                </div>
              </div>
            ) : null
          ))
        ) : (
          <div className="empty" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
            등록된 후기 정보가 없습니다.
          </div>
        )}
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[10]} stepIndex={10} onEditStep={onEditStep}>
        <ReviewRow label="체험수업 가능" value={d.trial_available} />
        <ReviewRow label="상담 가능 시간" value={d.consultation_hours} />
        <ReviewRow label="문의 버튼 문구" value={d.contact_button_text} />
        <ReviewRow label="카카오 문구" value={d.kakao_button_text} />
        <ReviewRow label="체험수업 신청 문구" value={d.trial_request_button_text} />
        <ReviewRow label="지도 Embed URL" value={d.map_embed_url} />
        <ReviewRow label="주차 안내" value={d.parking_description} />
      </ReviewSection>

      <ReviewSection title={STEP_LABELS[11]} stepIndex={11} onEditStep={onEditStep}>
        <ReviewRow label="SEO 제목" value={d.seo_title} />
        <ReviewRow label="SEO 설명" value={d.seo_description} />
        <ReviewRow label="지역 키워드" value={d.region_keyword} />
        <ReviewRow label="대표 키워드" value={d.primary_keyword} />
        <ReviewRow label="추가 키워드" value={d.keywords} />
        <ReviewRow label="OG 이미지" value={d.og_image} />
      </ReviewSection>
    </div>
  );
}
