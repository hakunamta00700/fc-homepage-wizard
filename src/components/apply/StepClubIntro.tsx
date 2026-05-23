'use client';

interface StepProps {
  register: any;
  errors: any;
  watch: any;
  setValue: any;
  control: any;
}

export default function StepClubIntro({ register }: StepProps) {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">우리 클럽을 처음 보는 학부모님께 클럽을 소개해주세요.</label>
        <textarea
          className="form-control"
          rows={3}
          placeholder="0000년부터 아이들과 함께해온 축구클럽입니다"
          {...register('short_description')}
        />
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
          홈페이지 상단에 표시되는 간단한 소개글입니다.
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">클럽의 운영 방향과 교육 목표를 자세히 소개해주세요.</label>
        <textarea
          className="form-control"
          rows={5}
          placeholder="클럽의 비전과 목표를 자유롭게 적어주세요"
          {...register('full_description')}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">아이들을 어떤 방식으로 지도하고 싶으신가요?</label>
        <textarea
          className="form-control"
          rows={4}
          placeholder="클럽의 지도 철학과 방법론을 소개해주세요"
          {...register('club_philosophy')}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">축구를 통해 아이들에게 어떤 성장을 기대하시나요?</label>
        <textarea
          className="form-control"
          rows={4}
          placeholder="아이들이 축구를 통해 얻을 수 있는 가치에 대해 적어주세요"
          {...register('education_philosophy')}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">학부모님께 전하고 싶은 메시지를 적어주세요.</label>
        <textarea
          className="form-control"
          rows={4}
          placeholder="학부모님께 전하는 따뜻한 메시지를 적어주세요"
          {...register('parent_message')}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">안전 관리와 관련하여 운영 중인 정책이 있다면 알려주세요.</label>
        <textarea
          className="form-control"
          rows={4}
          placeholder="상해보험, 안전 수칙, 응급처치 관련 정책을 알려주세요"
          {...register('safety_policy')}
        />
      </div>
    </div>
  );
}
