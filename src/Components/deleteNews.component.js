import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteNews extends Component {

    constructor(props) {
        super(props);

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

            <div style={{display: 'flex', justifyContent: 'center',alignItems:'center'}}>
                <form onSubmit={this.onSubmit}>
                    <p style={{ color: 'red' }}>If you delete the news with the title "{this.state.news_topic}", you will not be able to restore it.</p>
                    <div className="form-group" style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="submit" value="Delete News" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            news_topic: this.state.news_topic,
            news_description: this.state.news_description

        };
        console.log(obj);
        axios.delete('http://localhost:5000/api/news/delete/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }





}
