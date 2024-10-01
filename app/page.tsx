"use client"

import Header from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import CardGallery from "@/components/CardGallery";

export default function Home() {

  const cardsData = [
    {
      title: "Demotivational Posters",
      description: "Create your own demotivational poster",
      image: "https://via.placeholder.com/150",
      link: "/generator"
    },
    {
      title: "Card 2",
      description: "This is the second card in the gallery.",
      image: "https://via.placeholder.com/150",
      link: "#"
    },
    {
      title: "Card 3",
      description: "This is the third card in the gallery.",
      image: "https://via.placeholder.com/150",
      link: "#"
    },
    // Add more card data
  ];

  return (
    <div className="flex flex-col h-dvh">

      <Header />

      <main className="flex flex-col h-full items-center justify-center gap-2 bg-white dark:bg-gray-800">
        <CardGallery cards={cardsData} />
      </main>

      <TheFooter />
      
    </div>
  );
}
