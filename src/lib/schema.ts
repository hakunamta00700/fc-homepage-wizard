import { z } from 'zod';
import type { TemplateType, ClassStatus, GrowthReportEnabled } from './types';

export const coachSchema = z.object({
  name: z.string().max(50, '50자 이내로 입력해주세요.'),
  role: z.string().max(50, '50자 이내로 입력해주세요.'),
  image: z.string(),
  career: z.string().max(500, '500자 이내로 입력해주세요.'),
  license: z.string().max(200, '200자 이내로 입력해주세요.'),
  intro: z.string().max(500, '500자 이내로 입력해주세요.'),
});

export const classSchema = z.object({
  name: z.string().max(50, '50자 이내로 입력해주세요.'),
  age_group: z.string().max(50, '50자 이내로 입력해주세요.'),
  day: z.string().max(50, '50자 이내로 입력해주세요.'),
  time: z.string().max(50, '50자 이내로 입력해주세요.'),
  location: z.string().max(100, '100자 이내로 입력해주세요.'),
  fee: z.string().max(50, '50자 이내로 입력해주세요.'),
  status: z.enum(['모집중', '마감임박', '대기접수', '모집마감']),
});

export const reviewSchema = z.object({
  text: z.string().max(500, '500자 이내로 입력해주세요.'),
  parent_name: z.string().max(30, '30자 이내로 입력해주세요.'),
  child_age: z.string().max(20, '20자 이내로 입력해주세요.'),
});

const templateTypeEnum = z.enum(['brand', 'growth_report', 'elite']);
const classStatusEnum = z.enum(['모집중', '마감임박', '대기접수', '모집마감']);
const growthReportEnum = z.enum(['제공함', '준비중', '제공하지 않음']);

export const applicationSchema = z.object({
  club_name: z.string().min(1, '클럽 이름을 입력해주세요.').max(50),
  club_name_en: z.string().max(100, '100자 이내로 입력해주세요.').or(z.literal('')),
  website_slug: z.string().min(1, '홈페이지 주소를 입력해주세요.').max(50).regex(/^[a-z0-9-]+$/, '영문 소문자, 숫자, 하이픈만 사용 가능합니다.'),
  template_type: templateTypeEnum.or(z.literal('')).refine((val) => val !== '', { message: '홈페이지 스타일을 선택해주세요.' }),
  logo: z.string(),
  main_color: z.string().max(20),
  sub_color: z.string().max(20),

  // Step 2
  hero_title: z.string().min(1, '한 문장을 입력해주세요.').max(100),
  hero_subtitle: z.string().max(200).or(z.literal('')),
  hero_description: z.string().max(500).or(z.literal('')),
  hero_image_1: z.string(),
  hero_image_2: z.string(),
  hero_image_3: z.string(),

  // Step 3
  short_description: z.string().max(300).or(z.literal('')),
  full_description: z.string().max(2000).or(z.literal('')),
  club_philosophy: z.string().max(1000).or(z.literal('')),
  education_philosophy: z.string().max(1000).or(z.literal('')),
  parent_message: z.string().max(1000).or(z.literal('')),
  safety_policy: z.string().max(1000).or(z.literal('')),

  // Step 4
  representative_name: z.string().min(1, '대표자 성함을 입력해주세요.').max(30),
  phone: z.string().min(1, '연락처를 입력해주세요.').max(30),
  email: z.string().email('올바른 이메일 형식이 아닙니다.').or(z.literal('')),
  address: z.string().min(1, '주소를 입력해주세요.').max(200),
  region: z.string().max(100).or(z.literal('')),
  kakao_channel_url: z.string().max(500).or(z.literal('')),
  instagram_url: z.string().max(500).or(z.literal('')),
  blog_url: z.string().max(500).or(z.literal('')),
  youtube_url: z.string().max(500).or(z.literal('')),

  // Step 5
  coaches: z.array(coachSchema).max(3, '코치는 최대 3명까지 등록 가능합니다.'),

  // Step 6
  classes: z.array(classSchema).max(5, '수업반은 최대 5개까지 등록 가능합니다.'),

  // Step 7
  curriculum_summary: z.string().max(2000).or(z.literal('')),
  age_5_7_curriculum: z.string().max(2000).or(z.literal('')),
  age_8_10_curriculum: z.string().max(2000).or(z.literal('')),
  age_11_13_curriculum: z.string().max(2000).or(z.literal('')),
  growth_report_enabled: growthReportEnum.or(z.literal('')),
  growth_report_description: z.string().max(1000).or(z.literal('')),

  // Step 8
  facility_description: z.string().max(2000).or(z.literal('')),
  parking_available: z.boolean(),
  indoor_available: z.boolean(),
  shower_available: z.boolean(),
  waiting_space_available: z.boolean(),
  cctv_available: z.boolean(),
  rainy_day_policy: z.string().max(1000).or(z.literal('')),

  // Step 9
  gallery_images: z.string(),
  gallery_video_url_1: z.string().max(500).or(z.literal('')),
  gallery_video_url_2: z.string().max(500).or(z.literal('')),

  // Step 10
  reviews: z.array(reviewSchema).max(5, '후기는 최대 5개까지 등록 가능합니다.'),

  // Step 11
  trial_available: z.boolean(),
  consultation_hours: z.string().max(200).or(z.literal('')),
  contact_button_text: z.string().max(50).or(z.literal('')),
  kakao_button_text: z.string().max(50).or(z.literal('')),
  trial_request_button_text: z.string().max(50).or(z.literal('')),
  map_embed_url: z.string().max(500).or(z.literal('')),
  parking_description: z.string().max(500).or(z.literal('')),

  // Step 12
  seo_title: z.string().max(100).or(z.literal('')),
  seo_description: z.string().max(200).or(z.literal('')),
  region_keyword: z.string().max(50).or(z.literal('')),
  primary_keyword: z.string().max(50).or(z.literal('')),
  keywords: z.string().max(500).or(z.literal('')),
  og_image: z.string(),
});

export type ApplicationSchemaType = z.infer<typeof applicationSchema>;
