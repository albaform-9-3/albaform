import { NextApiRequest, NextApiResponse } from "next";
import { getMyApplicationSchema } from "@/schema/modal/getMyApplicationSchema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("실행 여부 on");

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, phoneNumber, password, formId } = req.body;

  // 데이터 검증
  const parseData = getMyApplicationSchema.safeParse({
    name,
    phoneNumber,
    password,
  });

  if (!parseData.success) {
    return res.status(400).json({
      message: "Invalid input",
      errors: parseData.error.flatten(),
    });
  }

  try {
    // 백엔드 서버로 요청 보내기
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/forms/${formId}/my-application/verify`,
      {
        method: "POST",
        body: JSON.stringify({ name, phoneNumber, password }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({
        message: "지원 내역 조회에 실패했습니다.",
      });
    }

    const data = await response.json();

    console.log("api라우트 성공", data);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({ message: "서버 에러가 발생했습니다." });
  }
}
