"use server";

import { revalidatePath } from "next/cache";

import { commentService } from "@/services/comment.service";

type CreateCommentPayload = {
  content: string;
  postId: string;
  parentId?: string;
};

export const createComment = async (payload: CreateCommentPayload) => {
  const result = await commentService.createComment(payload);

  if (!result.error) {
    revalidatePath(`/blogs/${payload.postId}`);
  }

  return result;
};
