import { z } from "zod";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{7,}$/;

export const getMyApplicationSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요." }).optional(),
  phoneNumber: z.string().regex(/^(010|011|016|017|018|019)\d{7,8}$/, {
    message: "올바르지 않은 번호입니다.",
  }),
  password: z
    .string()
    .max(12, { message: "비밀번호는 12자 이내여야합니다." })
    .regex(passwordRegex, {
      message: "특수문자, 문자, 숫자 포함 7자 이상 입력해주세요.",
    })
    .trim(),
});
