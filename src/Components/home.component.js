import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const News = props => (
    <tr>
        <td>{props.news.news_topic}</td>
        <td>{props.news.news_description}</td>
        <td>
            <Link to={"/edit/"+props.news._id}>Click to edit</Link>
        </td>
        <td>
            <Link to={"/delete/"+props.news._id}>Delete</Link>
        </td>
    </tr>
)

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {news: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/news/readAll')
            .then(response => {
                this.setState({ news: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    newsList() {
        return this.state.news.map(function(currentNews, i){
            return <News news={currentNews} key={i} />;
        })
    }


    render() {
        return (
            <div>
                <h3>News</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.newsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
