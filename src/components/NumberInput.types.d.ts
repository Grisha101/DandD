declare type ActionType = "increment" | "decrement";

declare interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  label?: string;
}
