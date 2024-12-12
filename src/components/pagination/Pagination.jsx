const Pagination = ({
	page,
	totalPages,
	itemsPerPage,
	setItemsPerPage,
	setPage
}) => {
	const isFirstPage = page === 1;
	const isLastPage = page === totalPages;
	return (
		<>
			<button disabled={isFirstPage} onClick={() => setPage(page - 1)}>
				Previous Page
			</button>

			<select
				value={itemsPerPage}
				onChange={e => {
					setItemsPerPage(e.target.value);
					setPage(1);
				}}
			>
				<option value={2}>2</option>
				<option value={4}>4</option>
				<option value={8}>8</option>
			</select>

			<span>
				Página {page} de {totalPages}
			</span>

			<button disabled={isLastPage} onClick={() => setPage(page + 1)}>
				Next Page
			</button>
		</>
	);
};

export default Pagination;
