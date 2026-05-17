"use client";

import { useState } from "react";
import { Send, X } from "lucide-react";

import { createComment } from "@/actions/comment.action";
import CommentCard from "@/components/modules/homepage/CommentCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Comment = {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  postId: string;
  parentId: string | null;
  status: "APPROVED" | "REJECT";
  createdAt: string;
  updatedAt: string;
  replies: Comment[];
};

type CommentsSectionProps = {
  postId: string;
  comments: Comment[];
};

export default function CommentsSection({
  postId,
  comments,
}: CommentsSectionProps) {
  const [commentText, setCommentText] = useState("");
  const [replyTo, setReplyTo] = useState<Comment | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!commentText.trim()) return;

    setIsSubmitting(true);

    const result = await createComment({
      postId,
      content: commentText,
      parentId: replyTo?.id,
    });

    if (!result.error) {
      setCommentText("");
      setReplyTo(null);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="comments" className="scroll-mt-24 space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Comments</h2>
        <p className="text-sm text-muted-foreground">
          Share your thoughts about this post.
        </p>
      </div>

      <div className="space-y-3">
        {replyTo && (
          <div className="flex items-center justify-between rounded-md border bg-muted px-3 py-2 text-sm">
            <span className="text-muted-foreground">
              Replying to User {replyTo.authorId.slice(0, 6)}
            </span>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setReplyTo(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <Textarea
          placeholder={replyTo ? "Write a reply..." : "Write a comment..."}
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
          className="min-h-28 resize-none"
        />

        <div className="flex justify-end">
          <Button type="button" onClick={handleSubmit} disabled={isSubmitting}>
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting
              ? "Posting..."
              : replyTo
                ? "Post Reply"
                : "Post Comment"}
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="space-y-3">
              <CommentCard
                name={comment.authorName || "Anonymous User"}
                comment={comment.content}
                createdAt={new Date(comment.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  },
                )}
                onReply={() => setReplyTo(comment)}
              />

              {comment.replies.length > 0 && (
                <div className="ml-8 space-y-3 border-l pl-4">
                  {comment.replies.map((reply) => (
                    <CommentCard
                      key={reply.id}
                      name={reply.authorName || "Anonymous User"}
                      comment={reply.content}
                      createdAt={new Date(reply.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        },
                      )}
                      onReply={() => setReplyTo(comment)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">
            No comments yet. Be the first to comment.
          </p>
        )}
      </div>
    </section>
  );
}
