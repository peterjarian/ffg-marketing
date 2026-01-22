import { allPosts } from "content-collections";
import Image from "next/image";

export default function Page() {
  const mainContent = allPosts.find((post) => post._meta.path === "main");

  if (!mainContent) {
    return <div>Content not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
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
