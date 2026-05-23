'use client';

import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { applicationSchema } from '@/lib/schema';
import { flattenApplicationData } from '@/lib/flatten';
import { ApplicationFormData, STEP_LABELS, REQUIRED_FIELDS } from '@/lib/types';
import WizardLayout from '@/components/apply/WizardLayout';
import StepBasicInfo from '@/components/apply/StepBasicInfo';
import StepHero from '@/components/apply/StepHero';
import StepClubIntro from '@/components/apply/StepClubIntro';
import StepContact from '@/components/apply/StepContact';
import StepCoaches from '@/components/apply/StepCoaches';
import StepClasses from '@/components/apply/StepClasses';
import StepCurriculum from '@/components/apply/StepCurriculum';
import StepFacilities from '@/components/apply/StepFacilities';
import StepGallery from '@/components/apply/StepGallery';
import StepReviews from '@/components/apply/StepReviews';
import StepTrialContact from '@/components/apply/StepTrialContact';
import StepSEO from '@/components/apply/StepSEO';
import StepReviewSubmit from '@/components/apply/StepReviewSubmit';

const TOTAL_STEPS = 13;

const defaultValues: ApplicationFormData = {
  club_name: '',
  club_name_en: '',
  website_slug: '',
  template_type: '',
  logo: '',
  main_color: '#2563eb',
  sub_color: '#10b981',
  hero_title: '',
  hero_subtitle: '',
  hero_description: '',
  hero_image_1: '',
  hero_image_2: '',
  hero_image_3: '',
  short_description: '',
  full_description: '',
  club_philosophy: '',
  education_philosophy: '',
  parent_message: '',
  safety_policy: '',
  representative_name: '',
  phone: '',
  email: '',
  address: '',
  region: '',
  kakao_channel_url: '',
  instagram_url: '',
  blog_url: '',
  youtube_url: '',
  coaches: [],
  classes: [],
  curriculum_summary: '',
  age_5_7_curriculum: '',
  age_8_10_curriculum: '',
  age_11_13_curriculum: '',
  growth_report_enabled: '',
  growth_report_description: '',
  facility_description: '',
  parking_available: false,
  indoor_available: false,
  shower_available: false,
  waiting_space_available: false,
  cctv_available: false,
  rainy_day_policy: '',
  gallery_images: '',
  gallery_video_url_1: '',
  gallery_video_url_2: '',
  reviews: [],
  trial_available: false,
  consultation_hours: '',
  contact_button_text: '',
  kakao_button_text: '',
  trial_request_button_text: '',
  map_embed_url: '',
  parking_description: '',
  seo_title: '',
  seo_description: '',
  region_keyword: '',
  primary_keyword: '',
  keywords: '',
  og_image: '',
};

const stepFields: Record<number, (keyof ApplicationFormData)[]> = {
  0: ['club_name', 'website_slug', 'template_type'],
  1: ['hero_title'],
  2: [],
  3: ['representative_name', 'phone', 'address'],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
};

const stepTitles: string[] = [
  '기본 클럽 정보',
  '메인 화면 정보',
  '클럽 소개',
  '연락처 및 위치',
  '코치 소개',
  '수업반 안내',
  '커리큘럼 및 성장관리',
  '시설 및 환경',
  '갤러리 및 영상',
  '학부모 후기',
  '체험수업 및 상담',
  '검색 노출 설정',
  '최종 확인',
];

const stepSubtitles: string[] = [
  '클럽의 기본 정보를 입력해주세요.',
  '홈페이지 메인 화면에 표시될 내용을 입력해주세요.',
  '클럽을 소개하는 상세 내용을 입력해주세요.',
  '학부모님들이 연락할 수 있는 정보를 입력해주세요.',
  '클럽에서 활동 중인 코치님들을 소개해주세요.',
  '운영 중인 수업반 정보를 입력해주세요.',
  '훈련 커리큘럼과 성장 관리 시스템을 소개해주세요.',
  '훈련 시설과 환경에 대해 알려주세요.',
  '갤러리와 영상 자료를 등록해주세요.',
  '학부모님들의 후기를 입력해주세요.',
  '체험수업 및 상담 관련 정보를 입력해주세요.',
  '검색 노출을 위한 정보를 입력해주세요.',
  '입력하신 내용을 확인해주세요.',
];

export default function YouthFootballHomepageApplyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    trigger,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const formData = watch();

  const validateStep = useCallback(
    async (step: number): Promise<boolean> => {
      const fields = stepFields[step];
      if (fields.length === 0) return true;
      const result = await trigger(fields);
      return result;
    },
    [trigger]
  );

  const goToNextStep = useCallback(async () => {
    if (currentStep === TOTAL_STEPS - 1) {
      handleSubmit(onSubmit)();
      return;
    }

    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
    }
  }, [currentStep, validateStep, handleSubmit]);

  const goToPreviousStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleEditStep = useCallback((step: number) => {
    setCurrentStep(step);
  }, []);

  const onSubmit = useCallback(
    async (data: ApplicationFormData) => {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const flattened = flattenApplicationData(data);
        const response = await fetch('/api/youth-club-homepage-applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(flattened),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || '제출 중 오류가 발생했습니다.');
        }

        setIsSubmitted(true);
      } catch (error) {
        setSubmitError(
          error instanceof Error ? error.message : '제출 중 오류가 발생했습니다.'
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    []
  );

  if (isSubmitted) {
    return (
      <div className="apply-container">
        <div className="apply-card">
          <div className="complete-page">
            <div className="complete-icon">&#10003;</div>
            <h2 className="complete-title">홈페이지 제작 신청이 완료되었습니다.</h2>
            <p className="complete-description">
              입력해주신 내용을 바탕으로 홈페이지 시안을 준비하겠습니다.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    const commonProps = { register, errors, watch, setValue, control };

    switch (currentStep) {
      case 0: return <StepBasicInfo {...commonProps} />;
      case 1: return <StepHero {...commonProps} />;
      case 2: return <StepClubIntro {...commonProps} />;
      case 3: return <StepContact {...commonProps} />;
      case 4: return <StepCoaches {...commonProps} />;
      case 5: return <StepClasses {...commonProps} />;
      case 6: return <StepCurriculum {...commonProps} />;
      case 7: return <StepFacilities {...commonProps} />;
      case 8: return <StepGallery {...commonProps} />;
      case 9: return <StepReviews {...commonProps} />;
      case 10: return <StepTrialContact {...commonProps} />;
      case 11: return <StepSEO {...commonProps} />;
      case 12: return <StepReviewSubmit {...commonProps} onEditStep={handleEditStep} />;
      default: return null;
    }
  };

  return (
    <WizardLayout
      currentStep={currentStep}
      totalSteps={TOTAL_STEPS}
      title={stepTitles[currentStep]}
      subtitle={stepSubtitles[currentStep]}
      onPrevious={goToPreviousStep}
      onNext={goToNextStep}
      isLastStep={currentStep === TOTAL_STEPS - 1}
      isSubmitting={isSubmitting}
    >
      {submitError && (
        <div className="alert alert-danger" role="alert" style={{ fontSize: '0.9rem' }}>
          {submitError}
        </div>
      )}
      {renderStep()}
    </WizardLayout>
  );
}
