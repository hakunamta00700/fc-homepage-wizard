import type {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import type { ApplicationFormData } from "@/lib/types";

export interface StepProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
  watch: UseFormWatch<ApplicationFormData>;
  setValue: UseFormSetValue<ApplicationFormData>;
  control: Control<ApplicationFormData>;
}
