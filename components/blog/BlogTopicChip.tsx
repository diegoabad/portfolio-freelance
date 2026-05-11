import type { BlogTopicTrack } from "@/lib/blog-types";
import { blogTopicChipClassName, blogTopicLabel } from "@/lib/blog-topics";

type Props = {
  track: BlogTopicTrack;
  className?: string;
};

export function BlogTopicChip({ track, className = "" }: Props) {
  const combined = [blogTopicChipClassName(track), className].filter(Boolean).join(" ");
  return (
    <span className={combined}>
      {blogTopicLabel(track)}
    </span>
  );
}
