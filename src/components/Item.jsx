import PropTypes from 'prop-types'; // Importa a biblioteca prop-types
import { Check } from './icons/Check'; // Certifique-se de que os nomes dos arquivos estão corretos
import { Unchecked } from './icons/Uncheked';

export function Item({ text, completed, onClick }) {
    return (
        <div
            onClick={onClick}
            className="flex flex-row min-h-[50px] w-full items-center cursor-pointer hover:bg-slate-600 bg-slate-800 mb-1 rounded-lg p-3"
        >
            {completed ? (
                <Check className="text-white text-3xl mr-3" />
            ) : (
                <Unchecked className="text-white text-3xl mr-3" />
            )}
            <label className="text-white text-xl">{text}</label>
        </div>
    );
}

// Validação das props
Item.propTypes = {
    text: PropTypes.string.isRequired, // Especifica que text é uma string obrigatória
    completed: PropTypes.bool.isRequired, // Especifica que completed é um booleano obrigatório
    onClick: PropTypes.func.isRequired, // Especifica que onClick é uma função obrigatória
};
