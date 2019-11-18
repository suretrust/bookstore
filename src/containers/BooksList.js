import React from "react";


const BooksList = ({books}) => {

    const { bookID, title, category } = books

    return (
        <div>
            <h1>BooksList</h1>
            <table>
                <tr>
                    <td>Book ID: { bookID }</td>
                    <td>title: { title }</td>
                    <td>category: {category} </td>
                </tr>
            </table>
        </div>
    );
}

export default BooksList