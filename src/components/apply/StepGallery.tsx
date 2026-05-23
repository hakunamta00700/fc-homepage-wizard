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

export default function StepGallery({ register, errors }: StepProps) {
  return (
    <div>
      <div className="mb-4">
        <label className="form-label">훈련/경기/행사 사진을 업로드해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.gallery_images ? ' is-invalid' : ''}`}
          {...register('gallery_images')}
        />
        <div style={helperTextStyle}>
          이미지 URL을 쉼표로 구분해서 입력해주세요. 업로드 기능은 추후 구현됩니다.
        </div>
        {errors.gallery_images && (
          <div style={errorStyle}>{errors.gallery_images.message as string}</div>
        )}
      </div>

      <div className="mb-4">
        <label className="form-label">훈련 또는 경기 영상 링크가 있다면 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.gallery_video_url_1 ? ' is-invalid' : ''}`}
          placeholder="YouTube URL"
          {...register('gallery_video_url_1')}
        />
        {errors.gallery_video_url_1 && (
          <div style={errorStyle}>{errors.gallery_video_url_1.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">추가 영상 링크가 있다면 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.gallery_video_url_2 ? ' is-invalid' : ''}`}
          placeholder="YouTube URL"
          {...register('gallery_video_url_2')}
        />
        {errors.gallery_video_url_2 && (
          <div style={errorStyle}>{errors.gallery_video_url_2.message as string}</div>
        )}
      </div>
    </div>
  );
}
