import Link from "next/link";

interface VideoCardProps {
  videoId: string;
  title: string;
  date: string;
}

export default function VideoCard({ videoId, title, date }: VideoCardProps) {
  return (
    <li className="flex-1 flex flex-col fadeInUp">
      <div className="aspect-video overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          className="w-full h-full transition-transform duration-300 hover:scale-110 cursor-pointer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="flex-1 flex flex-col pt-10 gap-y-15 text-gray-900 max-sm:gap-y-8">
        <Link
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="heading01B max-sm:heading04B hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="body01M max-md:heading04M">{date}</p>
      </div>
    </li>
  );
}
