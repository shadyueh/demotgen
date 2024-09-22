"use client"

import { Label, TextInput, FileInput, Button, DarkThemeToggle } from "flowbite-react";
import Image from "next/image";
import { useState } from 'react';
import localFont from 'next/font/local';

const timesNewRoman = localFont({
  src: '../fonts/times-new-roman.woff',
  display: 'auto',
})

const centuryGothic = localFont({
  src: '../fonts/century-gothic.woff',
  display: 'auto',
})

export default function Home() {

  const [imageFile, setImageFile] = useState("/images/pexels-alohaphotostudio-5901269.jpg")
  const [posterTitle, setPosterTitle] = useState("Irresponsabilidade")
  const [posterCaption, setPosterCaption] = useState("Nenhuma gota d'água se sente responsável pela inundação")

  const formatTitle = (title: string) => {
    return (
      <>
        <span className="inline-block align-top text-6xl tracking-wider leading-[3.5rem] uppercase">{title.substring(0, 1)}</span>
        <span className="inline-block align-top text-5xl tracking-wider underline underline-offset-4 decoration-2 uppercase">{title.substring(1, title.length - 1)}</span>
        <span className="inline-block align-top text-6xl tracking-wider leading-[3.5rem] uppercase">{title.substring(title.length - 1)}</span>
      </>
    )
  }

  return (
    <div className="flex flex-col min-h-dvh  dark:bg-gray-800">
      <main className="flex flex-col h-full items-center gap-2">

        <DarkThemeToggle />

        <form className="flex max-w-md flex-col gap-4">
          <h1 className="text-2xl dark:text-white">Generate your Demotivational Poster</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Title" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={posterTitle} onChange={(e) => setPosterTitle(e.target.value)} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="caption" value="Caption" />
            </div>
            <TextInput id="caption" type="text" sizing="md" value={posterCaption} onChange={(e) => setPosterCaption(e.target.value)} />
          </div>
          <div>
            <div>
              <Label htmlFor="file-upload-helper-text" value="Upload file" />
            </div>
            <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
          </div>
          <Button outline gradientDuoTone="greenToBlue" >Generate!</Button>
        </form>

        <div id="result" className="mb-8 flex flex-col justify-center items-center w-[960px] h-[720px] bg-black">

          <div className="border-2 border-white w-3/4 h-[55%]">
            <div className="border-4 border-transparent w-full h-full" style={{ position: 'relative' }}>
              <Image src={imageFile} alt="image" fill
                style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="flex flex-col h-auto justify-around items-center">
            <h1 className={`m-4 text-base text-gray-900 dark:text-white ${timesNewRoman.className}`}>
              {formatTitle(posterTitle)}
            </h1>
            <p className={`uppercase ${centuryGothic.className}`}>{posterCaption}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
