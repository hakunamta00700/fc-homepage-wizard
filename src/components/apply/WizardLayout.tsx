'use client';

import { ReactNode } from 'react';
import WizardProgress from './WizardProgress';
import WizardNavigation from './WizardNavigation';

interface WizardLayoutProps {
  currentStep: number;
  totalSteps: number;
  children: ReactNode;
  title: string;
  subtitle?: string;
  onPrevious: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
  isLastStep?: boolean;
  isSubmitting?: boolean;
}

export default function WizardLayout({
  currentStep,
  totalSteps,
  children,
  title,
  subtitle,
  onPrevious,
  onNext,
  isNextDisabled = false,
  isLastStep = false,
  isSubmitting = false,
}: WizardLayoutProps) {
  return (
    <div className="apply-container">
      <div className="text-center mb-4">
        <h1 className="apply-title">홈페이지 제작 신청서</h1>
        <p className="apply-subtitle">유소년 축구 클럽 홈페이지를 제작하기 위해 필요한 정보를 입력해주세요.</p>
      </div>

      <WizardProgress currentStep={currentStep} totalSteps={totalSteps} />

      <div className="apply-card">
        <h2 className="h5 fw-bold mb-1">{title}</h2>
        {subtitle && <p className="apply-subtitle">{subtitle}</p>}

        {children}

        <WizardNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          onPrevious={onPrevious}
          onNext={onNext}
          isNextDisabled={isNextDisabled}
          isLastStep={isLastStep}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}
