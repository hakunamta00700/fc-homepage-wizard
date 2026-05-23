'use client';

import { STEP_LABELS } from '@/lib/types';

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function WizardProgress({ currentStep, totalSteps }: WizardProgressProps) {
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="progress-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="text-muted" style={{ fontSize: '0.8rem' }}>
          {currentStep + 1} / {totalSteps}
        </span>
        <span className="text-muted" style={{ fontSize: '0.8rem' }}>
          {Math.round(progressPercent)}%
        </span>
      </div>
      <div className="progress" style={{ height: '6px', borderRadius: '3px', backgroundColor: '#e2e8f0' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${progressPercent}%`,
            backgroundColor: '#2563eb',
            borderRadius: '3px',
            transition: 'width 0.3s ease',
          }}
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="progress-steps mt-2">
        {STEP_LABELS.map((label, index) => {
          let className = 'progress-step-label';
          if (index === currentStep) className += ' active';
          else if (index < currentStep) className += ' completed';
          return (
            <div key={index} className={className} style={{ fontSize: '0.65rem' }}>
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
