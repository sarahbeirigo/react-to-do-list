import PropTypes from 'prop-types'; // Importa a biblioteca prop-types
import { Check } from './icons/Check';
import { Unchecked } from './icons/Uncheked';

function FilterItem({ label, checked, onClick }) {
    return (
        <button onClick={onClick} className="flex flex-row items-center flex-1 bg-slate-800 px-3 py-1 rounded-full hover:bg-slate-600">
            {checked ? <Check className="mr-3 text-xl" /> : <Unchecked className="mr-3 text-xl" />}
            {label}
        </button>
    );
}

FilterItem.propTypes = {
    label: PropTypes.string.isRequired, // Especifica que label é uma string obrigatória
    checked: PropTypes.bool,
    onClick: PropTypes.func,
};

export function Filters({ filter, setFilter }) {
    return (
        <div className=" flex flex-row w-full gap-1 mt-4 text-white text-lg">
            <FilterItem 
                label="Todos"
                checked={filter === "all"}
                onClick={() => setFilter("all")}
            />
            <FilterItem
                label="Pendentes"
                checked={filter === "uncompleted"}
                onClick={() => setFilter("uncompleted")}
            />
            <FilterItem
                label="Concluídos"
                checked={filter === "completed"}
                onClick={() => setFilter("completed")}
            />
        </div>
    );
}

// Validação das props
Filters.propTypes = {
    filter: PropTypes.oneOf(["all", "completed", "uncompleted"]).isRequired, // Especifica que filter deve ser um dos valores permitidos
    setFilter: PropTypes.func.isRequired, // Especifica que setFilter é uma função obrigatória
};
