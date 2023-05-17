import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">TOP</Link>
        </li>
        <li>
          <Link href="/users">USER LIST</Link>
        </li>
        <li>
          <Link href="/posts">POST LIST</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
