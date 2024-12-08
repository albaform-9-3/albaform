"use client";

import FormInput from "@/components/input/FormInput";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Path, useForm } from "react-hook-form";
import { z } from "zod";
import { applySchema } from "@/schema/apply/applySchema";
import ErrorText from "@/components/errorText/ErrorText";
import SolidButton from "@/components/button/SolidButton";
import { cls } from "@/utils/dynamicTailwinds";

const ApplyForm = ({ id }: { id: string }) => {
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<z.infer<typeof applySchema>>({
    resolver: zodResolver(applySchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phoneNumber: "",
      experienceMonths: "",
      resumeName: "",
      introduction: "",
      password: "",
    },
  });

  const inputArr = [
    {
      label: "이름",
      name: "name",
      type: "text",
      placeholder: "이름을 입력해주세요.",
      error: errors.name,
      register: register("name"),
      inputStyle: "basic",
    },
    {
      label: "연락처",
      name: "phoneNumber",
      type: "tel",
      placeholder: "숫자만 입력해주세요.",
      error: errors.phoneNumber,
      register: register("phoneNumber"),
      inputStyle: "basic",
    },
    {
      label: "경력(개월 수)",
      name: "experienceMonths",
      type: "number",
      placeholder: "숫자만 입력해주세요.",
      error: errors.experienceMonths,
      register: register("experienceMonths"),
      inputStyle: "basic",
    },
    {
      label: "이력서",
      name: "resumeName",
      type: "file",
      placeholder: "파일 업로드하기",
      error: errors.resumeName,
      register: register("resumeName"),
      inputStyle: "file",
    },
    {
      label: "자기 소개",
      name: "introduction",
      type: "text",
      placeholder: "최대 200자까지 입력 가능합니다.",
      error: errors.introduction,
      register: register("introduction"),
      inputStyle: "textarea",
    },
    {
      label: "비밀번호",
      name: "password",
      type: visible ? "text" : "password",
      placeholder: "비밀번호를 입력해주세요.",
      error: errors.password,
      register: register("password"),
      inputStyle: "basic",
    },
  ];

  const onSubmit = () => {
    // 기능 구현 필요
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[23px] pc:mt-[36px]">
      {inputArr.map((input) => (
        <div key={input.name} className="relative flex flex-col">
          <label htmlFor={input.name} className={labelStyle}>
            {input.label}
            <span className="text-red"> *</span>
          </label>
          {input.inputStyle === "basic" && (
            <FormInput
              id={input.name}
              name={input.name as Path<z.infer<typeof applySchema>>}
              type={input.type}
              register={register}
              error={input.error}
              placeholder={input.placeholder}
              className={inputStyle}
            />
          )}
          {input.inputStyle === "textarea" && (
            <textarea
              id={input.name}
              {...register("introduction")}
              className={cls(
                "h-[132px] resize-none appearance-none focus:outline-none",
                inputStyle,
                errors.introduction ? "border-red" : ""
              )}
              placeholder="최대 200자까지 입력 가능합니다."
            />
          )}
          {input.inputStyle === "file" && (
            <label
              htmlFor={input.name}
              className={cls(inputStyle, "text-gray-300")}
            >
              {input.placeholder}
              <input type="file" className="hidden" id={input.name} />
              <Image
                src="/icon/share-md.svg"
                alt="파일 업로드"
                width={24}
                height={24}
                className="absolute bottom-4 right-3 cursor-pointer"
              />
            </label>
          )}
          <ErrorText error={input.error}>{input.error?.message}</ErrorText>

          {input.name === "password" && (
            <Image
              onClick={() => setVisible(!visible)}
              src={
                input.type === "text"
                  ? "/icon/visible.svg"
                  : "/icon/non-visible.svg"
              }
              alt="비밀번호 보기"
              width={24}
              height={24}
              className="absolute bottom-4 right-3 cursor-pointer"
            />
          )}
          {input.name === "password" && (
            <p className="absolute bottom-[-20px] left-0 text-xs text-gray-400 pc:bottom-[-26px] pc:text-md">
              *지원내역 확인에 사용됩니다.
            </p>
          )}
        </div>
      ))}

      <div className="mt-[42px] flex flex-col gap-[10px] pc:mt-[48px] pc:flex-row pc:gap-[8px]">
        <SolidButton style="outOrange300" type="button">
          임시 저장
        </SolidButton>

        <SolidButton
          disabled={!isValid || isSubmitting}
          style="orange300"
          type="submit"
        >
          작성 완료
        </SolidButton>
      </div>
    </form>
  );
};

export default ApplyForm;

const labelStyle =
  "text-md font-regular text-black-400 w-fit cursor-pointer mt-[33px] pc:mt-[52px] pc:text-xl";
const inputStyle =
  "mt-4 rounded-[8px] bg-background-200 p-[14px] pr-10 placeholder:text-lg placeholder:font-regular border border-background-200 focus:border-orange-300 pc:mt-4";
