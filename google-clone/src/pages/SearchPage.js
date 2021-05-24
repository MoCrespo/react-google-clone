import React from 'react'
import GoogleSearch from '../GoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import Search from "../components/Search";
function SearchPage() {
    const [{ term='tesla' }, dispatch ] = useStateValue();
    // Live API Call 
    const { data } = GoogleSearch(term);
    // Mock API Call
    // const data = Response;


    console.log(data)

    return (
        <div className="searchPage"> 
            <div className="searchPage__header">
                <Link to="/">
                <img className="searchPage__logo"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt="googlelogo"
                />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons />
                </div>
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ( {data?.searchInformation.formattedSearchTime} seconds ) for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage__result" >
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <a className="searchPage__resultLink" href={item.link}>
                               
                            {item.displayLink}
                            </a>
                            
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>

            )}
        </div>
    )
}

export default SearchPage
