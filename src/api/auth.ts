import axios from "@/api/axios";
import { NewSessionPayload, RequestNewTokenPayload } from "@/types/auth";

export const guestSession = async () => {
  const res = await axios.get("authentication/guest_session/new");
  return res.data;
};

export const createSession = async (body) => {
  let sessionId = "";
  try {
    const res = await axios.post<any, { data: NewSessionPayload }>(
      "authentication/session/new",
      body,
    );

    console.log("createSession response: ", res);
    sessionId = res.data.session_id;
  } catch (e) {
    console.error("createSession error: ", e.message);
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
