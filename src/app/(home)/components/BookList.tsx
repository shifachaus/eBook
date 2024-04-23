import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3  max-w-7xl mx-auto mb-10 p-4">
      {books.map((book) => {
        return <BookCard key={book._id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
