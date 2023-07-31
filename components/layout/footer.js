import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <Image
          className="grayscale"
          src="/logo.svg"
          alt={""}
          width={"36"}
          height={"36"}
        />
        <p>Built By Zehu Cai.</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href={"https://github.com/"}>
          <Image
            className="grayscale"
            src={"/github.svg"}
            alt={""}
            width={"36"}
            height={"36"}
          />
        </a>
      </div>
    </footer>
  );
}
