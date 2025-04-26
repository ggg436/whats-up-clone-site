
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryCodes = [
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+977", country: "Nepal" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  // Add more country codes as needed
];

interface CountryCodeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CountryCodeSelect = ({ value, onChange }: CountryCodeSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        {countryCodes.map((country) => (
          <SelectItem key={country.code} value={country.code}>
            {country.code} {country.country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CountryCodeSelect;
