'use client';

import type { StepProps } from './types';

const errorStyle = { fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' };

export default function StepTrialContact({ register, errors }: StepProps) {
  return (
    <div>
      <div className="form-check form-switch mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          {...register('trial_available')}
        />
        <label className="form-check-label">체험수업이 가능한가요?</label>
      </div>

      <div className="mb-3">
        <label className="form-label">상담 가능한 시간을 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.consultation_hours ? ' is-invalid' : ''}`}
          {...register('consultation_hours')}
          placeholder="평일 오전 10시 ~ 오후 6시"
        />
        {errors.consultation_hours && (
          <div style={errorStyle}>{errors.consultation_hours.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">문의 버튼에 표시될 문구를 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.contact_button_text ? ' is-invalid' : ''}`}
          {...register('contact_button_text')}
          placeholder="문의하기"
        />
        {errors.contact_button_text && (
          <div style={errorStyle}>{errors.contact_button_text.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">카카오 문의 버튼 문구를 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.kakao_button_text ? ' is-invalid' : ''}`}
          {...register('kakao_button_text')}
          placeholder="카카오톡 문의"
        />
        {errors.kakao_button_text && (
          <div style={errorStyle}>{errors.kakao_button_text.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">체험수업 신청 버튼 문구를 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.trial_request_button_text ? ' is-invalid' : ''}`}
          {...register('trial_request_button_text')}
          placeholder="체험수업 신청하기"
        />
        {errors.trial_request_button_text && (
          <div style={errorStyle}>{errors.trial_request_button_text.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">네이버 지도 또는 카카오맵 Embed URL을 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.map_embed_url ? ' is-invalid' : ''}`}
          {...register('map_embed_url')}
        />
        {errors.map_embed_url && (
          <div style={errorStyle}>{errors.map_embed_url.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">주차 관련 안내사항이 있다면 적어주세요.</label>
        <textarea
          rows={3}
          className={`form-control${errors.parking_description ? ' is-invalid' : ''}`}
          {...register('parking_description')}
        />
        {errors.parking_description && (
          <div style={errorStyle}>{errors.parking_description.message as string}</div>
        )}
      </div>
    </div>
  );
}
