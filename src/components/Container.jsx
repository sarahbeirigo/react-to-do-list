import PropTypes from 'prop-types';

export function Container({ children }) {
    return (
        <div className="w-screen h-screen flex flex-col justify-start items-center">
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
