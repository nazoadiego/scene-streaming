const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="mt-8 inline-flex w-full justify-center space-x-4">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className="rounded-full px-4 py-2 text-xl transition hover:bg-gray-700"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
