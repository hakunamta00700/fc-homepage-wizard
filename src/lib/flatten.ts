import { ApplicationFormData, AirtableRecord } from './types';

export function flattenApplicationData(data: ApplicationFormData): AirtableRecord {
  const boolToString = (val: boolean): string => (val ? '예' : '아니오');

  const base: Omit<AirtableRecord, 
    | 'coach_1_name' | 'coach_1_role' | 'coach_1_image' | 'coach_1_career' | 'coach_1_license' | 'coach_1_intro'
    | 'coach_2_name' | 'coach_2_role' | 'coach_2_image' | 'coach_2_career' | 'coach_2_license' | 'coach_2_intro'
    | 'coach_3_name' | 'coach_3_role' | 'coach_3_image' | 'coach_3_career' | 'coach_3_license' | 'coach_3_intro'
    | 'class_1_name' | 'class_1_age_group' | 'class_1_day' | 'class_1_time' | 'class_1_location' | 'class_1_fee' | 'class_1_status'
    | 'class_2_name' | 'class_2_age_group' | 'class_2_day' | 'class_2_time' | 'class_2_location' | 'class_2_fee' | 'class_2_status'
    | 'class_3_name' | 'class_3_age_group' | 'class_3_day' | 'class_3_time' | 'class_3_location' | 'class_3_fee' | 'class_3_status'
    | 'class_4_name' | 'class_4_age_group' | 'class_4_day' | 'class_4_time' | 'class_4_location' | 'class_4_fee' | 'class_4_status'
    | 'class_5_name' | 'class_5_age_group' | 'class_5_day' | 'class_5_time' | 'class_5_location' | 'class_5_fee' | 'class_5_status'
    | 'review_1_text' | 'review_1_parent_name' | 'review_1_child_age'
    | 'review_2_text' | 'review_2_parent_name' | 'review_2_child_age'
    | 'review_3_text' | 'review_3_parent_name' | 'review_3_child_age'
    | 'review_4_text' | 'review_4_parent_name' | 'review_4_child_age'
    | 'review_5_text' | 'review_5_parent_name' | 'review_5_child_age'
  > = {
    club_name: data.club_name,
    club_name_en: data.club_name_en,
    website_slug: data.website_slug,
    template_type: data.template_type,
    logo: data.logo,
    main_color: data.main_color,
    sub_color: data.sub_color,
    hero_title: data.hero_title,
    hero_subtitle: data.hero_subtitle,
    hero_description: data.hero_description,
    hero_image_1: data.hero_image_1,
    hero_image_2: data.hero_image_2,
    hero_image_3: data.hero_image_3,
    short_description: data.short_description,
    full_description: data.full_description,
    club_philosophy: data.club_philosophy,
    education_philosophy: data.education_philosophy,
    parent_message: data.parent_message,
    safety_policy: data.safety_policy,
    representative_name: data.representative_name,
    phone: data.phone,
    email: data.email,
    address: data.address,
    region: data.region,
    kakao_channel_url: data.kakao_channel_url,
    instagram_url: data.instagram_url,
    blog_url: data.blog_url,
    youtube_url: data.youtube_url,
    curriculum_summary: data.curriculum_summary,
    age_5_7_curriculum: data.age_5_7_curriculum,
    age_8_10_curriculum: data.age_8_10_curriculum,
    age_11_13_curriculum: data.age_11_13_curriculum,
    growth_report_enabled: data.growth_report_enabled,
    growth_report_description: data.growth_report_description,
    facility_description: data.facility_description,
    parking_available: boolToString(data.parking_available),
    indoor_available: boolToString(data.indoor_available),
    shower_available: boolToString(data.shower_available),
    waiting_space_available: boolToString(data.waiting_space_available),
    cctv_available: boolToString(data.cctv_available),
    rainy_day_policy: data.rainy_day_policy,
    gallery_images: data.gallery_images,
    gallery_video_url_1: data.gallery_video_url_1,
    gallery_video_url_2: data.gallery_video_url_2,
    trial_available: boolToString(data.trial_available),
    consultation_hours: data.consultation_hours,
    contact_button_text: data.contact_button_text,
    kakao_button_text: data.kakao_button_text,
    trial_request_button_text: data.trial_request_button_text,
    map_embed_url: data.map_embed_url,
    parking_description: data.parking_description,
    seo_title: data.seo_title,
    seo_description: data.seo_description,
    region_keyword: data.region_keyword,
    primary_keyword: data.primary_keyword,
    keywords: data.keywords,
    og_image: data.og_image,
  };

  const coachFields: Partial<AirtableRecord> = {};
  for (let i = 0; i < 3; i++) {
    const idx = i + 1;
    const coach = data.coaches[i];
    coachFields[`coach_${idx}_name` as keyof AirtableRecord] = coach?.name ?? '';
    coachFields[`coach_${idx}_role` as keyof AirtableRecord] = coach?.role ?? '';
    coachFields[`coach_${idx}_image` as keyof AirtableRecord] = coach?.image ?? '';
    coachFields[`coach_${idx}_career` as keyof AirtableRecord] = coach?.career ?? '';
    coachFields[`coach_${idx}_license` as keyof AirtableRecord] = coach?.license ?? '';
    coachFields[`coach_${idx}_intro` as keyof AirtableRecord] = coach?.intro ?? '';
  }

  const classFields: Partial<AirtableRecord> = {};
  for (let i = 0; i < 5; i++) {
    const idx = i + 1;
    const cls = data.classes[i];
    classFields[`class_${idx}_name` as keyof AirtableRecord] = cls?.name ?? '';
    classFields[`class_${idx}_age_group` as keyof AirtableRecord] = cls?.age_group ?? '';
    classFields[`class_${idx}_day` as keyof AirtableRecord] = cls?.day ?? '';
    classFields[`class_${idx}_time` as keyof AirtableRecord] = cls?.time ?? '';
    classFields[`class_${idx}_location` as keyof AirtableRecord] = cls?.location ?? '';
    classFields[`class_${idx}_fee` as keyof AirtableRecord] = cls?.fee ?? '';
    classFields[`class_${idx}_status` as keyof AirtableRecord] = cls?.status ?? '';
  }

  const reviewFields: Partial<AirtableRecord> = {};
  for (let i = 0; i < 5; i++) {
    const idx = i + 1;
    const review = data.reviews[i];
    reviewFields[`review_${idx}_text` as keyof AirtableRecord] = review?.text ?? '';
    reviewFields[`review_${idx}_parent_name` as keyof AirtableRecord] = review?.parent_name ?? '';
    reviewFields[`review_${idx}_child_age` as keyof AirtableRecord] = review?.child_age ?? '';
  }

  return {
    ...base,
    ...coachFields,
    ...classFields,
    ...reviewFields,
  } as AirtableRecord;
}
