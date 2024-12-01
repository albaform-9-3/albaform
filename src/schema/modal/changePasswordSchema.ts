import { z } from "zod";

const passwordValidation = z
  .string()
  .max(12, { message: "비밀번호는 12자 이내여야합니다." })
  .regex(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{7,}$/,
    {
      message: "특수문자, 문자, 숫자 포함 7자 이상 입력해주세요.",
    }
  )
  .trim();

export const changePasswordSchema = z
  .object({
    currentPassword: passwordValidation,
    newPassword: passwordValidation,
    newPasswordConfirm: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.newPassword !== undefined) {
        return data.newPassword !== data.currentPassword;
      }
      return true;
    },
    {
      message: "현재 비밀번호와 새 비밀번호는 달라야 합니다.",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPasswordConfirm !== undefined) {
        return data.newPassword === data.newPasswordConfirm;
      }
      return true;
    },
    {
      message: "비밀번호가 일치하지 않습니다.",
      path: ["newPasswordConfirm"],
    }
  );
