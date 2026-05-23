'use client';

import { TEMPLATE_OPTIONS } from '@/lib/types';

interface StepProps {
  register: any;
  errors: any;
  watch: any;
  setValue: any;
  control: any;
}

export default function StepBasicInfo({ register, errors, watch }: StepProps) {
  const mainColor = watch('main_color') || '#2563eb';
  const subColor = watch('sub_color') || '#10b981';

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">클럽 이름을 입력해주세요.</label>
        <input
          type="text"
          className={`form-control ${errors.club_name ? 'is-invalid' : ''}`}
          placeholder="예: FC 드림즈"
          {...register('club_name')}
        />
        {errors.club_name && (
          <div style={{ fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' }}>
            {errors.club_name.message as string}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">영문 클럽명이 있다면 입력해주세요.</label>
        <input
          type="text"
          className={`form-control ${errors.club_name_en ? 'is-invalid' : ''}`}
          placeholder="FC Dreams"
          {...register('club_name_en')}
        />
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          영문 클럽명이 없으면 비워두셔도 됩니다.
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">홈페이지 주소에 사용할 영문 이름을 입력해주세요.</label>
        <div className="input-group">
          <span className="input-group-text" style={{ borderRadius: '10px 0 0 10px', fontSize: '0.85rem' }}>
            youthfootball.kr/
          </span>
          <input
            type="text"
            className={`form-control ${errors.website_slug ? 'is-invalid' : ''}`}
            placeholder="fc-dreams"
            style={{ borderRadius: '0 10px 10px 0' }}
            {...register('website_slug')}
          />
        </div>
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          영문 소문자, 숫자, 하이픈(-)만 사용 가능합니다.
        </div>
        {errors.website_slug && (
          <div style={{ fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' }}>
            {errors.website_slug.message as string}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">원하는 홈페이지 스타일을 선택해주세요.</label>
        <select
          className={`form-select ${errors.template_type ? 'is-invalid' : ''}`}
          {...register('template_type')}
        >
          <option value="">스타일을 선택해주세요</option>
          {TEMPLATE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          선택한 스타일에 따라 홈페이지 구성이 달라집니다.
        </div>
        {errors.template_type && (
          <div style={{ fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' }}>
            {errors.template_type.message as string}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">클럽 로고를 업로드해주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="파일 URL을 입력해주세요"
          {...register('logo')}
        />
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          로고 이미지 URL을 입력하거나 업로드 기능은 추후 구현됩니다.
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">홈페이지 대표 색상을 선택해주세요.</label>
        <div className="d-flex align-items-center gap-2">
          <input
            type="color"
            className="form-control form-control-color"
            style={{ width: '60px', height: '40px', padding: '2px' }}
            {...register('main_color')}
          />
          <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{mainColor}</span>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">보조 색상을 선택해주세요.</label>
        <div className="d-flex align-items-center gap-2">
          <input
            type="color"
            className="form-control form-control-color"
            style={{ width: '60px', height: '40px', padding: '2px' }}
            {...register('sub_color')}
          />
          <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{subColor}</span>
        </div>
      </div>
    </div>
  );
}
