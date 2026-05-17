import { MessageCircle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type CommentCardProps = {
  name: string;
  comment: string;
  createdAt: string;
  avatarUrl?: string;
  onReply?: () => void;
};

export default function CommentCard({
  name,
  comment,
  createdAt,
  avatarUrl,
  onReply,
}: CommentCardProps) {
  const fallbackName = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="border shadow-sm">
      <CardContent className="flex gap-4 p-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{fallbackName}</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-sm font-semibold">{name}</h4>
            <span className="text-xs text-muted-foreground">{createdAt}</span>
          </div>

          <p className="text-sm leading-6 text-muted-foreground">{comment}</p>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-auto px-0 text-xs text-muted-foreground hover:text-foreground"
            onClick={onReply}
          >
            <MessageCircle className="mr-1 h-3.5 w-3.5" />
            Reply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
