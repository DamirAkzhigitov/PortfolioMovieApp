import axios from "@/api/axios";
import { NewSessionPayload, RequestNewTokenPayload } from "@/types/auth";

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
