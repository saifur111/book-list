import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import NewBookForm from "./components/NewBookForm";
import BookContextProvider from "./contexts/BookContext";


export default function Home() {
  return (
    <div>
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  )
}
