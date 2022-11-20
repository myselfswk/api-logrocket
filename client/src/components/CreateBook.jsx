import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [isbn, setisbn] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [publisher, setPublisher] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      isbn: isbn,
      author: author,
      description: description,
      publishedDate: publishedDate,
      publisher: publisher
    };

    axios.post('http://localhost:8080/api/books', data).then(res => {
      setTitle('')
      setisbn('')
      setAuthor('')
      setDescription('')
      setPublishedDate('')
      setPublisher('')
      window.location.href = '/'
    }).catch(err => {
      console.log("Error in CreateBook!");
    })
  }

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show BooK List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">
              Create new book
            </p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Book'
                  name='title'
                  className='form-control'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='ISBN'
                  name='isbn'
                  className='form-control'
                  value={isbn}
                  onChange={(e) => setisbn(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this book'
                  name='description'
                  className='form-control'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={publishedDate}
                  onChange={(e) => setPublishedDate(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Publisher of this Book'
                  name='publisher'
                  className='form-control'
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBook;