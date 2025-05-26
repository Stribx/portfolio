import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import ZoomableImage from "./zoomable-image";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: keyof typeof Icons;
    type: string;
    href?: string;
  }[];
  className?: string;
  ariaLabel: string;
  images: string[];
}

export default function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  ariaLabel,
  images,
}: Props) {
  const htmlDescription = marked.parse(description);

  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out size-full"
      }
    >
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
        />
      )}
      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      )}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-6">
            <div
              dangerouslySetInnerHTML={{ __html: htmlDescription }}
              className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, idx) => {
              const IconComponent = Icons[link.icon];
              const badge = (
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  <IconComponent className="h-4 w-4" />
                  {link.type}
                </Badge>
              );
              return link.href ? (
                <Link href={link.href} key={idx} target="_blank">
                  {badge}
                </Link>
              ) : (
                <div key={idx}>{badge}</div>
              );
            })}
          </div>
        )}
      </CardFooter>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">informations</Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl w-full grid gap-6">
          <DialogHeader className="md:col-span-2">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{dates}</DialogDescription>
          </DialogHeader>

          <ScrollArea className="h-64 p-4 border rounded-md">
            <div className="prose max-w-none text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: htmlDescription }}
                className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
              />
            </div>
          </ScrollArea>

          <DialogFooter className="md:col-span-2 flex sm:justify-between">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Images</Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full grid gap-6">
                <DialogHeader className="md:col-span-2">
                  <DialogTitle>{title}</DialogTitle>
                  <DialogDescription>{dates}</DialogDescription>
                </DialogHeader>
                <div className="relative w-full h-64 p-4 rounded-md md:col-span-2">
                  {images.length > 1 ? (
                    <Carousel className="h-64">
                      <CarouselContent className="h-64">
                        {images.map((imgSrc, idx) => (
                          <CarouselItem className="h-full" key={idx}>
                            <ZoomableImage
                              src={imgSrc}
                              alt={`${title} image ${idx + 1}`}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                    </Carousel>
                  ) : images.length === 1 ? (
                    <div className="flex justify-center items-center h-64">
                      <ZoomableImage src={images[0]} alt={`${title} image`} />
                    </div>
                  ) : null}
                </div>
                <DialogFooter className="flex w-full justify-start">
                  <DialogClose asChild>
                    <Button variant="secondary">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
