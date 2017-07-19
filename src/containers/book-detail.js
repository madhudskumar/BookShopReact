import React, {Component} from 'react';
import { connect } from 'react-redux'

class BookDetail extends Component {
    render(){
        if(!this.props.book) {
            return (
                <div>Loading</div>
            )
        }
        return (
            <section>
                <div>
                    <h1>{this.props.book.title}</h1>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);