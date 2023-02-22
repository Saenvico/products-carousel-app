interface FilterProps {
  categories: string[];
  onFilterChange: (event: any) => void;
}

const Filter: React.FC<FilterProps> = (props) => {
  const { categories, onFilterChange } = props;

  return (
    <div className="filter">
      {categories.map((type) => (
        <div key={type} className="checkbox">
          <label className="checkbox__label">
            <input
              type="checkbox"
              value={type}
              className="checkbox__button"
              onChange={onFilterChange}
            />
            <span>{type}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
