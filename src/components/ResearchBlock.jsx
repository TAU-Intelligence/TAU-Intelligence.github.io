import React from 'react';

const ResearchBlock = ({ title, pdfUrl, webpageUrl, date, Author, description, isNew, Urlgif1, Urlgif2 }) => {
    return (
        <div className="research-block">
            <div className="research-content">
                {isNew && <span className="new-tag"> New </span>}
                <h3 className="research-title"> {title}</h3>
                
                {/* PDF link added ahead of date */}
                {pdfUrl && (
                    <a
                        href={pdfUrl}
                        rel="noopener noreferrer"
                        className="pdf-link"
                    >
                        [pdf]
                    </a>
                )}
                {/* PDF link added ahead of date */}
                {webpageUrl && (
                    <a
                        href={webpageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pdf-link"
                    >
                        [webpage]
                    </a>
                )}
                
                <span className="research-date">{date}</span>

                {Author && (
                    <div className="research-author">
                        Author: {Author}
                    </div>
                )}

                {/* wrap the part to collapse */}
                <div className="research-details">
                    <p className="research-description">
                        <b>Abstract:</b> {description}
                    </p>
                    <div className="gif-container">
                        <img src={Urlgif1} alt="gif1" className="gif" />
                        <img src={Urlgif2} alt="gif2" className="gif" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .research-block {
                    background-color: var(--light-orange);
                    border-radius: 4px;
                    margin-bottom: 1.5rem;
                    color: #000;
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .research-block:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(230, 116, 23, 0.3);
                }
                .research-content {
                    padding: 1.5rem;
                    position: relative;
                }
                .new-tag {
                    position: relative;
                    display: inline-block;
                    padding: 0.25rem 0.5rem;
                    font-size: 0.8rem;
                    font-weight: bold;
                    color: #fff;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                    backdrop-filter: blur(4px);
                    overflow: hidden;
                }
                .new-tag::before {
                    content: "";
                    position: absolute;
                    top: -50%;
                    left: -75%;
                    width: 50px;
                    height: 200%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: skewX(-20deg);
                    animation: shine 2s infinite;
                }
                @keyframes shine {
                    0% {
                        transform: skewX(-20deg) translateX(-100%);
                    }
                    100% {
                        transform: skewX(-20deg) translateX(200%);
                    }
                }
                .research-title {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                    display: inline;
                }
                .pdf-link {
                    margin: 0 0.5rem;
                    font-size: 1rem;
                    color:rgb(252, 2, 2);
                    // text-decoration: underline;
                }
                .research-date {
                    font-size: 1rem;
                    opacity: 0.8;
                    float: right;
                }

                /* COLLAPSIBLE DETAILS */
                .research-details {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease, opacity 0.3s ease;
                }
                .research-block:hover .research-details {
                    max-height: 800px; /* big enough to fit content */
                    opacity: 1;
                }

                .research-description {
                    margin-top: 1rem;
                }
                .gif-container {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .gif {
                    max-width: 49%;
                    height: auto;
                }
            `}</style>
        </div>
    );
};

export default ResearchBlock;
