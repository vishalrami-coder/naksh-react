import '../assets/css/ProductTabs.css'
import React, { useState } from "react";
import ProductCard from './productCard';
import { useNavigate } from 'react-router-dom';
import { useParams, useLocation } from "react-router-dom";

const ProductTabs = ({ tabsData }) => {
    const { "*": fullPath } = useParams();
    const slugs = fullPath?.split("/") || [];
    const slug = slugs[slugs?.length - 1];
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="productSec Custompending">
            <div className="container">
                <div className="TechnicalDetailsTabingWrapper pt-0">
                    <ul className="nav nav-pills MainPageTab">
                        {tabsData.map((tab, index) => (
                            <li className="nav-item" key={index}>
                                <button
                                    className={`nav-link ${activeTab === index ? "active" : ""}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* Tab Content */}
                    <div className="tab-content">
                        {tabsData.map((tabs, index) => (
                            <div
                                key={index}
                                className={`tab-pane fade ${activeTab === index ? "show active" : ""
                                    }`}
                            > <div className="productGrid">
                                    {tabs?.products.map((tabItem, tabindex) => (
                                        <ProductCard key={tabindex}
                                            image={tabItem?.main_image}
                                            title={tabItem?.product_name}
                                            brand={tabItem?.group_name}
                                            onClick={() => {
                                                 navigate(`/productsdetails/${fullPath}/${tabItem?.slug}`)
                                                // navigate(`/products/${fullPath}/${tabItem?.slug}`)
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTabs;