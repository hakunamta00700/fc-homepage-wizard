'use client';

import type { StepProps } from './types';

export default function StepHero({ register, errors }: StepProps) {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">학부모님께 가장 먼저 전달하고 싶은 한 문장을 적어주세요.</label>
        <input
          type="text"
          className={`form-control ${errors.hero_title ? 'is-invalid' : ''}`}
          placeholder="아이들의 꿈이 자라는 곳"
          {...register('hero_title')}
        />
        {errors.hero_title && (
          <div style={{ fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' }}>
            {errors.hero_title.message as string}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">클럽을 짧게 소개하는 문장을 적어주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="FC 드림즈에서 아이들의 성장을 함께합니다"
          {...register('hero_subtitle')}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">우리 클럽만의 특징이나 강점을 자유롭게 적어주세요.</label>
        <textarea
          className="form-control"
          rows={3}
          placeholder="차별화된 훈련 프로그램과 전문 코치진이 함께합니다"
          {...register('hero_description')}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">메인 대표 이미지를 업로드해주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="파일 URL을 입력해주세요"
          {...register('hero_image_1')}
        />
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          홈페이지 상단에 표시될 대표 이미지입니다.
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">추가 대표 이미지를 업로드해주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="파일 URL을 입력해주세요"
          {...register('hero_image_2')}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">추가 대표 이미지를 업로드해주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="파일 URL을 입력해주세요"
          {...register('hero_image_3')}
        />
      </div>
    </div>
  );
}
