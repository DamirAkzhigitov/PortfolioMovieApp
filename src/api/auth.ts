import axios from "@/api/axios";
import {
  NewSessionPayload,
  RequestNewTokenPayload,
  UserDetails,
  UserDetailsPayload,
} from "@/types/auth";

export const guestSession = async () => {
  const res = await axios.get("authentication/guest_session/new");
  return res.data;
};

export const createSession = async (requestToken: string) => {
  let sessionId = "";
  try {
    const res = await axios.post<any, { data: NewSessionPayload }>(
      "authentication/session/new",
      {
        request_token: requestToken,
      },
    );
    sessionId = res.data.session_id;
  } catch (e) {
    console.error(e);
  }
  return sessionId;
};

export const createRequestToken = async () => {
  const res = await axios.get<RequestNewTokenPayload>(
    "authentication/token/new",
  );
  if (res.data.success) return res.data.request_token;
  return null;
};

export const accountDetails = async (): Promise<UserDetails> => {
  const res = await axios.get<UserDetailsPayload>("account");

  return {
    id: res.data.id,
    username: res.data.username,
    avatar: res.data.avatar?.tmdb?.avatar_path
      ? "https://image.tmdb.org/t/p/original/" +
        res.data.avatar.tmdb.avatar_path
      : "",
  };
};
