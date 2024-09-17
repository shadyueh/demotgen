"use client"

import { Label, TextInput, FileInput, Button, DarkThemeToggle } from "flowbite-react";
import Image from "next/image";
import { useState } from 'react';

export default function Home() {

  const [imageFile, setImageFile] = useState("/images/pexels-alohaphotostudio-5901269.jpg")
  const [posterTitle, setPosterTitle] = useState("Irresponsabilidade")
  const [posterCaption, setPosterCaption] = useState("Nenhuma gota d'água se sente responsável pela inundação")

  return (
    <div className="flex flex-col h-dvh">
      <main className="flex flex-col h-full items-center gap-2 dark:bg-gray-800">

        <DarkThemeToggle />

        <form className="flex max-w-md flex-col gap-4">
          <h1 className="text-2xl dark:text-white">Generate your Demotivational Poster</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Title" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={posterTitle} onChange={(e)=>setPosterTitle(e.target.value)}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="caption" value="Caption" />
            </div>
            <TextInput id="caption" type="text" sizing="md" value={posterCaption} onChange={(e)=>setPosterCaption(e.target.value)} />
          </div>
          <div>
            <div>
              <Label htmlFor="file-upload-helper-text" value="Upload file" />
            </div>
            <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
          </div>
          <Button outline gradientDuoTone="greenToBlue" >Generate!</Button>
        </form>

        <div id="result" className="min-w-full h-full flex justify-center">
          <div className="flex flex-col w-[800px]  h-[600px] bg-black items-center">
            <h1 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">{posterTitle}</h1>
            <Image src={imageFile} width={640} height={480} alt="image" />
            <p>{posterCaption}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
