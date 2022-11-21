import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

const ShowBookDetails = () => {
    const [book, setBook] = useState([]);
    const params = useParams();

    //Delete function
    const onDeleteClick = (id) => {
        if (window.confirm("Are you Sure?")) {
            axios.delete('http://localhost:8080/api/books/' + id).then(res => {
                window.location.href = '/';
            }).catch(err => {
                console.log('Error in Show Book Details');
            })
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/books/' + params.id).then((res) => {
            setBook(res.data)
        }).catch((err) => {
            console.log('error in Show Book Details, No Data');
        })

    }, [])

    let BookItem = <div>
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Details</th>
                    <th scope="col">Description</th>
                    {/* <th scope="col">Handle</th> */}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Title</td>
                    <td>{book.title}</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Author</td>
                    <td>{book.author}</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>ISBN</td>
                    <td>{book.isbn}</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Publisher</td>
                    <td>{book.publisher}</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Published Date</td>
                    <td>{book.published_date}</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Description</td>
                    <td>{book.description}</td>
                </tr>
            </tbody>
        </table>
    </div>


    return (
        <div className="ShowBookDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <br /> <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show Book List
                        </Link>
                    </div>
                    <br />
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Book's Record</h1>
                        <p className="lead text-center">
                            View Book's Info
                        </p>
                        <hr /> <br />
                    </div>
                </div>
                <div>
                    {BookItem}
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-lg btn-block"
                            onClick={() => onDeleteClick(book._id)}
                        // onClick={this.onDeleteClick.bind(this, book._id)}
                        >Delete Book</button>
                        <br />
                    </div>

                    <div className="col-md-6">
                        <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                            Edit Book
                        </Link>
                        <br />
                    </div>

                </div>
                <br />
                {/* <button type="button" className="btn btn-outline-info btn-lg btn-block">Edit Book</button>
                <button type="button" className="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

            </div>
        </div>
    )
}

export default ShowBookDetails;