
import React, { Component } from 'react';
import axios from 'axios'
import 'react-dropdown/style.css'



export default class BooksSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            book_genre:'',
            data: [],

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const book = {
            book_genre: this.state.book_genre

        }

        findBook(book).then(res => {
            //console.log(res)
            this.setState({data: res})
        })

    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields" >
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="book_genre">Enter Book Genre  </label>
                        <input type="book_genre" id="book_genre" className="FormField__Input" placeholder="" name="book_genre" value={this.state.book_genre} onChange={this.handleChange} />
                    </div>

                    <div className="form-group" style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="submit" value="Find Books" className="btn btn-primary" />
                    </div>

                    <div>
                        <ul>
                            <table className="table table-striped" style={{ marginTop: 20 }} >
                                <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Genre</td>
                                    <td>Description</td>
                                    <td>Premiere Date</td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map(el => (
                                    <tr>
                                        <td>{el.book_name}</td>
                                        <td>{el.book_genre}</td>
                                        <td>{el.book_description}</td>
                                        <td>{el.book_premiere_date}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </ul>
                    </div>
                </form>
            </div>
        );
    }
}
export const findBook = book => {
    return axios
        .post('http://localhost:5000/api/book/read', {
            book_genre: book.book_genre
        })
        .then(res => {
            return res.data
        })
        .catch(function (error){
            console.log(error);
        })
}
