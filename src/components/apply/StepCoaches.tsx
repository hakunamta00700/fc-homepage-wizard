'use client';

import { useCallback } from 'react';
import { Coach } from '@/lib/types';

interface StepProps {
  register: any;
  errors: any;
  watch: any;
  setValue: any;
  control: any;
}

const errorStyle = { fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' };
const helperTextStyle = { fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' };

export default function StepCoaches({ register, errors, watch, setValue, control }: StepProps) {
  const coaches = watch('coaches') || [];

  const addCoach = useCallback(() => {
    if (coaches.length >= 3) return;
    setValue('coaches', [...coaches, { name: '', role: '', image: '', career: '', license: '', intro: '' }], { shouldValidate: false });
  }, [coaches, setValue]);

  const removeCoach = useCallback((index: number) => {
    const updated = coaches.filter((_: any, i: number) => i !== index);
    setValue('coaches', updated, { shouldValidate: true });
  }, [coaches, setValue]);

  return (
    <div>
      <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
        코치님의 정보를 입력해주세요. 최대 3명까지 등록 가능합니다.
      </p>

      {coaches.map((_: Coach, index: number) => (
        <div key={index} className="coach-entry mb-4">
          <div className="entry-header">
            <span className="entry-title">코치 {index + 1}</span>
            <button
              type="button"
              className="btn-apply-danger-outline"
              onClick={() => removeCoach(index)}
            >
              삭제
            </button>
          </div>

          <div className="mb-3">
            <label className="form-label">이름</label>
            <input
              type="text"
              className={`form-control${errors.coaches?.[index]?.name ? ' is-invalid' : ''}`}
              {...register(`coaches.${index}.name`)}
              placeholder="코치님의 성함을 입력해주세요."
            />
            {errors.coaches?.[index]?.name && (
              <div style={errorStyle}>{errors.coaches[index].name.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">직책</label>
            <input
              type="text"
              className={`form-control${errors.coaches?.[index]?.role ? ' is-invalid' : ''}`}
              {...register(`coaches.${index}.role`)}
              placeholder="직책을 입력해주세요."
            />
            {errors.coaches?.[index]?.role && (
              <div style={errorStyle}>{errors.coaches[index].role.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">사진</label>
            <input
              type="text"
              className={`form-control${errors.coaches?.[index]?.image ? ' is-invalid' : ''}`}
              {...register(`coaches.${index}.image`)}
              placeholder="코치 사진을 업로드해주세요."
            />
            <div style={helperTextStyle}>이미지 URL 입력</div>
            {errors.coaches?.[index]?.image && (
              <div style={errorStyle}>{errors.coaches[index].image.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">경력</label>
            <textarea
              rows={3}
              className={`form-control${errors.coaches?.[index]?.career ? ' is-invalid' : ''}`}
              {...register(`coaches.${index}.career`)}
              placeholder="지도 경력 또는 선수 경력을 적어주세요."
            />
            {errors.coaches?.[index]?.career && (
              <div style={errorStyle}>{errors.coaches[index].career.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">자격증</label>
            <textarea
              rows={2}
              className={`form-control${errors.coaches?.[index]?.license ? ' is-invalid' : ''}`}
              {...register(`coaches.${index}.license`)}
              placeholder="보유 자격증이 있다면 적어주세요."
            />
            {errors.coaches?.[index]?.license && (
              <div style={errorStyle}>{errors.coaches[index].license.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">지도 스타일 소개</label>
            <textarea
              rows={3}
              className={`form-control${errors.coaches?.[index]?.intro ? ' is-invalid' : ''}`}
              {...register(`coaches.${index}.intro`)}
              placeholder="아이들을 어떤 스타일로 지도하시는지 소개해주세요."
            />
            {errors.coaches?.[index]?.intro && (
              <div style={errorStyle}>{errors.coaches[index].intro.message}</div>
            )}
          </div>
        </div>
      ))}

      <div className="text-center">
        <button
          type="button"
          className="add-button"
          onClick={addCoach}
          disabled={coaches.length >= 3}
        >
          + 코치 추가
        </button>
        {coaches.length >= 3 && (
          <p className="text-muted mt-2" style={{ fontSize: '0.85rem' }}>
            최대 3명까지 등록 가능합니다
          </p>
        )}
      </div>
    </div>
  );
}
