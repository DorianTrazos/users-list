import { StyledFilters } from './filters.styles';

const Filters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => {
	return (
		<StyledFilters>
			<input value={search} onInput={event => setSearch(event.target.value)} />
			<div>
				<label htmlFor='only-active'>Sólo activos</label>
				<input
					type='checkbox'
					id='only-active'
					checked={onlyActive}
					onChange={event => setOnlyActive(event.target.checked)}
				/>
			</div>
			<select value={sortBy} onChange={event => setSortBy(event.target.value)}>
				<option value='default'>Por Defecto</option>
				<option value='name'>Por Nombre</option>
			</select>
		</StyledFilters>
	);
};

export default Filters;
