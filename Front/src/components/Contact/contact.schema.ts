export interface ContactFormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  projectDetails: string;
}

export interface ContactStatus {
  type: 'success' | 'error' | '';
  message: string;
}