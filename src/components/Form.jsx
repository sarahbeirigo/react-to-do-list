import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa a biblioteca prop-types
import { Add } from './icons/Add';

export function Form({ onSubmit }) {
    const [state, setState] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state) {
            onSubmit(state);
            setState("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row w-full gap-4 mt-4">
                <input
                    className="h-[50px] flex-1 rounded-lg p-3 text-lg outline-none"
                    onChange={(event) => setState(event.target.value)}
                    value={state}
                />
                <button
                    className="h-[50px] pl-4 pr-4 bg-slate-400 rounded-lg font-bold"
                    type="submit"
                >
                    <Add className="text-slate-900 text-2xl" />
                </button>
            </div>
        </form>
    );
}

// Validação das props
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired, // Especifica que onSubmit é uma função obrigatória
};
