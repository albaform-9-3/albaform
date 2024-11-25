import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <section className="relative h-[609px] w-full bg-black-400 pc:h-[1080px] tablet:h-[633px]">
        <div className="flex flex-col items-center py-[136px] pc:pt-[160px] tablet:pt-[160px]">
          <div className="relative h-[24px] w-[124px] pc:h-[48px] pc:w-[248px]">
            <Image src="/logo/albaform.svg" fill alt="alabaform" />
          </div>
          <span className="mt-[24px] text-xl text-white pc:mt-[32px] pc:text-[56px]">
            한 곳에서 관리하는 알바 구인 플랫폼{" "}
          </span>
          <button className="mt-[48px] rounded-[100px] bg-blue-300 px-[24px] py-[16px] text-lg text-white pc:mt-[60px] pc:px-[36px] pc:py-[24px] pc:text-2xl">
            알바폼 시작하기
          </button>
          <div className="absolute bottom-0 h-[244px] w-[386px] pc:h-[610px] pc:w-[964px]">
            <Image src="/image/landing/landing-0-md.png" fill alt="alabaform" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="flex flex-col items-center gap-[160px] py-[120px] pc:gap-[120px] pc:py-[400px] tablet:py-[240px]">
          <div className="relative h-[344px] w-[327px] pc:h-[640px] pc:w-[1140px]">
            <Image src="/image/landing/landing-1-sm.png" fill alt="?" />
          </div>
          <div className="relative h-[344px] w-[327px] pc:h-[640px] pc:w-[1140px]">
            <Image src="/image/landing/landing-2-sm.png" fill alt="?" />
          </div>
          <div className="relative h-[344px] w-[327px] pc:h-[640px] pc:w-[1140px]">
            <Image src="/image/landing/landing-3-sm.png" fill alt="?" />
          </div>
          <div className="relative h-[344px] w-[327px] pc:h-[640px] pc:w-[1140px]">
            <Image src="/image/landing/landing-4-sm.png" fill alt="?" />
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl font-bold text-black-400 pc:text-[48px] pc:leading-[68px]">
              한 곳에서 관리하는
              <br />
              알바 구인 플랫폼
            </span>
            <button className="mt-[56px] max-w-[223px] rounded-[100px] bg-blue-300 px-[24px] py-[16px] text-lg text-white pc:mt-[80px] pc:px-[36px] pc:py-[24px] pc:text-xl">
              알바폼 시작하기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
