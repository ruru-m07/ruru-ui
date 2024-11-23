import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { AlignCenterVertical, AlignEndVertical, AlignStartVertical } from "lucide-react";

export default function Button32() {
  return (
    <ToggleGroup
      variant="outline"
      className="inline-flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
      type="single"
      size={"sm"}
    >
      <ToggleGroupItem
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        value="left"
      >
        <AlignStartVertical size={16} strokeWidth={1.5} />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        value="center"
      >
        <AlignCenterVertical size={16} strokeWidth={1.5} />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        value="right"
      >
        <AlignEndVertical size={16} strokeWidth={1.5} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
