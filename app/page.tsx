"use client"

import Image from "next/image";
import { Button } from "flowbite-react";
import Header from '@/components/Header';

import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  const goToGenerator = () => {
    router.push("/generator")
  }

  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <main className="flex flex-col h-full items-center justify-center gap-2 bg-white dark:bg-gray-800">
        <h1 className="text-2xl text-gray-500 dark:text-white">Flowbite React + Next.js</h1>
        <Button outline gradientDuoTone="greenToBlue" onClick={goToGenerator}>Flow</Button>
      </main>
      <footer className="w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              className="flex items-center gap-2 hover:underline me-4 md:me-6"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Learn
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:underline me-4 md:me-6"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Examples
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 hover:underline me-4 md:me-6"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Go to nextjs.org →
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
