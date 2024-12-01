import { z } from "zod";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{7,}$/;

export const signInSchema = z.object({
  email: z.string().email({ message: "이메일 형식이 아닙니다." }).trim(),
  password: z
    .string()
    .max(12, { message: "비밀번호는 12자 이내여야합니다." })
    .regex(passwordRegex, {
      message: "특수문자, 문자, 숫자 포함 7자 이상 입력해주세요.",
    })
    .trim(),
});
