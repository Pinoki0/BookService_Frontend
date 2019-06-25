import React, { Component } from 'react';
import axios from 'axios';

export default class AddNews extends Component {

    constructor(props) {
        super(props);

        this.onChangeNewsDescription = this.onChangeNewsDescription.bind(this);
        this.onChangeNewsTopic = this.onChangeNewsTopic.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            news_topic:'',
            news_description: ''


        }
    }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create News</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Topic: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.news_topic}
                            onChange={this.onChangeNewsTopic}
                        />
                    </div>
                    <div className="form-group" >
                        <label>Description: </label>
                        <textarea
                            className="form-control"
                            value={this.state.news_description}
                            style={{ height: 200}}
                            onChange={this.onChangeNewsDescription}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create News" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
    onChangeNewsTopic(e) {
        this.setState({
            news_topic: e.target.value
        });
    }

    onChangeNewsDescription(e) {
        this.setState({
            news_description: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`News Topic: ${this.state.news_topic}`);
        console.log(`News Description: ${this.state.news_description}`);
        const newNews = {
            news_topic: this.state.news_topic,
            news_description: this.state.news_description

        };

        axios.post('http://localhost:5000/api/news/addNews', newNews)
            .then(res => console.log(res.data));


        this.setState ( {
            news_topic:'',
            news_description: ''


        })
    }
}
