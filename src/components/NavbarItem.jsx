import Link from "next/link";

export default function NavbarItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-2 lg:mx-6 hover:text-cyan-300 duration-300">
        <Icon className="text-2xl sm:hidden mx-2" />
        <p className="hidden sm:inline my-2 text-sm lg:text-xl">{title}</p>
      </Link>
    </div>
  );
}
