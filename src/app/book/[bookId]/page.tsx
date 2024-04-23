import { Book } from "@/types";
import Image from "next/image";
import React from "react";
import DownloadButton from "./components/DownloadButton";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  let book: Book | null = null;
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/${params.bookId}`
    );
    if (!response.ok) {
      throw new Error("Error fetching book");
    }
    book = await response.json();
  } catch (err: any) {
    throw new Error("Error fetching book");
  }

  if (!book) {
    throw new Error("Book not found");
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-20 h-screen">
      <div className="col-span-2 pr-16 ">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1] text-neutral-300">
          {book.title}
        </h2>
        <span className="font-medium  text-sm text-primary-500">
          by {book.author.name}
        </span>
        <p className="mt-5 text-md text-neutral-300 leading-8">
          {book.description}
        </p>
        <DownloadButton fileLink={book.file.url} />
      </div>
      <div className="flex justify-end">
        <Image
          src={book.coverImage.url}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "300px" }}
        />
      </div>
    </div>
  );
};

export default SingleBookPage;
