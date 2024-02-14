import Link from "next/link";


export default function Back() {
  return (
    <div>
      <Link href="/" className="m-5 text-black h-6 w-10 flex items-center bg-contain bg-top bg-no-repeat bg-[url('/back-button.png')]"></Link>
    </div>
  );
}