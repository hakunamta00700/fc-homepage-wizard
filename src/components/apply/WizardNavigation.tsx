'use client';

interface WizardNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
  isLastStep?: boolean;
  isSubmitting?: boolean;
}

export default function WizardNavigation({
  currentStep,
  onPrevious,
  onNext,
  isNextDisabled = false,
  isLastStep = false,
  isSubmitting = false,
}: WizardNavigationProps) {
  const isFirstStep = currentStep === 0;

  return (
    <div className="wizard-navigation">
      <div>
        {!isFirstStep && (
          <button
            type="button"
            className="btn-apply-outline"
            onClick={onPrevious}
            disabled={isSubmitting}
          >
            이전
          </button>
        )}
      </div>
      <div>
        <button
          type="button"
          className="btn-apply-primary"
          onClick={onNext}
          disabled={isNextDisabled || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" />
              제출 중...
            </>
          ) : isLastStep ? (
            '제출하기'
          ) : (
            '다음'
          )}
        </button>
      </div>
    </div>
  );
}
