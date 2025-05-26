import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function ZoomableImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={src}
          alt={alt}
          width={900}
          height={540}
          className="object-contain max-h-[80vh] w-auto rounded-md"
        />
      </DialogTrigger>

      <DialogContent className="border-0 size-full max-w-full sm:max-w-full rounded-none">
        <DialogHeader>
          <DialogTitle>{alt}</DialogTitle>
        </DialogHeader>
        <Image
          src={src}
          alt={alt}
          fill={true}
          className="h-64 p-4 border rounded-md max-w-full object-contain aspect-square"
        />
      </DialogContent>
    </Dialog>
  );
}
