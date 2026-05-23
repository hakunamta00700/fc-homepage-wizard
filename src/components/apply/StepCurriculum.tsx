'use client';

import { GrowthReportEnabled, GROWTH_REPORT_OPTIONS } from '@/lib/types';

interface StepProps {
  register: any;
  errors: any;
  watch: any;
  setValue: any;
  control: any;
}

const errorStyle = { fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' };
const helperTextStyle = { fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' };

export default function StepCurriculum({ register, errors, watch, setValue, control }: StepProps) {
  const growthReportEnabled = watch('growth_report_enabled');

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">훈련 특징</label>
        <textarea
          rows={4}
          className={`form-control${errors.curriculum_summary ? ' is-invalid' : ''}`}
          {...register('curriculum_summary')}
          placeholder="우리 클럽의 훈련 특징을 소개해주세요."
        />
        {errors.curriculum_summary && (
          <div style={errorStyle}>{errors.curriculum_summary.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">5~7세 커리큘럼</label>
        <textarea
          rows={4}
          className={`form-control${errors.age_5_7_curriculum ? ' is-invalid' : ''}`}
          {...register('age_5_7_curriculum')}
          placeholder="5~7세 아이들에게 어떤 훈련을 진행하시나요?"
        />
        {errors.age_5_7_curriculum && (
          <div style={errorStyle}>{errors.age_5_7_curriculum.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">8~10세 커리큘럼</label>
        <textarea
          rows={4}
          className={`form-control${errors.age_8_10_curriculum ? ' is-invalid' : ''}`}
          {...register('age_8_10_curriculum')}
          placeholder="8~10세 아이들에게 어떤 훈련을 진행하시나요?"
        />
        {errors.age_8_10_curriculum && (
          <div style={errorStyle}>{errors.age_8_10_curriculum.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">11~13세 커리큘럼</label>
        <textarea
          rows={4}
          className={`form-control${errors.age_11_13_curriculum ? ' is-invalid' : ''}`}
          {...register('age_11_13_curriculum')}
          placeholder="11~13세 아이들에게 어떤 훈련을 진행하시나요?"
        />
        {errors.age_11_13_curriculum && (
          <div style={errorStyle}>{errors.age_11_13_curriculum.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">성장 리포트 제공 여부</label>
        <div>
          {GROWTH_REPORT_OPTIONS.map((opt) => (
            <div key={opt} className="form-check">
              <input
                type="radio"
                id={`growth_report_${opt}`}
                className="form-check-input"
                value={opt}
                {...register('growth_report_enabled')}
              />
              <label className="form-check-label" htmlFor={`growth_report_${opt}`}>
                {opt}
              </label>
            </div>
          ))}
        </div>
        {errors.growth_report_enabled && (
          <div style={errorStyle}>{errors.growth_report_enabled.message}</div>
        )}
      </div>

      {(growthReportEnabled === '제공함' || growthReportEnabled === '준비중') && (
        <div className="mb-3">
          <label className="form-label">성장 리포트 소개</label>
          <textarea
            rows={3}
            className={`form-control${errors.growth_report_description ? ' is-invalid' : ''}`}
            {...register('growth_report_description')}
            placeholder="성장 리포트 또는 피드백 시스템을 소개해주세요."
          />
          {errors.growth_report_description && (
            <div style={errorStyle}>{errors.growth_report_description.message}</div>
          )}
        </div>
      )}
    </div>
  );
}
