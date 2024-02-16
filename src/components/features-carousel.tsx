import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const carouselData = [
  {
    img: "/img1.jpg",
    title: "Lower Interest Rate",
  },
  {
    img: "/img2.jpg",
    title: "Interest Free Payments",
  },
  {
    img: "/img3.jpg",
    title: "Discount on Materials",
  },
  {
    img: "/img1.jpg",
    title: "Lower Interest Rate",
  },
];

export function FeaturesCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="mx-auto w-[70%] lg:w-full"
    >
      <CarouselContent>
        {carouselData.map((carouselItem, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden border border-[#2BB69C]">
                <CardContent className="aspect-square p-0">
                  <img src={carouselItem.img} alt={carouselItem.title} />
                  <div className="px-6 py-4 text-center">
                    <span className="gradient-text text-xl font-medium">
                      {carouselItem.title}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
