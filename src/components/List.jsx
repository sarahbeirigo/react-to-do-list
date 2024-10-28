import PropTypes from 'prop-types';

export function List({ children }) {
    return (
        <div className="flex flex-col justify-start items-center mt-4">
            {children}
        </div>
    );
}

List.propTypes = {
    children: PropTypes.node.isRequired,
};
