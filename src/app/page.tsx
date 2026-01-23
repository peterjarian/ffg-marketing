import { allPosts } from "content-collections";
import Image from "next/image";

export default function Page() {
  const mainContent = allPosts.find((post) => post._meta.path === "main");

  if (!mainContent) {
    return <div>Content not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Melding over stemmen */}
      <div className="mb-8 p-4 bg-primary/10 border-2 border-primary/30 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-primary mb-1">
              Over het stemmen
            </h3>
            <p className="text-sm text-foreground/90">
              De instructies over hoe je kunt stemmen komen hier te staan zodra
              het stemmen open is. De QR-code verwijst naar deze website met de
              tekst &quot;stem op ons&quot; - dit is een voorvertoning. Zodra
              het stemmen open gaat, zullen hier de volledige steminstructies
              verschijnen.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <Image
          src="/ffg.png"
          alt="Future Food Garden Logo"
          width={150}
          height={150}
          className="object-contain"
          priority
        />
      </div>
      <div
        className="markdown-content mx-auto"
        dangerouslySetInnerHTML={{ __html: mainContent.html }}
      />
    </div>
  );
}
