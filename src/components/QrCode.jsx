
import Image from 'next/image';
import QRcode from '/assets/image-qr-code.png'

const QrCode = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center bg-white w-[350px] h-full gap-4 p-4 border rounded-2xl shadow-b-2 shadow-r-2 -shadow-spread-2">
        <Image
          className="rounded-lg"
          src={QRcode}
          width={300}
          height={300}
          alt="Qr code"
        />
        <h1 className="font-semibold text-[24px] leading-tight text-center text-dark-blue">
          Improve your front-end skills by building projects
        </h1>
        <p className="px-8 text-[15px] text-grayish-blue text-center leading-normal mb-5">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level!
        </p>
      </div>
    </main>
  );
};

export default QrCode;
