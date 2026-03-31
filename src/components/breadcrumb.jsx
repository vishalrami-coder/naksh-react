import "../assets/css/breadcrumb.css";
import { useLocation, Link } from "react-router-dom";

function Breadcrumb({ backgroundImage }) {
    const location = useLocation();

    // 🔥 unwanted paths remove (customize as per your project)
    const pathnames = location.pathname
        .split("/")
        .filter(
            (x) =>
                x &&
                x !== "nakshNewPage" && // remove this
                x !== "naksh"           // remove this
        );

    // 🔥 slug → readable text
    const formatText = (text) => {
        return text
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <section
            className="cs_page_heading cs_bg_filed cs_center cs_primary_bg text-center"
            style={{
                backgroundImage:
                    backgroundImage
            }}
        >
            <div className="container">
                {/* 🔥 Page Title */}
                <h1 className="cs_white_color cs_semibold cs_mb_10 cs_fs_64">
                    {formatText(pathnames[pathnames.length - 1] || "Home")}
                </h1>

                {/* 🔥 Breadcrumb */}
                <ol className="breadcrumb d-flex justify-content-center align-items-center flex-wrap">
                    {/* Home */}
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>

                    {pathnames.map((name, index) => {
                        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li
                                className="breadcrumb-item d-flex align-items-center"
                                key={routeTo}
                            >
                                {/* Arrow */}
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.8425 5.9289H11.8162C11.9212 5.82798 12 5.67661 12 5.5C12 5.34862 11.9475 5.19725 11.8425 5.0711L6.7221 0.176605C6.59081 0.0756881 6.43326 0 6.27571 0C6.0919 0 5.93435 0.0756881 5.82932 0.176605L5.25164 0.731651C5.12035 0.857798 5.06783 1.00917 5.06783 1.16055C5.06783 1.33716 5.12035 1.48853 5.25164 1.58945L9.2954 5.5L5.25164 9.41055C5.09409 9.5367 5.04158 9.68807 5.04158 9.83945C5.04158 10.0161 5.09409 10.1674 5.25164 10.2683L5.82932 10.8234C5.93435 10.9495 6.0919 11 6.27571 11C6.43326 11 6.59081 10.9495 6.7221 10.8234L11.8425 5.9289ZM6.80088 5.0711H6.77462C6.87965 5.19725 6.95842 5.34862 6.95842 5.5C6.95842 5.67661 6.90591 5.82798 6.80088 5.9289L1.68053 10.8234C1.54923 10.9495 1.39168 11 1.23414 11C1.05033 11 0.892779 10.9495 0.787746 10.8234L0.210066 10.2683C0.0787746 10.1674 0.0262582 10.0161 0.0262582 9.83945C0.0262582 9.68807 0.0787746 9.5367 0.210066 9.41055L4.25383 5.5L0.183807 1.58945C0.0525164 1.48853 0 1.33716 0 1.16055C0 1.00917 0.0525164 0.857798 0.210066 0.731651L0.787746 0.176605C0.892779 0.0756881 1.05033 0 1.23414 0C1.39168 0 1.54923 0.0756881 1.68053 0.176605L6.80088 5.0711Z"
                                        fill="white"
                                    />
                                </svg>

                                {/* Link / Active */}
                                {isLast ? (
                                    <span className="text-white fw-bold">
                                        {formatText(name)}
                                    </span>
                                ) : (
                                    <Link to={routeTo}>{formatText(name)}</Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}

export default Breadcrumb;