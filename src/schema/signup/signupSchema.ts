import { z } from "zod";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{7,}$/;

const baseSchema = z.object({
  email: z.string().email({ message: "이메일 형식이 아닙니다." }).trim(),
  password: z
    .string()
    .max(12, { message: "비밀번호는 12자 이내여야합니다." })
    .regex(passwordRegex, {
      message: "특수문자, 문자, 숫자 포함 7자 이상 입력해주세요.",
    })
    .trim(),
  passwordConfirm: z.string().optional(),
});

export const applicantSchema = baseSchema.extend({
  role: z.literal("APPLICANT"),
  name: z.string().min(1, { message: "이름을 입력해주세요." }).optional(),
  phoneNumber: z.string().regex(/^(010|011|016|017|018|019)\d{7,8}$/, {
    message: "올바르지 않은 번호입니다.",
  }),
  nickname: z.string().min(1, { message: "닉네임을 입력해주세요." }),
});

export const ownerSchema = baseSchema.extend({
  role: z.literal("OWNER"),
  nickname: z.string().min(1, { message: "닉네임을 입력해주세요." }),
  storeName: z
    .string()
    .min(1, { message: "가게 이름을 입력해주세요." })
    .optional(),
  storePhoneNumber: z
    .string()
    .regex(/^[0-9]*$/, { message: "올바르지 않은 번호입니다." })
    .optional(),
  phoneNumber: z
    .string()
    .regex(/^(010|011|016|017|018|019)\d{7,8}$/, {
      message: "올바르지 않은 번호입니다.",
    })
    .optional(),
  location: z
    .string()
    .min(1, { message: "가게 위치를 입력해주세요." })
    .optional(),
});
