import "../assets/css/Button.css";

export function Button({ children, className, onClick }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}