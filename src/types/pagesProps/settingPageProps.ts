export type SettingTabType = "edit_profile" | "preferences" | "security";

export interface SettingTabProps {
  label: string;
  value: SettingTabType;
}

export interface ProfileFormData {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth?: Date;
  presentAddress?: string;
  permanentAddress?: string;
  city?: string;
  postalCode?: number;
  country?: string;
}
