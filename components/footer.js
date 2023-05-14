import Dropzone from "components/dropzone";
import {
  Code as CodeIcon,
  Download as DownloadIcon,
  Info as InfoIcon,
  XCircle as StartOverIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer({ events, startOver, handleImageDropped }) {
  return (
    <footer className="w-full my-8">
      <div className="text-center">
        <Link href="/about-this">
          <a className="lil-button">
            <InfoIcon className="icon" />
            What is this?
          </a>
        </Link>

        {events.length > 1 && (
          <button className="lil-button" onClick={startOver}>
            <StartOverIcon className="icon" />
            Start over
          </button>
        )}

        <Dropzone onImageDropped={handleImageDropped} />

        {events.length > 2 && (
          <Link href={events.findLast((ev) => ev.image).image}>
            <a className="lil-button" target="_blank" rel="noopener noreferrer">
              <DownloadIcon className="icon" />
              Download image
            </a>
          </Link>
        )}

        <Link href="https://github.com/sidicodet/paint-by-text-AI">
          <a className="lil-button" target="_blank" rel="noopener noreferrer">
            <CodeIcon className="icon" />
            Fork repo
          </a>
        </Link>
      </div>

      <div className="text-center lil-text mt-8">
      <div className="inline-block py-2 px-4 border border-yellow-200 rounded-lg bg-[#fef6aa]">
      🤔 Are you a developer and you want to learn how to build this? Check out the{" "}
        <Link href="https://github.com/sidicodet/paint-by-text-AI#readme">
          <a target="_blank">README</a>
        </Link>.
      </div>
      </div>

      <div className="text-center lil-text mt-8">
        Created by{" "}
        <Link href="https://sidicode.org.ng">
          <a target="_blank">Sidicode</a>
        </Link>
        , and{" "}
        <Link href="https://github.com/sidicodet/paint-by-text-AI">
          <a target="_blank">GitHub</a>
        </Link>
      </div>
    </footer>
  );
}
