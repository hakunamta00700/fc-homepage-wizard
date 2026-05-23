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

export default function StepSEO({ register, errors }: StepProps) {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">검색 결과에 표시될 홈페이지 제목을 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.seo_title ? ' is-invalid' : ''}`}
          {...register('seo_title')}
        />
        <div style={helperTextStyle}>예: [지역] 유소년 축구클럽 | 클럽명</div>
        {errors.seo_title && (
          <div style={errorStyle}>{errors.seo_title.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">검색 결과 설명 문구를 입력해주세요.</label>
        <textarea
          rows={3}
          className={`form-control${errors.seo_description ? ' is-invalid' : ''}`}
          {...register('seo_description')}
        />
        {errors.seo_description && (
          <div style={errorStyle}>{errors.seo_description.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">대표 지역 키워드를 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.region_keyword ? ' is-invalid' : ''}`}
          {...register('region_keyword')}
          placeholder="서울 강남"
        />
        {errors.region_keyword && (
          <div style={errorStyle}>{errors.region_keyword.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">대표 검색 키워드를 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.primary_keyword ? ' is-invalid' : ''}`}
          {...register('primary_keyword')}
          placeholder="유소년 축구클럽"
        />
        {errors.primary_keyword && (
          <div style={errorStyle}>{errors.primary_keyword.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">추가 검색 키워드를 쉼표로 구분해서 입력해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.keywords ? ' is-invalid' : ''}`}
          {...register('keywords')}
          placeholder="축구교실, 아동축구, 주말축구"
        />
        {errors.keywords && (
          <div style={errorStyle}>{errors.keywords.message as string}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">공유 시 표시될 대표 이미지를 업로드해주세요.</label>
        <input
          type="text"
          className={`form-control${errors.og_image ? ' is-invalid' : ''}`}
          {...register('og_image')}
        />
        <div style={helperTextStyle}>이미지 URL을 입력해주세요</div>
        {errors.og_image && (
          <div style={errorStyle}>{errors.og_image.message as string}</div>
        )}
      </div>
    </div>
  );
}
