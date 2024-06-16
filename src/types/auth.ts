export interface RequestNewTokenPayload {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface NewSessionPayload {
  success: boolean;
  session_id: string;
}
