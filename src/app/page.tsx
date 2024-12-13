import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-customtitle">RIKI TAKAHASHI</h1>
        <p className="text-customtitle">ENGINIEER PORTFOLIO</p>
      </div>
      <div>
        <h2 className="text-customtitle">ABOUT ME</h2>
        <Image
          src="/image/dami.png"
          alt="Dami Image"
          width={650}
          height={390}
        />
      </div>
      <div>
        <h2 className="text-customtitle">SKILL</h2>
        <Image
          src="/image/dami.png"
          alt="Dami Image"
          width={650}
          height={390}
        />
      </div>
      <div>
        <h2 className="text-customtitle">PORTFOLIO</h2>
        <Image
          src="/image/dami.png"
          alt="Dami Image"
          width={650}
          height={390}
        />
      </div>

      <img></img>
    </div>
  );
}
