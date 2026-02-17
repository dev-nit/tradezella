
-- Add columns for onboarding flow
alter table profiles 
add column if not exists trading_types text[],
add column if not exists goals text[],
add column if not exists referral_source text,
add column if not exists onboarding_completed boolean default false;
