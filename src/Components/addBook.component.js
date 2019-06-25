import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
export default class AddBook extends Component {

    constructor(props) {
        super(props);

        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeBookGenre = this.onChangeBookGenre.bind(this);
        this.onChangePremiereDate = this.onChangePremiereDate.bind(this);
        this.onChangeBookDescription = this.onChangeBookDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_name: '',
            book_genre: '',
            book_decription: '',
            book_premiere_date:new Date(),
            book_rating: '',

        }
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.book_name}
                                onChange={this.onChangeBookName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.book_description}
                            onChange={this.onChangeBookDescription}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Adventure"
                                    checked={this.state.book_genre==='Adventure'}
                                    onChange={this.onChangeBookGenre}
                            />
                            <label className="form-check-label">Adventure</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Fantasy"
                                    checked={this.state.book_genre==='Fantasy'}
                                    onChange={this.onChangeBookGenre}
                            />
                            <label className="form-check-label">Fantasy</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="Comedy"
                                    checked={this.state.book_genre==='Comedy'}
                                    onChange={this.onChangeBookGenre}
                            />
                            <label className="form-check-label">Comedy</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="Romantic"
                                    checked={this.state.book_genre==='Romantic'}
                                    onChange={this.onChangeBookGenre}
                            />
                            <label className="form-check-label">Romantic</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="Historical"
                                    checked={this.state.book_genre==='Historical'}
                                    onChange={this.onChangeBookGenre}
                            />
                            <label className="form-check-label">Historical</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Premiere Date: </label>
                    </div>
                    <div className="form-group">
                        <DatePicker
                            selected={this.state.book_premiere_date}
                            onChange={this.onChangePremiereDate}
                        />

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Book" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
    onChangeBookName(e) {
        this.setState({
            book_name: e.target.value
        });
    }

    onChangeBookGenre(e) {
        this.setState({
            book_genre: e.target.value
        });
    }

    onChangeBookDescription(e) {
        this.setState({
            book_description: e.target.value
        });
    }
    onChangePremiereDate(e) {
        this.setState({
            book_premiere_date: e
        });
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Book Name: ${this.state.book_name}`);
        console.log(`Book Genre: ${this.state.book_genre}`);
        console.log(`Book Description: ${this.state.book_description}`);
        console.log(`Book Premiere Date: ${this.state.book_premiere_date}`);
        console.log(`Book Rating: ${this.state.book_rating}`);

        const newBook = {
            book_name: this.state.book_name,
            book_genre: this.state.book_genre,
            book_description: this.state.book_description,
            book_premiere_date: this.state.book_premiere_date,
            book_rating:this.state.book_rating
        };

        axios.post('http://localhost:5000/api/book/addBook', newBook)
            .then(res => console.log(res.data))

        this.setState({
            book_name: '',
            book_genre: '',
            book_description: '',
            book_premiere_date: new Date(),
            book_rating: '',

        })
    }
}
