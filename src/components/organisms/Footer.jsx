import SearchBar from "../atoms/SearchBar";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-primary text-white p-3">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="grid grid-rows_[min-content] gap-4">
          <h3 className="text-xl font-bold grid">
            Subscribe to our Newsletter
          </h3>
          <p className="text-sm">
            Stay updated on latest products and services by subscribing to our
            bi-weekly newsletter and joining our mailing list.
          </p>
          <SearchBar />
        </div>
        <div className="grid grid-rows_[min-content] gap-4 md:justify-center">
          <h3 className="text-xl font-bold grid content-center">Quick Links</h3>
          <ul className="text-sm grid gap-4 content-center">
            <li>
              <Link href="" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="">
                E-books
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Audio books
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Note pad
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-rows_[min-content]">
          <h3 className="text-xl font-bold">StayUp-to-date</h3>
          <p>Follow our social media pages</p>
          <div className="flex gap-5">
            <Link href="">
              <div className="relative h-5 w-5 bg-contain">
                <Image src="/assets/twitter.svg" fill alt="twitter icon" />
              </div>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="">
              <div className="relative h-5 w-5 bg-contain">
                <Image src="/assets/facebook.svg" fill alt="facebook icon" />
              </div>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-center">
        © 2023{" "}
        <Link href="/" className="hover:underline">
          ChurchApp
        </Link>
        . All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
