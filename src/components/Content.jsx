import PropTypes from 'prop-types';

export function Content({ children }) {
    return (
        <div className="bg-blue max-w-[600px] w-[80%] max-h-[calc(100vh-48px)] mt-6 mb-6 overflow-auto scrollbar-hide bg-slate-700 rounded-2xl p-4">
            {children}
        </div>
    );
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
};
