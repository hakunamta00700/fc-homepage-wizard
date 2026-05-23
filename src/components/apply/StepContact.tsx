'use client';

interface StepProps {
  register: any;
  errors: any;
  watch: any;
  setValue: any;
  control: any;
}

export default function StepContact({ register, errors }: StepProps) {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">대표자 또는 운영자 성함을 입력해주세요.</label>
        <input
          type="text"
          className={`form-control ${errors.representative_name ? 'is-invalid' : ''}`}
          placeholder="홍길동"
          {...register('representative_name')}
        />
        {errors.representative_name && (
          <div style={{ fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' }}>
            {errors.representative_name.message as string}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">상담 가능한 연락처를 입력해주세요.</label>
        <input
          type="text"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          placeholder="010-0000-0000"
          {...register('phone')}
        />
        {errors.phone && (
          <div style={{ fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' }}>
            {errors.phone.message as string}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">문의 받을 이메일 주소를 입력해주세요.</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="example@club.com"
          {...register('email')}
        />
        {errors.email && (
          <div style={{ fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' }}>
            {errors.email.message as string}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">훈련장 또는 클럽 주소를 입력해주세요.</label>
        <input
          type="text"
          className={`form-control ${errors.address ? 'is-invalid' : ''}`}
          placeholder="도로명 주소를 입력해주세요"
          {...register('address')}
        />
        {errors.address && (
          <div style={{ fontSize: '0.8rem', color: '#dc2626', marginTop: '0.25rem' }}>
            {errors.address.message as string}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">주 활동 지역을 입력해주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="서울특별시 강남구"
          {...register('region')}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">카카오채널 링크가 있다면 입력해주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="https://pf.kakao.com/..."
          {...register('kakao_channel_url')}
        />
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          링크가 있다면 입력해주세요.
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">인스타그램 주소가 있다면 입력해주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="https://instagram.com/..."
          {...register('instagram_url')}
        />
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          링크가 있다면 입력해주세요.
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">네이버 블로그 주소가 있다면 입력해주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="https://blog.naver.com/..."
          {...register('blog_url')}
        />
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          링크가 있다면 입력해주세요.
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">유튜브 채널 주소가 있다면 입력해주세요.</label>
        <input
          type="text"
          className="form-control"
          placeholder="https://youtube.com/@..."
          {...register('youtube_url')}
        />
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          링크가 있다면 입력해주세요.
        </div>
      </div>
    </div>
  );
}
