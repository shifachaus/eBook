import Banner from "@/app/(home)/components/Banner";
import BookList from "./(home)/components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </>
  );
}
