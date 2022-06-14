import React from "react";

function SearchForm() {

    return (
        <section className="section search">
            <form className="search-form" >
                <div className="form-control">
                    <input type="text" placeholder="Nhập tên sách"/>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;