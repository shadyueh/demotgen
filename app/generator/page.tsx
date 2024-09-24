"use client"

import { Label, TextInput, FileInput, Button, DarkThemeToggle } from "flowbite-react";
import Image from "next/image";
import { useRef, useState } from 'react';
import localFont from 'next/font/local';
import * as htmlToImage from 'html-to-image';

const timesNewRoman = localFont({
  src: '../fonts/times-new-roman.woff',
  display: 'auto',
})

const centuryGothic = localFont({
  src: '../fonts/century-gothic.woff',
  display: 'auto',
})

export default function DemotivationalPoster() {

  const [imageFile, setImageFile] = useState("/images/pexels-chetanvlad-1529360.jpg")
  const [posterTitle, setPosterTitle] = useState("Irresponsabilidade")
  const [posterCaption, setPosterCaption] = useState("Nenhuma Gota de Chuva Acredita ser a Culpada pela Inundação")
  const printRef = useRef<HTMLDivElement>(null);

  // formata titulo do poster
  const formatTitle = (title: string) => {
    return (
      <>
        <span className="inline-block align-top text-6xl tracking-wider leading-[3.5rem] uppercase">{title.substring(0, 1)}</span>
        <span className="inline-block align-top text-5xl tracking-wider border-b-2 uppercase">{title.substring(1, title.length - 1)}</span>
        <span className="inline-block align-top text-6xl tracking-wider leading-[3.5rem] uppercase">{title.substring(title.length - 1)}</span>
      </>
    )
  }

  const handleDownloadImage = async () => {
    const element = printRef.current as HTMLElement
    const link = document.createElement('a');
    const dataUrl = await htmlToImage.toPng(element)

    if (typeof link.download === 'string') {
      link.href = dataUrl;
      link.download = 'downloaded-demotivational-poster.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(dataUrl);
    }
  }

  return (
    <div className="flex flex-col min-h-dvh  dark:bg-gray-800">
      <main className="flex flex-col h-full items-center gap-2">
        <h1 className="text-2xl dark:text-white">Generate your Demotivational Poster <DarkThemeToggle /></h1>

        <form className="flex flex-col gap-4  min-w-[95%] sm:min-w-[960px] mx-auto p-4 border-2 border-cyan-600 rounded-lg ">
          <div className="grid gap-4 sm:grid-cols-3">

            <div className="w-full">
              <Label htmlFor="base" value="Title" className="mb-2 block" />
              <TextInput id="base" type="text" sizing="md"
                value={posterTitle} onChange={(e) => setPosterTitle(e.target.value)} />
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="file-upload-helper-text" value="Upload image" className="mb-2 block" />
              <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
            </div>

            <div className="sm:col-span-3">
              <Label htmlFor="caption" value="Caption" className="mb-2 block" />
              <TextInput id="caption" type="text" sizing="md" value={posterCaption} onChange={(e) => setPosterCaption(e.target.value)} />
            </div>

          </div>
        </form>

        <div ref={printRef} className="flex flex-col justify-center items-center w-[960px] h-[720px] bg-black">

          <div className="border-2 border-white w-[732px] h-[417px]">
            <div className="border-4 border-transparent w-full h-full" style={{ position: 'relative' }}>
              <Image src={imageFile} alt="image" fill
                style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div className="flex flex-col sm:max-w-[720px] max-h-[184px] justify-around items-center overflow-hidden">
            <h1 className={`m-4 text-base text-gray-900 dark:text-white ${timesNewRoman.className}`}>
              {formatTitle(posterTitle)}
            </h1>
            <p className={`text-2xl text-center ${centuryGothic.className}`} style={{ fontVariantCaps: "small-caps" }}>{posterCaption}</p>
          </div>
        </div>

        <Button outline gradientDuoTone="greenToBlue" onClick={handleDownloadImage} className="m-8">Download as Image</Button>

      </main>
    </div>
  );
}
