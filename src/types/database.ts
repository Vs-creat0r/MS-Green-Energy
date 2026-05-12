export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Visitor_Leads: {
        Row: {
          id: string;
          created_at: string;
          full_name: string;
          email: string;
          phone: string;
          zip_code: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          full_name: string;
          email: string;
          phone: string;
          zip_code: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          full_name?: string;
          email?: string;
          phone?: string;
          zip_code?: string;
        };
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
}
