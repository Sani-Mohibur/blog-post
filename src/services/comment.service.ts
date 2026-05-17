import { env } from "@/env";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

type CreateCommentPayload = {
  content: string;
  postId: string;
  parentId?: string;
};

export const commentService = {
  createComment: async function (payload: CreateCommentPayload) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        return {
          data: null,
          error: { message: data?.message || "Failed to create comment" },
        };
      }

      return { data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },

  getCommentById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/comments/${id}`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        return {
          data: null,
          error: { message: data?.message || "Failed to get comment" },
        };
      }

      return { data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};
