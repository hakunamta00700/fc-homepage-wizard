export type TemplateType = 'brand' | 'growth_report' | 'elite';

export type ClassStatus = '모집중' | '마감임박' | '대기접수' | '모집마감';

export type GrowthReportEnabled = '제공함' | '준비중' | '제공하지 않음';

export interface Coach {
  name: string;
  role: string;
  image: string;
  career: string;
  license: string;
  intro: string;
}

export interface Class {
  name: string;
  age_group: string;
  day: string;
  time: string;
  location: string;
  fee: string;
  status: ClassStatus;
}

export interface Review {
  text: string;
  parent_name: string;
  child_age: string;
}

export interface ApplicationFormData {
  // Step 1 - Basic Info
  club_name: string;
  club_name_en: string;
  website_slug: string;
  template_type: TemplateType | '';
  logo: string;
  main_color: string;
  sub_color: string;

  // Step 2 - Hero
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_image_1: string;
  hero_image_2: string;
  hero_image_3: string;

  // Step 3 - Club Intro
  short_description: string;
  full_description: string;
  club_philosophy: string;
  education_philosophy: string;
  parent_message: string;
  safety_policy: string;

  // Step 4 - Contact
  representative_name: string;
  phone: string;
  email: string;
  address: string;
  region: string;
  kakao_channel_url: string;
  instagram_url: string;
  blog_url: string;
  youtube_url: string;

  // Step 5 - Coaches (array, max 3)
  coaches: Coach[];

  // Step 6 - Classes (array, max 5)
  classes: Class[];

  // Step 7 - Curriculum
  curriculum_summary: string;
  age_5_7_curriculum: string;
  age_8_10_curriculum: string;
  age_11_13_curriculum: string;
  growth_report_enabled: GrowthReportEnabled | '';
  growth_report_description: string;

  // Step 8 - Facilities
  facility_description: string;
  parking_available: boolean;
  indoor_available: boolean;
  shower_available: boolean;
  waiting_space_available: boolean;
  cctv_available: boolean;
  rainy_day_policy: string;

  // Step 9 - Gallery
  gallery_images: string;
  gallery_video_url_1: string;
  gallery_video_url_2: string;

  // Step 10 - Reviews (array, max 5)
  reviews: Review[];

  // Step 11 - Trial & Contact
  trial_available: boolean;
  consultation_hours: string;
  contact_button_text: string;
  kakao_button_text: string;
  trial_request_button_text: string;
  map_embed_url: string;
  parking_description: string;

  // Step 12 - SEO
  seo_title: string;
  seo_description: string;
  region_keyword: string;
  primary_keyword: string;
  keywords: string;
  og_image: string;
}

export interface AirtableRecord {
  club_name: string;
  club_name_en: string;
  website_slug: string;
  template_type: string;
  logo: string;
  main_color: string;
  sub_color: string;
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_image_1: string;
  hero_image_2: string;
  hero_image_3: string;
  short_description: string;
  full_description: string;
  club_philosophy: string;
  education_philosophy: string;
  parent_message: string;
  safety_policy: string;
  representative_name: string;
  phone: string;
  email: string;
  address: string;
  region: string;
  kakao_channel_url: string;
  instagram_url: string;
  blog_url: string;
  youtube_url: string;
  coach_1_name: string;
  coach_1_role: string;
  coach_1_image: string;
  coach_1_career: string;
  coach_1_license: string;
  coach_1_intro: string;
  coach_2_name: string;
  coach_2_role: string;
  coach_2_image: string;
  coach_2_career: string;
  coach_2_license: string;
  coach_2_intro: string;
  coach_3_name: string;
  coach_3_role: string;
  coach_3_image: string;
  coach_3_career: string;
  coach_3_license: string;
  coach_3_intro: string;
  class_1_name: string;
  class_1_age_group: string;
  class_1_day: string;
  class_1_time: string;
  class_1_location: string;
  class_1_fee: string;
  class_1_status: string;
  class_2_name: string;
  class_2_age_group: string;
  class_2_day: string;
  class_2_time: string;
  class_2_location: string;
  class_2_fee: string;
  class_2_status: string;
  class_3_name: string;
  class_3_age_group: string;
  class_3_day: string;
  class_3_time: string;
  class_3_location: string;
  class_3_fee: string;
  class_3_status: string;
  class_4_name: string;
  class_4_age_group: string;
  class_4_day: string;
  class_4_time: string;
  class_4_location: string;
  class_4_fee: string;
  class_4_status: string;
  class_5_name: string;
  class_5_age_group: string;
  class_5_day: string;
  class_5_time: string;
  class_5_location: string;
  class_5_fee: string;
  class_5_status: string;
  curriculum_summary: string;
  age_5_7_curriculum: string;
  age_8_10_curriculum: string;
  age_11_13_curriculum: string;
  growth_report_enabled: string;
  growth_report_description: string;
  facility_description: string;
  parking_available: string;
  indoor_available: string;
  shower_available: string;
  waiting_space_available: string;
  cctv_available: string;
  rainy_day_policy: string;
  gallery_images: string;
  gallery_video_url_1: string;
  gallery_video_url_2: string;
  review_1_text: string;
  review_1_parent_name: string;
  review_1_child_age: string;
  review_2_text: string;
  review_2_parent_name: string;
  review_2_child_age: string;
  review_3_text: string;
  review_3_parent_name: string;
  review_3_child_age: string;
  review_4_text: string;
  review_4_parent_name: string;
  review_4_child_age: string;
  review_5_text: string;
  review_5_parent_name: string;
  review_5_child_age: string;
  trial_available: string;
  consultation_hours: string;
  contact_button_text: string;
  kakao_button_text: string;
  trial_request_button_text: string;
  map_embed_url: string;
  parking_description: string;
  seo_title: string;
  seo_description: string;
  region_keyword: string;
  primary_keyword: string;
  keywords: string;
  og_image: string;
}

export const TEMPLATE_OPTIONS: { value: TemplateType; label: string }[] = [
  { value: 'brand', label: '브랜드 중심형' },
  { value: 'growth_report', label: '성장 리포트형' },
  { value: 'elite', label: '엘리트 선수육성형' },
];

export const CLASS_STATUS_OPTIONS: ClassStatus[] = [
  '모집중',
  '마감임박',
  '대기접수',
  '모집마감',
];

export const GROWTH_REPORT_OPTIONS: GrowthReportEnabled[] = [
  '제공함',
  '준비중',
  '제공하지 않음',
];

export const STEP_LABELS: string[] = [
  '기본 클럽 정보',
  '메인 화면 정보',
  '클럽 소개',
  '연락처 및 위치',
  '코치 소개',
  '수업반 안내',
  '커리큘럼 및 성장관리',
  '시설 및 환경',
  '갤러리 및 영상',
  '학부모 후기',
  '체험수업 및 상담',
  '검색 노출 설정',
  '최종 확인',
];

export const REQUIRED_FIELDS: string[] = [
  'club_name',
  'website_slug',
  'template_type',
  'hero_title',
  'phone',
  'address',
  'representative_name',
];
