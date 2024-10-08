import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "ruru-ui/components/select";

const SelectCountries = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a version." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectSeparator />
            {Array.from({ length: 50 }, (_, index) => (
              <SelectItem key={index} value={String(index)}>
                Ruru-UI-V{index}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectCountries;
