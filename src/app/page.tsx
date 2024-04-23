import Banner from "@/app/(home)/components/Banner";
import BookList from "./(home)/components/BookList";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/books/`);

  if (!response.ok) {
    throw new Error("An error occur while fetchingthe books");
  }

  const books = await response.json();

  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
