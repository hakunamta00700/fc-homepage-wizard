'use client';

interface StepProps {
  register: any;
  errors: any;
  watch: any;
  setValue: any;
  control: any;
}

const errorStyle = { fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' };
const helperTextStyle = { fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' };

export default function StepFacilities({ register, errors }: StepProps) {
  return (
    <div>
      <div className="mb-4">
        <label className="form-label">훈련 시설을 소개해주세요.</label>
        <textarea
          className={`form-control${errors.facility_description ? ' is-invalid' : ''}`}
          rows={4}
          {...register('facility_description')}
        />
        {errors.facility_description && (
          <div style={errorStyle}>{errors.facility_description.message as string}</div>
        )}
      </div>

      <div className="mb-4">
        <label className="form-label fw-bold">시설 현황</label>
        {[
          { field: 'parking_available', label: '주차가 가능한가요?' },
          { field: 'indoor_available', label: '실내 수업이 가능한가요?' },
          { field: 'shower_available', label: '샤워 시설이 있나요?' },
          { field: 'waiting_space_available', label: '학부모 대기 공간이 있나요?' },
          { field: 'cctv_available', label: 'CCTV가 설치되어 있나요?' },
        ].map(({ field, label }) => (
          <div className="form-check form-switch mb-3" key={field}>
            <input
              className="form-check-input"
              type="checkbox"
              {...register(field)}
            />
            <label className="form-check-label">{label}</label>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">우천 시 수업은 어떻게 진행되나요?</label>
        <textarea
          className={`form-control${errors.rainy_day_policy ? ' is-invalid' : ''}`}
          rows={3}
          {...register('rainy_day_policy')}
        />
        {errors.rainy_day_policy && (
          <div style={errorStyle}>{errors.rainy_day_policy.message as string}</div>
        )}
      </div>
    </div>
  );
}
