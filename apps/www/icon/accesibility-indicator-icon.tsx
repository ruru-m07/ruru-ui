import { ContrastInfo } from "@/contexts/ThemeContext";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Props {
  contrastInfo: ContrastInfo;
}
export default function AccessibilityIndicatorIcon({ contrastInfo }: Props) {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger>
        <div
          className={"h-3 w-3 rounded-full text-foreground"}
          style={
            contrastInfo.level === "low"
              ? { backgroundColor: "#ef4444" }
              : contrastInfo.level === "medium"
                ? { backgroundColor: "#fb923c" }
                : contrastInfo.level === "good"
                  ? { backgroundColor: "#16a34a" }
                  : contrastInfo.level === "excellent"
                    ? { backgroundColor: "#4ade80" }
                    : {}
          }
        ></div>
      </HoverCardTrigger>
      <HoverCardContent
        side="right"
        className="flex flex-col shadow-none bg-primary-foreground border"
      >
        <h4 className="text-xl">Color Contrast</h4>

        <div className="mt-2 space-y-2">
          <p className="text-muted-foreground text-sm mb-5">
            Contrast: {contrastInfo.contrast.toFixed(2)}
          </p>
          <p className="text-sm mb-5">
            Level:{" "}
            <span
              className={"text-sm font-semibold py-1 px-2 rounded-full"}
              style={
                contrastInfo.level === "low"
                  ? { backgroundColor: "#ef4444", color: "#fff" }
                  : contrastInfo.level === "medium"
                    ? { backgroundColor: "#fb923c", color: "#000" }
                    : contrastInfo.level === "good"
                      ? { backgroundColor: "#16a34a", color: "#fff" }
                      : contrastInfo.level === "excellent"
                        ? { backgroundColor: "#4ade80", color: "#000" }
                        : {}
              }
            >
              {contrastInfo.level.slice(0, 1).toUpperCase()}
              {contrastInfo.level.slice(1)}
            </span>
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
