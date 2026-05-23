'use client';

import { Class, CLASS_STATUS_OPTIONS } from '@/lib/types';
import type { StepProps } from './types';

const errorStyle = { fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' };

export default function StepClasses({ register, errors, watch, setValue }: StepProps) {
  const classes = watch('classes') || [];

  const addClass = () => {
    if (classes.length >= 5) return;
    setValue('classes', [...classes, { name: '', age_group: '', day: '', time: '', location: '', fee: '', status: '모집중' as const }], { shouldValidate: false });
  };

  const removeClass = (index: number) => {
    const updated = classes.filter((_, i) => i !== index);
    setValue('classes', updated, { shouldValidate: true });
  };

  return (
    <div>
      <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
        운영 중인 수업반 정보를 입력해주세요. 최대 5개까지 등록 가능합니다.
      </p>

      {classes.map((_: Class, index: number) => (
        <div key={index} className="class-entry mb-4">
          <div className="entry-header">
            <span className="entry-title">수업반 {index + 1}</span>
            <button
              type="button"
              className="btn-apply-danger-outline"
              onClick={() => removeClass(index)}
            >
              삭제
            </button>
          </div>

          <div className="mb-3">
            <label className="form-label">수업반 이름</label>
            <input
              type="text"
              className={`form-control${errors.classes?.[index]?.name ? ' is-invalid' : ''}`}
              {...register(`classes.${index}.name`)}
              placeholder="수업반 이름을 입력해주세요."
            />
            {errors.classes?.[index]?.name && (
              <div style={errorStyle}>{errors.classes[index].name.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">연령대</label>
            <input
              type="text"
              className={`form-control${errors.classes?.[index]?.age_group ? ' is-invalid' : ''}`}
              {...register(`classes.${index}.age_group`)}
              placeholder="만 5~7세"
            />
            {errors.classes?.[index]?.age_group && (
              <div style={errorStyle}>{errors.classes[index].age_group.message}</div>
            )}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">요일</label>
              <input
                type="text"
                className={`form-control${errors.classes?.[index]?.day ? ' is-invalid' : ''}`}
                {...register(`classes.${index}.day`)}
                placeholder="수업 요일을 입력해주세요."
              />
              {errors.classes?.[index]?.day && (
                <div style={errorStyle}>{errors.classes[index].day.message}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">시간</label>
              <input
                type="text"
                className={`form-control${errors.classes?.[index]?.time ? ' is-invalid' : ''}`}
                {...register(`classes.${index}.time`)}
                placeholder="오후 4:00 ~ 5:30"
              />
              {errors.classes?.[index]?.time && (
                <div style={errorStyle}>{errors.classes[index].time.message}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">장소</label>
            <input
              type="text"
              className={`form-control${errors.classes?.[index]?.location ? ' is-invalid' : ''}`}
              {...register(`classes.${index}.location`)}
              placeholder="수업 장소를 입력해주세요."
            />
            {errors.classes?.[index]?.location && (
              <div style={errorStyle}>{errors.classes[index].location.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">수업료</label>
            <input
              type="text"
              className={`form-control${errors.classes?.[index]?.fee ? ' is-invalid' : ''}`}
              {...register(`classes.${index}.fee`)}
              placeholder="월 00만원"
            />
            {errors.classes?.[index]?.fee && (
              <div style={errorStyle}>{errors.classes[index].fee.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">모집 상태</label>
            <select
              className={`form-select${errors.classes?.[index]?.status ? ' is-invalid' : ''}`}
              {...register(`classes.${index}.status`)}
            >
              {CLASS_STATUS_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.classes?.[index]?.status && (
              <div style={errorStyle}>{errors.classes[index].status.message}</div>
            )}
          </div>
        </div>
      ))}

      <div className="text-center">
        <button
          type="button"
          className="add-button"
          onClick={addClass}
          disabled={classes.length >= 5}
        >
          + 수업반 추가
        </button>
        {classes.length >= 5 && (
          <p className="text-muted mt-2" style={{ fontSize: '0.85rem' }}>
            최대 5개까지 등록 가능합니다
          </p>
        )}
      </div>
    </div>
  );
}
