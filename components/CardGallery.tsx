import { Card } from "flowbite-react";

type CardData = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type CardGalleryProps = {
  cards: CardData[];
};

export default function CardGallery({ cards }: CardGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cards.map((card, index) => (
        <a href={card.link} key={index} target="_blank" rel="noopener noreferrer">
          <Card imgSrc={card.image}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {card.title}
            </h5>
            <p className="text-gray-700 dark:text-gray-400">{card.description}</p>
          </Card>
        </a>
      ))}
    </div>
  );
}