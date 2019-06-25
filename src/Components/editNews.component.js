import React, { Component } from 'react';
import axios from 'axios';

export default class EditNews extends Component {

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
    componentDidMount() {
        axios.get('http://localhost:5000/api/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    news_topic: response.data.news_topic,
                    news_description: response.data.news_description,

            })
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Update News</h3>
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
                        <input type="submit" value="Update News" className="btn btn-primary" />
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
        const obj = {
            news_topic: this.state.news_topic,
            news_description: this.state.news_description

        };
        console.log(obj);
        axios.post('http://localhost:5000/api/news/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }





}
