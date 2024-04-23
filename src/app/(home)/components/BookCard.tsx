import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border border-neutral-800 p-5 shadow-md rounded">
      <Image
        src={book.coverImage.url}
        alt={book.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "12rem" }}
      />

      <div>
        <h2 className="line-clamp-2 text-xl font-bold text-neutral-200 text-balance">
          {book.title}
        </h2>
        <p className="font-medium text-neutral-300 mt-1">
          {book?.author?.name}
        </p>
        <Link
          href={`/book/${book._id}`}
          className="py-1 px-2 rounded border border-primary-500 mt-4 inline-block hover:text-primary-500  text-neutral-300 font-medium text-sm
                    hover:border-primary-100 hover:bg-primary-100 transition"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
