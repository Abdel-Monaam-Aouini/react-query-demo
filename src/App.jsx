import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AppContextProvider } from './store/app-context'

import Navbar from './layout/Navbar'
import BasicQuery from './views/BasicQuery'
import InfiniteQuery from './views/InfiniteQuery'
import PaginatedQuery from './views/PaginatedQuery'
import CreateUser from './views/CreateUser'
import EditUser from './views/EditUser'

function App() {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main className="container p-4 mx-auto mt-8 lg:w-screen-lg">
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <Routes>
              <Route path="/" exact={true} element={<BasicQuery />} />
              <Route path="/paginated" element={<PaginatedQuery />} />
              <Route path="/infinite" element={<InfiniteQuery />} />
              <Route path="/user/create" element={<CreateUser />} />
              <Route path="/user/edit/:id" element={<EditUser />} />
            </Routes>
          </AppContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </React.Fragment>
  )
}

export default App
