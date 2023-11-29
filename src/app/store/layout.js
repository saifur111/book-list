

import Sidebar from "../ui/sidebar/Sidebar"
import StoreProvider from "../provider"

export const metadata = {
  title: 'Book Shop',
  description: 'An Online Bookstore to Sell and Rent Used Books',
}

export default function BookStoreLayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
        <Sidebar />
        <div className="flex flex-wrap p-2 justify-center">
          {children}
        </div>  
      </div>
    </StoreProvider>
  )
}
