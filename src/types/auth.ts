export interface RequestNewTokenPayload {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface NewSessionPayload {
  success: boolean;
  session_id: string;
}

export interface UserDetailsPayload {
  avatar: {
    gravatar: { hash: string };
    tmdb: { avatar_path: string | null };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

export interface UserDetails {
  id: number;
  username: string;
  avatar: string;
}
