import React, { useEffect, useState } from "react";
import '../assets/css/SearchModal.css'
import { fetchSearch, clearSearch } from "../features/searchSlice/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import { ShimmerText } from "react-shimmer-effects";
import noDataFoundImg from '../assets/images/noDataFound.jpg'


const SearchModal = () => {
    const [search, setSearch] = useState("");
    const [hoverIndex, setHoverIndex] = useState(null);
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.search);
    const navigate = useNavigate();

    useEffect(() => {
        const delay = setTimeout(() => {
            if (search.trim().length >= 2) {
                dispatch(fetchSearch(search));
            } else {
                dispatch(clearSearch());
            }
        }, 300); // 🔥 realtime delay

        return () => clearTimeout(delay);
    }, [search, dispatch]);


    const cleanHTML = (html) => {
        if (!html) return "";

        // Step 1: sanitize
        const clean = DOMPurify.sanitize(html, {
            FORBID_ATTR: ["style", "class"],
        });

        // Step 2: remove unnecessary spans
        const parser = new DOMParser();
        const doc = parser.parseFromString(clean, "text/html");

        // unwrap span inside td/th
        doc.querySelectorAll("td span, td p, th span").forEach((span) => {
            const parent = span.parentNode;

            // move text up and remove span
            parent.replaceChild(document.createTextNode(span.textContent), span);
        });

        return doc.body.innerHTML;
    };

    useEffect(() => {
        const modal = document.getElementById("searchModal");

        modal?.addEventListener("hidden.bs.modal", () => {
            setSearch("");
            dispatch(clearSearch());
        });

        return () => {
            modal?.removeEventListener("hidden.bs.modal", () => { });
        };
    }, []);

    return (
        <>
            {/* Modal */}
            <div
                className="modal fade CustomSearchModal"
                id="searchModal"
                tabIndex="-1"
                aria-labelledby="searchModalLabel"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="serchResultWrapper" id="searchWrapper">

                                {/* Search Input */}
                                <div className="serchInputWrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17 17L21 21" stroke="#000F1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="#000F1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <input
                                        type="text"
                                        id="productSearchInput"
                                        placeholder="Search part numbers..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        onClick={() => {
                                            setSearch("");
                                            dispatch(clearSearch());
                                        }}
                                    ></button>
                                </div>

                                {/* Results */}
                                <div className="results-wrapper" >
                                    {loading && <div className="shimmer-wrapper">
                                        {Array(2)
                                            .fill("")
                                            .map((_, index) => (
                                                <div className="results-card" key={index}>
                                                    <div className="results-content">
                                                        <div className="product-result">
                                                            <ShimmerText className="productImageShimmer-box" line={1} />
                                                            <div className="product-content">
                                                                <ShimmerText className="productTitleShimmer-box" line={1} />
                                                                <ShimmerText className="productDescriptionShimmer-box" line={1} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>}

                                    {!loading &&
                                        data?.data?.map((item, index) => (
                                            <div className="results-card" key={index}
                                                onMouseEnter={() => setHoverIndex(index)}
                                                onMouseLeave={() => setHoverIndex(null)}
                                                onClick={() =>
                                                    navigate(`${item?.permalink}`,
                                                        setSearch(""),
                                                        dispatch(clearSearch())
                                                    )}
                                                data-bs-dismiss="modal"
                                            >
                                                <div className="results-content">
                                                    <div className="product-result">
                                                        {hoverIndex === index &&
                                                            <img
                                                                className="product-image"
                                                                src={item?.main_image}
                                                                alt={item?.product_name}
                                                                loading="lazy"
                                                                style={{
                                                                    width: "192px",
                                                                    background: "white",
                                                                    borderRadius: "10px",
                                                                }}
                                                            />
                                                        }

                                                        <div className="product-content">
                                                            <span className="product-title">
                                                                {item?.product_name}
                                                            </span>
                                                            {hoverIndex === index &&
                                                                <p className="product-description" dangerouslySetInnerHTML={{
                                                                    __html: cleanHTML(item?.short_description)
                                                                }}
                                                                />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    {!loading && search && data?.data?.length === 0 && (
                                        <div className="results-card NoDataFound">
                                            <div className="results-content">
                                                <div className="product-result">
                                                    <img
                                                        className="product-image"
                                                        src={noDataFoundImg}
                                                        loading="lazy"
                                                    />
                                                    <div className="product-content">
                                                        <span className="product-title">
                                                            No Data Found
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SearchModal;


// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSearch, clearSearch } from "../features/searchSlice/searchSlice";

// const SearchModal = () => {

//     return (
//         <div className="serchResultWrapper">

//             <input
//                 type="search"
//                 placeholder="Search part numbers..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//             />

//             <div className="results-wrapper">

//                 {loading && <p>Loading...</p>}

//                 {!loading &&
//                     data?.map((item, index) => (
//                         <div key={index} className="results-card">
//                             <img src={item.main_image} alt="" />
//                             <span>{item.product_name}</span>
//                         </div>
//                     ))}

//                 {!loading && search && data.length === 0 && (
//                     <p>No results found</p>
//                 )}

//             </div>

//         </div>
//     );
// };

// export default SearchModal;