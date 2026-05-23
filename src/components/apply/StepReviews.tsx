'use client';

import { Review } from '@/lib/types';
import type { StepProps } from './types';

const errorStyle = { fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' };
const helperTextStyle = { fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' };

export default function StepReviews({ register, errors, watch, setValue }: StepProps) {
  const reviews = watch('reviews') || [];

  const addReview = () => {
    if (reviews.length >= 5) return;
    setValue('reviews', [...reviews, { text: '', parent_name: '', child_age: '' }], { shouldValidate: false });
  };

  const removeReview = (index: number) => {
    const updated = reviews.filter((_, i) => i !== index);
    setValue('reviews', updated, { shouldValidate: true });
  };

  return (
    <div>
      <p style={helperTextStyle}>학부모님들의 생생한 후기를 입력해주세요. 최대 5개까지 등록 가능합니다.</p>

      {reviews.map((_: Review, index: number) => (
        <div className="review-entry mb-4" key={index}>
          <div className="entry-header">
            <span className="entry-title">후기 {index + 1}</span>
            <button
              type="button"
              className="btn-apply-danger-outline"
              onClick={() => removeReview(index)}
            >
              삭제
            </button>
          </div>

          <div className="mb-3">
            <label className="form-label">후기 내용을 입력해주세요.</label>
            <textarea
              className={`form-control${errors.reviews?.[index]?.text ? ' is-invalid' : ''}`}
              rows={3}
              {...register(`reviews.${index}.text`)}
            />
            {errors.reviews?.[index]?.text && (
              <div style={errorStyle}>{errors.reviews[index].text.message as string}</div>
            )}
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="form-label">학부모님 성함 또는 닉네임</label>
              <input
                type="text"
                className={`form-control${errors.reviews?.[index]?.parent_name ? ' is-invalid' : ''}`}
                {...register(`reviews.${index}.parent_name`)}
              />
              {errors.reviews?.[index]?.parent_name && (
                <div style={errorStyle}>{errors.reviews[index].parent_name.message as string}</div>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">아이의 연령대를 입력해주세요.</label>
              <input
                type="text"
                className={`form-control${errors.reviews?.[index]?.child_age ? ' is-invalid' : ''}`}
                {...register(`reviews.${index}.child_age`)}
              />
              {errors.reviews?.[index]?.child_age && (
                <div style={errorStyle}>{errors.reviews[index].child_age.message as string}</div>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="add-button"
        onClick={addReview}
        disabled={reviews.length >= 5}
      >
        + 후기 추가
      </button>
    </div>
  );
}
