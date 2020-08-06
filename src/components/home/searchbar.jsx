import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';
import SearchNews from '../news/searchNews/searchNews';
import './home.css'

function SearchBar() {
    const [search, setSearch] = React.useState("");
    const [submit, setSubmit] = React.useState(false);
    const [redirected, setRedirected] = React.useState(false);

    const submitSearch = () => {
        setSubmit(true);
        setRedirected(true);
    }

    const clickedSearch = clicked => {
        setSubmit(clicked);
    }

    const onKeyPress = event => {
        if (event.which === 13 /* Enter */) {
            event.preventDefault();
        }
    }

    return (
        <div className="center">
            <h1 className="text-center display-3 mt-5 mb-5">Welcome to Current News</h1>
            <form className="form-inline input-group m-auto" onKeyPress={onKeyPress}>
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>

                <input className="form-control my-0 py-1 w-50"
                    type="text"
                    placeholder="search for news"
                    aria-label="Search"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />

                <Button className="ml-3"
                    variant="primary"
                    value="Submit"
                    onClick={submitSearch}>Search
                </Button>
            </form>

            <SearchNews
                search={search}
                isSubmitted={submit}
                clickedSearch={clickedSearch}
                redirected={redirected}
            />
        </div>
    );
}

export default SearchBar;